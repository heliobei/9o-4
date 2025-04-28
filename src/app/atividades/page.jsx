'use client'

import AtiBotaoNext from '../components/Atividades/AtiBotaoNext'
import AtiEtapas from '../components/Atividades/AtiEtapas'
import AtiAvalia from '../components/Atividades/AtiAvalia'
import AtiABP from '../components/Atividades/AtiABP'
import AtivHero from '../components/Atividades/AtivHero'

import { Divider } from '@nextui-org/react'
import AtiABPDrop from '../components/Atividades/AtiABPDrop'
import AtiDica from '../components/Atividades/AtiDica'
import AtiEstudante from '../components/Atividades/AtiEstudante'
import AtiAAvalia from '../components/Atividades/AtiAAvalia'
import Teste from '../components/Atividades/Teste'
import AtiCulminancia from '../components/Atividades/AtiCulminancia'
import AtiExemplosCulmi from '../components/Atividades/AtiExemplosCulmi'
import AtiDiscussaoFinal from '../components/Atividades/AtiDiscussaoFinal'
import AtiImportanciaC from '../components/Atividades/AtiImportanciaC'
import AtiSocioemocional from '../components/Atividades/AtiSocioemocional'


function Atividades() {
  return (
    <>
        
        <AtivHero />
        <AtiEtapas />
        <Teste />
        <AtiCulminancia />
        <AtiExemplosCulmi />
        <AtiDiscussaoFinal />
        <AtiImportanciaC />
        <AtiSocioemocional />
        <Divider className='max-w-5xl mx-auto'/>
        <AtiBotaoNext />
        
        
    </>
    
  )
}

export default Atividades