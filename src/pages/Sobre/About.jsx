import React from 'react';
import styles from "./About.module.css";
import MinhaImagem from '../../Imgs/Foto.jpg';

const About = ({ menuOpen }) => {
  return (
    <div className={`${styles.about} ${menuOpen ? styles.menuOpen : ''}`}>
      <h2> <span>Sobre mim </span> </h2>
      <div className={styles.container_about}>
        <p>
        Tenho 19 anos e estou cursando Engenharia da Computação na USF e Análise e Desenvolvimento de Sistemas na UNICSUL, ambos no 3º semestre. Sou formado em Técnico em Informática pela ETEC e atualmente estagio na área de Infraestrutura de TI. Tenho grande interesse na área de desenvolvimento e busco aprender Java, React e Python para fortalecer minhas habilidades como desenvolvedor, criando soluções inovadoras e impactantes. Procuro uma oportunidade de estágio na área de desenvolvimento para aplicar e expandir meus conhecimentos, contribuindo para projetos desafiadores e de alto impacto.    
            </p>
        <div className={styles.container_IMG}>
          <img src={MinhaImagem} alt="Minha Imagem" className={styles.imagem} />
        </div>
      </div>
    </div>
  );
};

export default About;
