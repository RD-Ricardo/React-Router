import {Link} from 'react-router-dom';
function Sobre() {
    return (
      <div >
        <h1>Pagina Sobre</h1>

        <Link to="/">Home</Link>
          <Link to="/Contato">Contato</Link>
      </div>
    );
  }
  
  export default Sobre;
  