import React, { useState, useEffect } from 'react';
import styles from './Projects.module.css';

const Projects = ({ menuOpen }) => {
  const [currentCard, setCurrentCard] = useState(0); // Estado para controlar o card atual
  const [isMobile, setIsMobile] = useState(false); // Estado para verificar se a tela é móvel

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Define se a tela é móvel baseada na largura
    };

    handleResize(); // Verifica o tamanho da tela ao montar o componente

    window.addEventListener('resize', handleResize); // Adiciona um ouvinte de redimensionamento da tela

    return () => {
      window.removeEventListener('resize', handleResize); // Remove o ouvinte ao desmontar o componente
    };
  }, []);

  const cards = [
    {
      title: 'New_Home',
      description: 'O projeto é um site de vendas de imóveis. Buscando oferecer um ambiente dinâmico e facil para vender imóvel',
      link: 'https://github.com/PedroFaria14/New_Home'
    },
    {
      title: 'Design-Lab',
      description: 'O projeto é um blog dedicado à publicação de artes e designs. Buscando oferecer um ambiente dinâmico e interativo para artistas e entusiastas de design compartilharem suas criações e experiências.',
      link: 'https://github.com/PedroFaria14/Design-Lab'
    },
    {
      title: 'Chess System Java',
      description: 'O projeto é uma implementação completa do jogo de xadrez em Java, proporcionando uma experiência interativa e desafiadora.',
      link: 'https://github.com/PedroFaria14/Chess-System-Java'
    },
    {
      title: 'Details Movies',
      description: 'Projeto pessoal de um site dedicado ao universo cinematográfico, oferecendo aos usuários a possibilidade de pesquisar e descobrir os melhores filmes.',
      link: 'https://github.com/PedroFaria14/Details_Movies'
    },

    {
      title: 'Lista_de_Tarefas',
      description: 'Projeto de uma lista de tarefas, permitindo aos usuários adicionar e classificar a importância de cada tarefa. ',
      link: 'https://github.com/PedroFaria14/Lista_de_Tarefas'
    },
    {
      title: 'Secret Word',
      description: 'Projeto do cursos "React do básico ao avançado", aplicado por Matheus Battisti. É um jogo de encontre a palavra , feito utilizando JavaScript e React.',
      link: 'https://pedrofaria14.github.io/Secret-Word/'
    },
    {
      title: 'ReactGram',
      description: 'Projeto do cursos "React do básico ao avançado", aplicado por Matheus Battisti. É site de compartilhamento de fotos e vídeos usando JavaScript e React, com um backend construído em Node.js e Express.',
      link: 'https://github.com/PedroFaria14/ReactGram'
    },
    {
      title: 'WorkShop JavaFX JDBC',
      description: 'O projeto desenvolvido é um sistema de gerenciamento de usuários implementado em Java, utilizando o framework JavaFX para a interface gráfica, Scanner Builder para entrada de dados e JDBC para a comunicação com um banco de dados.',
      link: 'https://github.com/PedroFaria14/-WorkShop-JavaFX-JDBC'
    },

    {
      title: 'WorkShop SpringBoot3 MongoDB',
      description: 'O projeto desenvolvido é um sistema de gerenciamento de posts implementado em Java, utilizando o framework Spring Boot 3 e o BancoDB para armazenar e gerenciar as publicações.',
      link: 'https://github.com/PedroFaria14/WorkShop-SpringBoot3-MongoDB'
    },

    {
      title: 'Gerador de Senhas',
      description: 'Projeto de uma ferramenta capaz de gerar senhas aleatórias e seguras para uso em diferentes contextos, como contas online, sistemas de login, serviços bancários, entre outros.',
      link: 'https://github.com/PedroFaria14/Gerador-de-Senhas'
    },

    {
      title: "Dicas-MKT",
      description: '1Meu 1 Projeto foi de um blog de Estratégias de Marketing Digital para pequenas e médias empresas. Este projeto é uma aplicação Web',
      link: 'https://pedrofaria14.github.io/Dicas-MKT/site/'
    },
    {
      title: 'Controle-de-Estoque',
      description: 'Trabalho de Conclusão de Curso Este projeto é uma aplicação Web usando ASP.NET core 6.0, onde o modelo de negócio consiste no gerenciamento de Fornecedores, Lotes, Categorias e Produto.',
      link: 'https://github.com/PedroFaria14/Controle-de-Estoque'
    },
    {
      title: 'Calculadora',
      description: 'Projeto de uma calculadora em Python utilizando a biblioteca PySide6',
      link: 'https://github.com/PedroFaria14/Calculadora-Python'
    },
  ];

  const nextCard = () => {
    setCurrentCard((currentCard + 1) % cards.length); 
  };

  return (
    <div className={`${styles.container} ${menuOpen ? styles.menuOpen : ''}`}>
      <h3><span>Projetos</span></h3>
      <main className={styles.cards}>
        <section className={styles.card1}>
          <h5><b>{cards[currentCard].title}</b></h5>
          <p>{cards[currentCard].description}</p>
          <a href={cards[currentCard].link} className={styles.linkButton}>Ver mais</a>
          </section>
      </main>
      <button className={styles.nextButton} onClick={nextCard}>Próximo</button> 

    </div>
  );
}

export default Projects;
