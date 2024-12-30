import React from 'react';

import styles from './Languages.module.css';
import Reactt from '../../Imgs/React.jpg';
import Java from '../../Imgs/java.jpg';
import python from '../../Imgs/python.jpg';
import MySQL from '../../Imgs/MySQL.jpg';


import JavaScript from '../../Imgs/JavaScript.jpg';
import C from '../../Imgs/C.jpg';
import CMais from '../../Imgs/Cmais.jpg';
import CSS from '../../Imgs/CSS.jpg';
import Eclipse from '../../Imgs/Eclipse.jpg';
import Git from '../../Imgs/Git.jpg';
import HTML from '../../Imgs/HTML.jpg';
import MongoDB from '../../Imgs/MongoDB.jpg';
import Node from '../../Imgs/Node.jpg';
import SpringBoot from '../../Imgs/SpringBoot.jpg';
import Typescript from '../../Imgs/Typescript.jpg';



const Languages = ({ menuOpen }) => {
  return (
    <div className={`${styles.container} ${menuOpen ? styles.menuOpen : ''}`}>
    <h3><span>Linguagens</span></h3>
    <main className={styles.cards}>
        <section className={styles.card1}>
        <div className={styles.container_IMG}>
        <img src={Reactt} alt="React" className={styles.imagem} />
      </div>
        </section>

        <section className={styles.card1}>
        <div className={styles.container_IMG}>
        <img src={Java} alt="Java" className={styles.imagem} />
      </div>

        </section>

        <section className={styles.card1}>
        <div className={styles.container_IMG}>
        <img src={JavaScript} alt="JavaScript" className={styles.imagem} />
      </div>

        </section>
        <section className={styles.card1}>
        <div className={styles.container_IMG}>
        <img src={python} alt="python" className={styles.imagem} />
      </div>

        </section>
        <section className={styles.card1}>
        <div className={styles.container_IMG}>
        <img src={MySQL} alt="MySQL" className={styles.imagem} />
      </div>

        </section>
        <section className={styles.card1}>
        <div className={styles.container_IMG}>
        <img src={CSS} alt="CSS" className={styles.imagem} />
      </div>

        </section>
        <section className={styles.card1}>
        <div className={styles.container_IMG}>
        <img src={HTML} alt="HTML" className={styles.imagem} />
      </div>

        </section>
        <section className={styles.card1}>
        <div className={styles.container_IMG}>
        <img src={MongoDB} alt="MongoDB" className={styles.imagem} />
      </div>

        </section>
        <section className={styles.card1}>
        <div className={styles.container_IMG}>
        <img src={SpringBoot} alt="SpringBoot" className={styles.imagem} />
      </div>

      </section>
      <section className={styles.card1}>
      <div className={styles.container_IMG}>
      <img src={Git} alt="Git" className={styles.imagem} />
    </div>

        </section>
        <section className={styles.card1}>
        <div className={styles.container_IMG}>
        <img src={Typescript} alt="Typescript" className={styles.imagem} />
      </div>

        </section>
        <section className={styles.card1}>
        <div className={styles.container_IMG}>
        <img src={C} alt="C" className={styles.imagem} />
      </div>

        </section>
        <section className={styles.card1}>
        <div className={styles.container_IMG}>
        <img src={CMais} alt="C++" className={styles.imagem} />
      </div>

        </section>
      
        <section className={styles.card1}>
        <div className={styles.container_IMG}>
        <img src={Eclipse} alt="Eclipse" className={styles.imagem} />
      </div>

        </section>
        <section className={styles.card1}>
        <div className={styles.container_IMG}>
        <img src={Node} alt="Node" className={styles.imagem} />
      </div>

        </section>

       

       

       
      




       



    </main>
</div>

    
  );
}

export default Languages;
