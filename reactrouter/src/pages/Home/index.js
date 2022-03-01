import { Link } from "react-router-dom";

export default function Home() {
    return (
      <div>
          <h1>Bem vindo a pagina home</h1>

          <Link to="/Sobre">Sobre</Link>
          <Link to="/Contato">Contato</Link>
      </div>
    );
  }
  

  