'use client'
import React from "react";



export default function AtiEtapas() {
  return (
    <div className="py-8">
      <div className="container mx-auto max-w-7xl pb-8">
        <h1 className="font-bold text-2xl md:text-4xl sm:text-3xl text-slate-800 py-4 pt-8 text-center">Localizando-se no Ciclo de Projetos</h1>
        <p className="text-lg mt-4 py-4 text-slate-600 p-4">
        Chegamos na Etapas 6 do Ciclo de Projetos. Aqui o projeto está finalizado e os resultados devem ser compartilhados e celebrados. Com o fim do projeto é importante também que sejam avaliadas as competências socioemocionais desenvolvidas durante o trajeto. Para te ajudar a compreender as atividades a serem desenvolvidas, vamos retomar o Ciclo de Projetos.
        </p>

      </div>
      
      <div className="container mx-auto max-w-5xl flex mt-8">
          
          <div className="w-1/3 max-w-[260px] py-4">
            <img
              src="images/educador4.jpeg"
              alt="Imagem"
              className="w-full h-auto"
            />
          </div>

          
          <div className="w-2/3 px-4 m-4 py-4">
            <h1 className="font-bold text-2xl text-slate-800 mb-4">
              Finalizando o Ciclo de Projeto do Educador
            </h1>
            <p className="text-base text-slate-600 py-2">
            O projeto está chegando ao fim e com isso você, professor, orienta os estudantes na organização do evento de culminância, assim como reflete sobre melhorias e possíveis futuras aplicações do programa.
            </p>
          </div>
      </div>

      <div className="container mx-auto max-w-5xl flex mt-8">
          

          <div className="w-2/3 px-4 m-4 py-4">
                <h1 className="font-bold text-2xl text-slate-800 mb-4">
                Finalizando o Ciclo de Projeto Coletivo
                </h1>
                <p className="text-base text-slate-600 py-2">
                Agora é a hora de organizar o evento de culminância. Os alunos preparam o ambiente e o material a ser exibido. Além disso, é um momento de reflexão sobre aprendizados tanto de conteúdo escolar quanto de habilidades e competências para a vida.
                </p>
              
               
          </div>
          
          <div className="w-1/3 max-w-[280px] py-4">
            <img
              src="images/coletivo4.jpeg"
              alt="Imagem"
              className="w-full h-auto"
            />
          </div>

          
          
      </div>
    
    </div>
  );
}
