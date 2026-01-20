import { Instagram } from "lucide-react";
import { Mail } from "lucide-react";
import { Facebook } from "lucide-react";
import "./contato.css";
function contato() {
  return (
    <div className="contato-container">
      <h1>Entre em contato</h1>
      <p>Interessado em trabalhar juntos?Vamos conversar!</p>
      <div className="icons">
        <Mail className="component" />
        <Instagram className="component" />
        <Facebook className="component" />
      </div>
      <button className="email">seu@gmail.com</button>
    </div>
  );
}

export default contato;
