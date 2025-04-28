'use client'
import React from 'react';
import ReactPlayer from 'react-player';



function MatVideo1() {
    return (
        <div className='max-w-7xl mx-auto py-12'>
          <div className=" p-4 ">
            
            <div className="attention-box mx-8 mb-8 text-slate-800 text-center text-lg border-2 border-primary rounded-lg p-8">
                <h1 className="text-4xl font-semibold text-slate-700 mb-4">Atividades Extras</h1>
                  <p>
                      Acesse as <a href="https://exerciciosextras9o.beieducacaopedagogico.com/" target="_blank" rel="noopener noreferrer" className="underline text-blue-800 hover:text-purple-800"> atividades extras</a>{' '}que vão além do conteúdo presente nos livros físicos. Aqui você poderá acessar e baixar PDFs com atividades para cada capítulo, dando um passo além no ensino de habilidades matemáticas.
                  </p>
                  
                </div>

            <div className="p-4 flex flex-col md:flex-row items-center">
            
              <div className="w-full md:w-1/2 pr-4">
                <div className=" mb-4">
                    <h1 className="text-4xl font-bold text-slate-700">Inflação</h1>
                </div>
                <h1 className=" text-slate-700 mb-4 pr-8">O primeiro vídeo mostra de uma forma genérica o que é inflação. 

Nos vídeos seguintes, o Professor Maurício Carvalho do canal Portal da Matemática OBMEP traz de uma forma um pouco mais detalhada sobre como é calculada a inflação, e, em seguida, alguns exemplos mais práticos de cálculos utilizando este conceito. </h1>
              </div>
              <div className="w-full md:w-1/2">
                <ReactPlayer url='https://youtu.be/0us8Oq7TeUg' width="100%" />
              </div>
            </div>
          </div>
        
        </div>
      );
    }

export default MatVideo1