import React from "react";

import csti from "../assets/central.jpg";

const ModelCSTI = () => {
  return (
    <div className="relative w-full h-screen">
      <img src={csti} className="w-full h-screen absolute top-0 left-0 object-cover" />
      <div className="absolute bottom-5 right-5 bg-slate-500 p-5 rounded-lg">
        <h2 className="text-2xl font-medium text-white">Central de Serviços de TI - CSTI</h2>
      </div>
    </div>
  );
};

export default ModelCSTI;
