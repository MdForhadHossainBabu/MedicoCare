/* eslint-disable react/prop-types */

import Button from "../../components/button/Button";


export const ServiceCard = ({ service }) => {
  return (
    <div className="max-w-xs mx-auto rounded-lg border border-gray-200 shadow-lg p-5 text-center bg-white">
      <img
        src={service.icon}
        alt={`${service.service} icon`}
        className="w-16 h-16 mb-4 mx-auto"
      />
      <h3 className="text-lg font-semibold mb-2">{service.service}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
     

    <a
        href={service.link}
        
        >
    <Button label="learn more"/>
       
      </a>
    </div>
  );
};
