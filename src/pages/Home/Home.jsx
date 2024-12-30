import React from 'react';
import styles from './Home.module.css'; // Importe como styles, não style

const Home = ({ menuOpen }) => {
  return (
<>
    
<div className={`${styles.container} ${menuOpen ? styles.menuOpen : ''}`}>
<h3>OLÁ, SEJA BEM VINDO AO MEU PORTFÓLIO  </h3>
<h5>Aqui compartilho alguns dos projetos que desenvolvi, demonstrando meu comprometimento, técnica e minha dedicação a esse mundo da tecnologia.</h5>

<h3><span>Principais projetos</span></h3>
<main className={styles.cards}>
  <section className={styles.card1}>
    <h3><span>Design-Lab</span></h3>
    <p>O projeto é um blog dedicado à publicação de artes e designs. Buscando oferecer um ambiente dinâmico e interativo para artistas e entusiastas de design compartilharem suas criações e experiências.</p>
    <a href="https://github.com/PedroFaria14/Design-Lab"><button>Ver Mais</button></a>
  </section>

  <section className={styles.card1}>
    <h3><span>Chess-System-Java</span></h3>
    <p>O projeto é uma implementação completa do jogo de xadrez em Java, proporcionando uma experiência interativa e desafiadora.</p>
    <br/>  <a href="https://github.com/PedroFaria14/Chess-System-Java"><button>Ver Mais</button></a>
  </section>

  <section className={styles.card1}>
    <h3><span>New_Home</span></h3>
    <p>
    Projeto pessoal de um site de vendas de imóveis, oferecendo aos usuários uma ampla variedade de propriedades para compra.</p> <br/> <br/>
   <br/> <br/><a href="https://github.com/PedroFaria14/New_Home"><button>Ver Mais</button></a>
  </section>
</main>
</div>

      



   



    </>
  );
}

export default Home;
