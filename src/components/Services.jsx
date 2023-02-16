import React from "react";
import { FaRegClock } from "react-icons/fa";

const Services = () => {
  const sla = [
    {
      name: "Índice de início de atendimento",
      desc: "98% das solicitações (e-sosti) deverão ter o seu atendimento iniciado em no máximo, 08 minutos",
      meta: "98%",
    },
    {
      name: "Índice de solicitações atendidas em 1 hora",
      desc: "60% das solicitações (e-sosti) deverão ser atendidas em no máximo, 01 hora",
      meta: "60%",
    },
    {
      name: "Índice de início de atendimento em 3 horas",
      desc: "80% das solicitações (e-sosti) deverão ser atendidas em no máximo, 02 horas",
      meta: "80%",
    },
    {
      name: "Índice de início de atendimento em 7 horas",
      desc: "95% das solicitações (e-sosti) deverão ser atendidas em no máximo, 07 horas",
      meta: "95%",
    },
    {
      name: "Índice de início de atendimento em até 48 horas",
      desc: "100% das solicitações (e-sosti) deverão ser atendidas em no máximo, 48 horas",
      meta: "100%",
    },
    {
      name: "Índice de solicitações com encerramento recusado pelos usuários",
      desc: "Permitido que até 3% das solicitações (e-sosti) poderão ter seus encerramentos recusados pelo usuários",
      meta: "3%",
    },
    {
      name: "Índice de satisfação com o Atendimento",
      desc: "Solicitações avaliadas como MUITO SATISFEITO E SATISFEITO",
      meta: "98%",
    },
  ];

  return (
    <div
      id="services"
      className="w-full bg-slate-900 flex flex-col items-center justify-center p-5"
    >
      <div className="w-4/6 m-5">
        <h1 className="text-4xl text-white font-bold text-center">
          Metas de nível de serviço
        </h1>
        <h2 className="text-lg font-medium text-white text-center px-5">
          A medida da prestação dos serviços de atendimento ao usuário é por
          resultado, ou seja, é efetuada a cada solicitação dos usuários e
          consolidada mensalmente conforme indicadores de níveis de serviço
          supracitados
        </h2>
      </div>

      <div className="grid grid-col-1 xl:grid-cols-4 w-full justify-center items-center">
        <div className="flex flex-col items-center justify-between mx-2 p-3 bg-slate-600/50 rounded-xl shadow-lg shadow-slate-600">
          <FaRegClock className="mb-5" size={50} color="FFFFFF" />
          <div className="flex flex-col items-center justify-between">
            <h2 className="text-base font-bold text-slate-200 text-center">
              {sla[0].name}
            </h2>
            <h2 className="text-sm text-slate-200 text-juscenter my-3 p-2">
              {sla[0].desc}
            </h2>
            <h2 className="text-lg text-slate-200 font-bold">
              Meta: {sla[0].meta}
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between mx-2 p-3 bg-slate-600/50 rounded-xl shadow-lg shadow-slate-600">
          <FaRegClock className="mb-5" size={50} color="FFFFFF" />
          <div className="flex flex-col items-center justify-between">
            <h2 className="text-base font-bold text-slate-200 text-center">
              {sla[1].name}
            </h2>
            <h2 className="text-sm text-slate-200 text-center my-3 p-2">
              {sla[1].desc}
            </h2>
            <h2 className="text-lg text-slate-200 font-bold">
              Meta: {sla[1].meta}
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between mx-2 p-3 bg-slate-600/50 rounded-xl shadow-lg shadow-slate-600">
          <FaRegClock className="mb-5" size={50} color="FFFFFF" />
          <div className="flex flex-col items-center justify-between">
            <h2 className="text-base font-bold text-slate-200 text-center">
              {sla[2].name}
            </h2>
            <h2 className="text-sm text-slate-200 text-center my-3 p-2">
              {sla[2].desc}
            </h2>
            <h2 className="text-lg text-slate-200 font-bold">
              Meta: {sla[2].meta}
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between mx-2 p-3 bg-slate-600/50 rounded-xl shadow-lg shadow-slate-600">
          <FaRegClock className="mb-5" size={50} color="FFFFFF" />
          <div className="flex flex-col items-center justify-between">
            <h2 className="text-base font-bold text-slate-200 text-center">
              {sla[3].name}
            </h2>
            <h2 className="text-sm text-slate-200 text-center my-3 p-2">
              {sla[3].desc}
            </h2>
            <h2 className="text-lg text-slate-200 font-bold">
              Meta: {sla[3].meta}
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between mx-2 p-3 bg-slate-600/50 rounded-xl shadow-lg shadow-slate-600">
          <FaRegClock className="mb-5" size={50} color="FFFFFF" />
          <div className="flex flex-col items-center justify-between">
            <h2 className="text-base font-bold text-slate-200 text-center">
              {sla[4].name}
            </h2>
            <h2 className="text-sm text-slate-200 text-left my-3 p-2">
              {sla[4].desc}
            </h2>
            <h2 className="text-lg text-slate-200 font-bold">
              Meta: {sla[4].meta}
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between mx-2 my-3 p-3 bg-slate-600/50 rounded-xl shadow-lg shadow-slate-600">
          <FaRegClock className="mb-5" size={50} color="FFFFFF" />
          <div className="flex flex-col items-center justify-between">
            <h2 className="text-base font-bold text-slate-200 text-center">
              {sla[5].name}
            </h2>
            <h2 className="text-sm text-slate-200 text-left my-3 p-2">
              {sla[5].desc}
            </h2>
            <h2 className="text-lg text-slate-200 font-bold">
              Meta: {sla[5].meta}
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between my-3 mx-2 p-3 bg-slate-600/50 rounded-xl shadow-lg shadow-slate-600">
          <FaRegClock className="mb-5" size={50} color="FFFFFF" />
          <div className="flex flex-col items-center justify-between">
            <h2 className="text-base font-bold text-slate-200 text-center">
              {sla[6].name}
            </h2>
            <h2 className="text-sm text-slate-200 text-left my-3 p-2">
              {sla[6].desc}
            </h2>
            <h2 className="text-lg text-slate-200 font-bold">
              Meta: {sla[6].meta}
            </h2>
          </div>
        </div>
      </div>

      <div className="w-4/6 flex flex-col justify-center items-center p-5 bg-slate-600/70 border-2 border-slate-500 rounded-lg my-5">
          <h2 className="text-xl text-bold text-white text-center">
            Observações
          </h2>
          <ul>
            <li className="text-xs text-white my-3">
              O serviço de atendimento e suporte ao usuário de TI da JFAP possui
              preço fixo mensal, ou seja, a empresa contratada não recebe por
              demanda de chamados.
            </li>
            <li className="text-xs text-white my-3">
              Níveis de serviço são critérios objetivos e mensuráveis
              estabelecidos visando aferir e avaliar diversos fatores
              relacionados com os serviços contratados, como qualidade,
              desempenho, disponibilidade, custo, abrangência, segurança e
              etc...
            </li>
            <li className="text-xs text-white my-3">
              Os indicadores de níveis de serviço materializam a mensuração dos
              níveis de serviço, tendo sido definidos de acordo com a natureza e
              características de cada serviço.
            </li>
            <li className="text-xs text-white my-3">
              As metas são medidas do primeiro ao último dia de cada mês
            </li>
            <li className="text-xs text-white my-3">
              Os níveis de serviços são aferidos mensalmente, considerando as
              solicitações encerradas entre o primeiro e o último dia do mês.
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Services;
