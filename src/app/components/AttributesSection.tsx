"use client"
// components/AttributesSection.js

import { Card } from '@nextui-org/react';

const AttributesSection = () => {
  return (
    <section className="text-black bg-transparent text-base font-normal font-sans text-left leading-normal m-0 p-0 border-0 block static w-full h-full max-w-none max-h-none min-w-0 min-h-0 flex flex-auto align-normal justify-normal float-none clear-none visible opacity-100">
      <div className="text-black bg-transparent text-base font-normal font-sans text-left leading-normal m-0 p-20 border-0 block relative inset-0 w-full h-full max-w-screen-2xl max-h-none min-w-0 min-h-0 flex flex-auto align-normal justify-normal float-none clear-none visible opacity-100 z-20">
        <div className="text-black bg-transparent text-base font-normal font-sans text-left leading-normal m-0 p-0 border-0 flex w-full h-full flex-auto align-normal justify-normal float-none clear-none visible opacity-100">
          <AttributesHeader />
          
          <AttributesCard
            title="Najlepsze rozwiązanie dla Twojego domu!"
            description="OcieplimyCiDom oferuje ekologiczne materiały i oszczędność energii, zapewniając najlepsze rozwiązanie dla Twojego domu."
          />
          
          <AttributesCard
            title="Skuteczna izolacja termiczna"
            description="Dlaczego warto skorzystać z naszej usługi ocieplenia rockwool? Zapewniamy skuteczną izolację termiczną, co przekłada się na oszczędność energii."
          />
          
          <AttributesCard
            title="Nowoczesne rozwiązanie dla Twojego domu"
            description="OcieplimyCiDom oferuje nowoczesne rozwiązania w postaci skutecznego ocieplenia domu przy użyciu nowoczesnej metody nadmuchowej."
          />
          
          <AttributesCard
            title="Innowacyjne technologie"
            description="Nasza firma wykorzystuje innowacyjne technologie w procesie ocieplania domów, zapewniając najwyższą jakość usług."
          />
          
          <AttributesCard
            title="Kompleksowe zarządzanie"
            description="OcieplimyCiDom oferuje kompleksowe zarządzanie projektem ocieplania domu, dbając o każdy aspekt procesu dla zadowolenia klienta."
          />
        </div>
      </div>
    </section>
  );
};

const AttributesCard = ({ title, description }) => {
  return (
    <Card className="bg-gray-800 text-white p-8 w-80 h-96">
      <h4 className="text-xl font-semibold mb-4">{title}</h4>
      <p className="text-base">{description}</p>
    </Card>
  );
};

const AttributesHeader = () => {
  return (
    <div className="text-black bg-transparent text-base font-normal font-sans text-left leading-normal m-0 mb-4 mr-4 p-0 border-0 block static w-80 h-96 flex-auto align-normal justify-normal float-none clear-none visible opacity-100">
      <span className="text-orange-600 bg-transparent text-base font-normal flex mb-3 align-center justify-normal">
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-orange-600 bg-transparent text-base font-normal mr-3">
          <path d="M9.00154 18.0159C11.3055 17.9936 13.5866 17.0337 15.2269 15.4034C17.1749 13.4672 18.1783 10.6023 17.8284 7.86741C17.2286 3.18037 13.3978 0 8.94399 0C5.56034 0 2.27145 2.12887 0.828988 5.21593C-0.275359 7.57935 -0.2773 10.4325 0.828988 12.8002C2.26122 15.8654 5.49604 17.9831 8.88645 18.0159C8.92481 18.016 8.96317 18.016 9.00154 18.0159ZM8.89604 16.5146C5.45454 16.4812 2.24376 13.8046 1.60538 10.373C1.15531 7.95356 2.00495 5.3354 3.77477 3.6173C5.84143 1.61105 9.0892 0.938865 11.7896 2.07613C14.2061 3.09382 16.0145 5.45618 16.3477 8.05914C16.6334 10.2901 15.8373 12.6283 14.2729 14.239C12.9009 15.6517 10.9765 16.4953 8.99195 16.5146C8.95996 16.5147 8.92802 16.5147 8.89604 16.5146Z" fill="currentColor" />
          <path d="M8.94537 15.3602C12.438 15.3602 15.2694 12.5125 15.2694 8.99979C15.2694 5.48705 12.438 2.6394 8.94537 2.6394C5.45271 2.6394 2.62134 5.48705 2.62134 8.99979C2.62134 12.5125 5.45271 15.3602 8.94537 15.3602Z" fill="currentColor" />
        </svg>
        Ekologiczne materiały
      </span>
      <p className="text-white bg-transparent text-5xl font-light font-poppins text-left leading-14 m-0 mb-4 p-0 border-0">
        Dlaczego wybrać nas?
      </p>
      <p className="text-gray-400 bg-transparent text-sm font-normal font-sans text-left leading-7 m-0 mb-8 p-0 border-0">
        Oferujemy skuteczne ocieplanie domów przy użyciu ekologicznych materiałów, takich jak rockwool, wykorzystując nowoczesną metodę nadmuchową. Nasze usługi zapewniają skuteczną izolację termiczną oraz oszczędność energii, co sprawia, że jesteśmy najlepszym wyborem dla Twojego domu!
      </p>
    </div>
  );
};



export default AttributesSection;
