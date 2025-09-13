import React from 'react';

import styles from './courses.module.css';


const Courses = ({ menuOpen }) => {
  return (
    <div className={`${styles.container} ${menuOpen ? styles.menuOpen : ''}`}>
    <h3><span>Certificações</span></h3>
    <main className={styles.cards}>
        <section className={styles.card1}>
            <h5><b>React do básico ao avançado</b></h5>
            <p>
                Durante o curso de React do básico ao avançado na Udemy, adquiri habilidades para criar aplicações web modernas e dinâmicas. Ao explorar tecnologias como React, Node.js e MongoDB, pude desenvolver uma compreensão sólida dessas ferramentas e suas aplicações práticas.
            </p>
        </section>

         <section className={styles.card1}>
            <h5><b>Go</b></h5>
            <p>
                Durante o curso de Go na Alura, adquiri conhecimentos em programação concorrente, manipulação de APIs e desenvolvimento de aplicações web, explorando na prática conceitos fundamentais da linguagem e seu uso em sistemas modernos.
            </p>
        </section>

        
        <section className={styles.card1}>
            <h5><b>Curso Web Frontend</b></h5>
            <p>
                No curso "Web Frontend Fundamentos HTML5, CSS3 e JS + 10 Projetos" na Udemy, aprendi os fundamentos essenciais para o desenvolvimento web. Com foco em HTML5, CSS3 e JavaScript, adquiri habilidades para criar páginas web interativas e responsivas.
            </p>
        </section>

         <section className={styles.card1}>
            <h5><b>Java 2023 Programação Orientada a Objetos</b></h5>
            <p>
                No curso de Programação Orientada a Objetos com Java em 2023 na Udemy, adquiri habilidades para desenvolver software modular e reutilizável, utilizando Java, MySQL, Eclipse, Hibernate e MongoDB. Através de projetos práticos, apliquei os conceitos.
            </p>
        </section>

        <section className={styles.card1}>
            <h5><b>Python 3 completo</b></h5>
            <p>
                No curso "Python 3 completo" na Udemy, aprendi os fundamentos essenciais para o desenvolvimento em Python. Com foco em Django, PySide6 e Selenium.
            </p>
        </section>


<section className={styles.card1}>
            <h5><b>Segurança de Endpoint</b></h5>
            <p>
                No curso deSegurança de Endpoint na cisco, desenvolvi habilidades para criar software modular e reutilizável.
            </p>
        </section>

        
 <section className={styles.card1}>
        <h5><b>Introdução à Inteligência Artificial</b></h5>
        <p>
        No curso Introdução à Inteligência Artificial no TIC em trilhas,desenvolvi habilidades para criar aplicações dinâmicas.
           </p>
    </section>

  
    <section className={styles.card1}>
        <h5><b>Análise de Dados no Power BI</b></h5>
        <p>
        
        No curso "Análise de Dados no Power BI" da Fundação Bradesco, adquiri conhecimentos essenciais para realizar análises e visualizações de dados de forma eficaz utilizando a ferramenta Power BI.   
             </p>
    </section>


    <section className={styles.card1}>
    <h5><b>COMPETÊNCIA TRANSVERSAL - LÓGICA DE PROGRAMAÇÃO</b></h5>
    <p>
        No curso "Competência Transversal - Lógica de Programação" do SENAI, aprendi os fundamentos essenciais para o desenvolvimento de algoritmos e programas de computador.   </p>
</section>
<section className={styles.card1}>
    <h5><b>MICROSOFT EXCEL 2016 - AVANÇADO</b></h5>
    <p>
    No curso "Microsoft Excel 2016 - Avançado" da Fundação Bradesco, aprimorei minhas habilidades no uso avançado dessa poderosa ferramenta de planilhas.Assim Aprendi a utilizar funções avançadas.       </p>
</section>
<section className={styles.card1}>
    <h5><b>Análise de Dados no Power BI</b></h5>
    <p>
    
    No curso "Análise de Dados no Power BI" da Fundação Bradesco, adquiri conhecimentos essenciais para realizar análises e visualizações de dados de forma eficaz utilizando a ferramenta Power BI.   
         </p>
</section>


  <section className={styles.card1}>
        <h5><b>java Web com JSP e MySQL</b></h5>
        <p>
        No curso "Java Web com JSP e MySQL", desenvolvi habilidades para criar aplicações web dinâmicas com JavaServer Pages (JSP) e MySQL. Através de projetos práticos, aprendi a utilizar Java para a lógica de negócios.
           </p>
    </section>

<section className={styles.card1}>
<h5><b>SEGURANÇA EM TECNOLOGIA DA INFORMAÇÃO</b></h5>
<p>
No curso "Segurança em Tecnologia da Informação" da Fundação Bradesco, adquiri conhecimentos essenciais para proteger sistemas e dados contra ameaças cibernéticas. 
    </p>
</section>
<section className={styles.card1}>
<h5><b>Análise de dados com programação em R</b></h5>
<p>

No curso "Análise de Dados com Programação em R" na Coursera, desenvolvi habilidades avançadas em análise de dados utilizando a linguagem R.  

</p>
</section>
<section className={styles.card1}>
<h5><b>Fundamentos: dados, dados, em todos os lugares</b></h5>
<p>

No curso "Fundamentos: Dados, Dados, em Todos os Lugares" na Coursera, aprendi os conceitos fundamentais sobre o uso e a análise de dados. 
     </p>
</section>
   


<section className={styles.card1}>
<h5><b>HTML - AVANÇADO</b></h5>
<p>
No curso "HTML Avançado" da Fundação Bradesco, aprofundei meus conhecimentos em HTML, aprendendo técnicas avançadas para criação de páginas web mais sofisticadas e interativas.     </p>
</section>
<section className={styles.card1}>
<h5><b>DESVENDANDO A BLOCKCHAIN</b></h5>
<p>

No curso "Desvendando a Blockchain" no SENAI, adquiri conhecimentos fundamentais sobre a tecnologia blockchain e suas aplicações e como utilizar.
</p>
</section>
<section className={styles.card1}>
<h5><b>MODELANDO DADOS NO POWER BI</b></h5>
<p>

No curso "Modelando Dados no Power BI" da Fundação Bradesco, aprendi a utilizar o Power BI para criar modelos de dados eficientes e robustos.
     </p>
</section>
       


<section className={styles.card1}>
<h5><b>PREPARANDO DADOS PARA ANÁLISE - MICROSOFT POWER BI</b></h5>
<p>
No curso "Preparando Dados para Análise - Microsoft Power BI" da Fundação Bradesco, adquiri conhecimentos essenciais sobre como preparar dados para análise.  </p>
</section>
<section className={styles.card1}>
<h5><b>Introdução à Ciência de Dados: Conceitos Básicos</b></h5>
<p>

No curso "Introdução à Ciência de Dados: Conceitos Básicos" da Fundação LinkedIn, adquiri uma visão abrangente sobre os fundamentos da ciência de dados.</p>
</section>



    </main>
</div>

    
          
    
    
    
  );
}

export default Courses;
