import React from "react";
import { FaCamera, FaComment, FaComments, FaDatabase, FaLevelUpAlt, FaNetworkWired, FaRegKeyboard, FaUserClock, FaUsersCog } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";

import csti from "../assets/central.jpg";

const ModelCSTI = () => {
  return (
    <div className="w-full h-screen flex justify-center p-5 bg-slate-3s">
      <div className="max-w-full p-5 rounded-lg flex">

        <div className="flex flex-col items-center max-w-4xl rounded-xl p-5 mx-5">
          <FaUsersCog size={100} color="0F172A" />
          <h2 className="text-5xl font-bold text-slate-900 mb-5">
            Central de Serviços de TI - CSTI
          </h2>
          <p className="text-slate-900 font-medium text-2xl">
            O NUTEC garante os serviços de atendimento e suporte aos usuários de
            soluções de tecnologia da informação e comunicação da SJAP através da
            Central de Serviços de TI, que deverá propiciar ponto único de contato
            com os usuários internos e externos de TI desta SJAP.
          </p>
        </div>
        

        <div className="mx-5">
          <h2 className="font-bold text-6xl text-slate-900 mb-3 text-center">
            São competências da CSTI
          </h2>
          <div className="grid grid-cols-4">
            <div className="max-w-xs border-2 rounded-xl p-2 border-slate-800 bg-white/50 flex flex-col items-center mx-3 my-3">
              <FaUserClock size={40} className='mb-3'/>
              <p className="text-slate-900 text-sm text-center">
                Receber, registrar, controlar, processar, atender e encerrar
                chamados de TI.
              </p>
            </div>
            <div className="max-w-xs border-2 rounded-xl p-2 border-slate-800 bg-white/50 flex flex-col items-center mx-3 my-3">
              <FaComments size={40} className='mb-3'/>
              <p className="text-slate-900 text-sm text-center">
                Esclarecer dúvidas e orientar os usuários internos e externos
                sobre quaisquer assuntos e tecnologias inerentes aos serviços
                contratados.
              </p>
            </div>
            <div className="max-w-xs border-2 rounded-xl p-2 border-slate-800 bg-white/50 flex flex-col items-center mx-3 my-3">
              <FaComment size={40} className='mb-3'/>
              <p className="text-slate-900 text-sm text-center">
                Manter os usuários internos e externos informados sobre a
                situação e o andamento de suas solicitações, desde que
                solicitado
              </p>
            </div>
            <div className="max-w-xs border-2 rounded-xl p-2 border-slate-800 bg-white/50 flex flex-col items-center mx-3 my-3">
              <GrPersonalComputer size={40} className='mb-3'/>
              <p className="text-slate-900 text-sm text-center">
                Investigar, diagnosticar, resolver e documentar as causas e as
                soluções de problemas referentes à microinformática
              </p>
            </div>
            <div className="max-w-xs border-2 rounded-xl p-2 border-slate-800 bg-white/50 flex flex-col items-center mx-3 my-3">
              <FaLevelUpAlt size={40} className='mb-3'/>
              <p className="text-slate-900 text-xs text-center">
                Encaminhar a outras unidades, internas à TI, as solicitações que necessitem da atuação de outras áreas, quando não puderem ser atendidas pela própria CSTI.
              </p>
            </div>
            <div className="max-w-xs border-2 rounded-xl p-2 border-slate-800 bg-white/50 flex flex-col items-center mx-3 my-3">
              <FaRegKeyboard size={40} className='mb-3'/>
              <p className="text-slate-900 text-sm text-center">
                Substituir itens de suprimentos e efetuar manutenção em geral nos equipamentos de microinformática
              </p>
            </div>
            <div className="max-w-xs border-2 rounded-xl p-2 border-slate-800 bg-white/50 flex flex-col items-center mx-3 my-3">
              <FaCamera size={40} className='mb-3'/>
              <p className="text-slate-900 text-sm text-center">
                Conectar, acompanhar e prestar apoio a execução e gravação das videosconferências
              </p>
            </div>
            <div className="max-w-xs border-2 rounded-xl p-2 border-slate-800 bg-white/50 flex flex-col items-center mx-3 my-3">
              <FaNetworkWired size={40} className='mb-3'/>
              <p className="text-slate-900 text-sm text-center">
                Efetuar teste, ativação e desativação de pontos de rede e equipamentos de microinformática
              </p>
            </div>
            <div className="max-w-xs border-2 rounded-xl p-2 border-slate-800 bg-white/50 flex flex-col items-center mx-3 my-3">
              <FaDatabase size={40} className='mb-3'/>
              <p className="text-slate-900 text-xs text-center">
                Manter atualizada a base de conhecimento de TI para uso pelas unidades e usuários internos e externos de TI da JFAP
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelCSTI;
