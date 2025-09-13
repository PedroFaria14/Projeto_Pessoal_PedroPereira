import React from 'react';
import styles from "./About.module.css";
import MinhaImagem from '../../Imgs/Foto.jpeg';

const About = ({ menuOpen }) => {
  return (
    <div className={`${styles.about} ${menuOpen ? styles.menuOpen : ''}`}>
      <h2> <span>Sobre mim </span> </h2>
      <div className={styles.container_about}>
        <p>
       Tenho 20 anos e estou cursando Engenharia da Computação na USF e Análise e Desenvolvimento de Sistemas na UNICSUL, ambos no 4º semestre. Sou formado em Técnico em Informática pela ETEC e atualmente atuo como estagiário em desenvolvimento blockchain no CPQD, participando de projetos de Pesquisa e Desenvolvimento (P&D) focados em Identidade Digital Descentralizada (IDD), integração de sistemas distribuídos e utilizando linguagens como Go, TypeScript, Python e React
            </p>
        <div className={styles.container_IMG}>
          <img src={MinhaImagem} alt="Minha Imagem" className={styles.imagem} />
        </div>
      </div>
    </div>
  );
};

export default About;
