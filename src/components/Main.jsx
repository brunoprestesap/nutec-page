import React from "react";
import logoJF from "../assets/logoJF.png";
import background from "../assets/background.jpg";

const Main = () => {
  return (
    <div id="main">
      <div className="w-full h-screen relative">
        <img
          src={background}
          className="w-full h-screen object-cover"
          alt="/"
        />

        <div className="absolute top-0 left-0 bg-white/50"></div>

        <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full">
          <img src={logoJF} alt="/" className="w-36" />
          <h2 className="text-white font-bold uppercase text-lg">
            JUSTIÇA FEDERAL NO AMAPÁ
          </h2>
          <h2 className="text-white font-bold uppercase text-sm">
            NÚCLEO DE TECNOLOGIA DA INFORMAÇÃO E COMUNIÇÃO
          </h2>
          <h2 className="text-white font-bold uppercase text-sm">NUTEC</h2>
        </div>

        <div className="xl:w-4/6 2xl:w-3/6 absolute bottom-5 left-5 p-5 bg-white/70">
          <h1 className="xl:text-6xl 2xl:text-7xl text-left text-slate-800 font-bold mb-5">
            Registre um e-sosti e seja atendido com eficiência
          </h1>
          <h2 className="text-2xl text-left text-slate-700 leading-7 font-bold">
            Aproveite os benefícios ao registrar um e-sosti como por exemplo:
            prazos para conclusão do seu chamado e possibilidade de avaliar o
            atendimento do seu chamado.
          </h2>
          <div className="flex">
            <a
              href="https://esosti.trf1.jus.br/itsm/ui/?event=loadapp&value=srmssctr&uisessionid=674&_tt=cnbadgcsi8iapcpt21k2sq9r4q"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-12 py-3 bg-blue-900 rounded-2xl my-5 hover:bg-blue-600 hover:border-blue-600">
                <h2 className="text-xl text-white">Registrar um chamado</h2>
              </button>
            </a>
            <a
              href="https://esosti.trf1.jus.br/itsm/ui/?event=loadapp&value=ms_viewsr&uisessionid=662&_tt=5nh48gskmou1obar6pqk79open"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-3 bg-green-900 rounded-2xl my-5 hover:bg-green-400 hover:border-green-400 mx-5">
                <h2 className="text-xl text-white">Acompanhar um chamado</h2>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
