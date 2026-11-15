import { useState } from "react";
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle } from "lucide-react";
import { EMAIL, EMAILJS, GITHUB, LINKEDIN } from "../../data/perfil";
import "./contato.css";

const socials = [
  { href: `mailto:${EMAIL}`, label: "E-mail", icon: Mail },
  { href: LINKEDIN, label: "LinkedIn", icon: Linkedin },
  { href: GITHUB, label: "GitHub", icon: Github },
];

const messages = {
  sending: "Enviando...",
  success: "Mensagem enviada! Vou responder o quanto antes.",
  error: "Não foi possível enviar. Tente de novo ou me chame pelo e-mail.",
  notConfigured: "O formulário ainda não está configurado. Me chame pelo e-mail ao lado.",
};

function ContactForm() {
  // idle | sending | success | error | notConfigured
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    const { serviceId, templateId, publicKey } = EMAILJS;
    if (!serviceId || !templateId || !publicKey) {
      setStatus("notConfigured");
      return;
    }

    const data = Object.fromEntries(new FormData(form));

    // Robô preencheu o campo escondido: finge que enviou e descarta
    if (data.botcheck) {
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          // Estes nomes são as variáveis {{name}}, {{email}}, {{message}} e {{time}} do modelo
          template_params: {
            name: data.name,
            email: data.email,
            message: data.message,
            time: new Date().toLocaleString("pt-BR", { dateStyle: "long", timeStyle: "short" }),
          },
        }),
      });
      if (!response.ok) throw new Error(await response.text());
      setStatus("success");
      form.reset();
    } catch (error) {
      // Mostra no console (F12) o motivo que o EmailJS devolveu, para facilitar o diagnóstico
      console.error("Erro ao enviar pelo EmailJS:", error.message);
      setStatus("error");
    }
  }

  const sending = status === "sending";
  const ok = status === "success";

  return (
    <form className="contact-form reveal" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Nome
          <input name="name" type="text" required maxLength={80} autoComplete="name" placeholder="Seu nome" />
        </label>
        <label>
          E-mail
          <input name="email" type="email" required maxLength={120} autoComplete="email" placeholder="voce@empresa.com" />
        </label>
      </div>

      <label>
        Mensagem
        <textarea name="message" required minLength={10} maxLength={2000} rows={5} placeholder="Conte sobre a vaga ou o projeto..." />
      </label>

      {/* Campo escondido anti-robô: pessoas não veem, robôs preenchem e a mensagem é descartada */}
      <input type="checkbox" name="botcheck" className="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <button type="submit" className="btn form-submit" disabled={sending}>
        <Send size={18} aria-hidden="true" /> {sending ? "Enviando..." : "Enviar mensagem"}
      </button>

      <p className={`form-status ${status}`} role="status" aria-live="polite">
        {status !== "idle" && (
          <>
            {ok ? <CheckCircle size={18} aria-hidden="true" /> : !sending && <AlertCircle size={18} aria-hidden="true" />}
            {messages[status]}
          </>
        )}
      </p>
    </form>
  );
}

function Contact() {
  return (
    <section id="contato" className="contato-section">
      <div className="contato-container">
        <h2 className="reveal">Entre em contato</h2>

        <div className="contato-grid">
          <div className="contato-info reveal">
            <h3>Vamos conversar?</h3>
            <p>
              Estou disponível para vagas e projetos. Preencha o formulário ou me
              chame por um dos canais abaixo e eu respondo o quanto antes!
            </p>

            <a href={`mailto:${EMAIL}`} className="contato-email">
              <Mail size={20} aria-hidden="true" /> {EMAIL}
            </a>

            <div className="icons">
              {socials.map(({ href, label, icon }) => {
                const Icon = icon;
                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    title={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                  >
                    <Icon className="component" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
