
import style from './Footer.module.css'
const Footer = () => {
  console.log("Footer component rendered");
 

  return (
    <footer className={style.footer}>
    <h3>Projeto do meu Portfólio, onde compartilho minhas habilidades e projetos.</h3>
    <p>Portfólio &copy; 2025</p>
    
    </footer>
    
  );
}


export default Footer
