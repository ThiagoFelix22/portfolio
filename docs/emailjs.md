# Configurar o EmailJS (formulário de contato)

O formulário de contato envia as mensagens pelo [EmailJS](https://www.emailjs.com). O plano grátis permite 200 e-mails por mês e um modelo de e-mail próprio.

## 1. Criar a conta e conectar o e-mail

1. Crie uma conta em https://www.emailjs.com.
2. Vá em **Email Services** > **Add New Service** > **Gmail** e conecte o e-mail onde você quer receber as mensagens.
3. Copie o **Service ID** (ex.: `service_abc123`).

## 2. Criar o modelo de e-mail

1. Vá em **Email Templates** > **Create New Template**.
2. Na aba **Content**, preencha:
   - **Subject:** `📩 {{name}} te mandou uma mensagem pelo portfólio`
   - **Content:** clique em **Edit Content**, mude para o modo código (`<>`) e cole todo o conteúdo de [`emailjs-template.html`](emailjs-template.html).
3. No lado direito, preencha:
   - **To Email:** o seu e-mail
   - **From Name:** `Portfólio Thiago Felix`
   - **Reply To:** `{{email}}` (assim, "Responder" vai direto para quem escreveu)
4. Salve e copie o **Template ID** (ex.: `template_xyz789`).

## 3. Pegar a Public Key

Vá em **Account** > **General** e copie a **Public Key**.

## 4. Colar no site

Em `src/data/perfil.js`, preencha:

```js
export const EMAILJS = {
  serviceId: 'service_abc123',
  templateId: 'template_xyz789',
  publicKey: 'sua-public-key',
}
```

Depois, mande uma mensagem de teste pelo formulário.

## Segurança (recomendado antes de publicar)

Os três códigos ficam visíveis no código do site, e isso é normal no EmailJS. Para ninguém usar a sua cota por outro site, vá em **Account** > **Security** e:

- em **Domains**, adicione o endereço do site publicado (e `localhost` enquanto estiver testando);
- deixe **Allow EmailJS API for non-browser applications** desligado.
