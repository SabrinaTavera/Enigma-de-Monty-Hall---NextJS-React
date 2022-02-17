import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Porta from '../components/Porta'
import Presente from '../components/Presente'
import PortaModel from '../model/porta'
import { atualizarPortas, criarPortas } from "../functions/portas"

// import styles from '../styles/Home.module.css'

export default function Form() {

  return (
      <div style={{display: "flex"}}>
        <h1>Formulário de inicio</h1>
        
      </div>
  )
}

