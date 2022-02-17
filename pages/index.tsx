// import Head from 'next/head'
// import Image from 'next/image'
// import { useState } from 'react'
// import Porta from '../components/Porta'
// import Presente from '../components/Presente'
// import PortaModel from '../model/porta'
// import { atualizarPortas, criarPortas } from "../functions/portas"
import Cartao from '../components/Cartao'
import Link from 'next/link'
import styles from "../styles/Formulario.module.css"

// import styles from '../styles/Home.module.css'

export default function Formulario() {

  return (
      <div className={styles.formulario}>
        <div>
          <Cartao bgcolor="#c0392c">
            <h1>Molt Hall</h1>
          </Cartao>
          <Cartao bgcolor="#fff"></Cartao>
        </div>
        <div>
          <Cartao></Cartao>
          <Cartao bgcolor="#28a085">
            <Link href={`/jogo/4/2`}><h2 className={styles.link}>Iniciar</h2></Link>
            
          </Cartao>
        </div>
        
      </div>
  )
}

