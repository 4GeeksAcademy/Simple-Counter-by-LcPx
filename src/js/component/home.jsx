import React, { useState, useEffect } from 'react';

function Contador() {
  const [contador, setContador] = useState([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setContador((prevContador) => {
        let novoContador = [...prevContador];
        for (let i = 5; i >= 0; i--) {
          if (novoContador[i] < 9) {
            novoContador[i] += 1;
            break;
          } else {
            novoContador[i] = 0;
          }
        }
        return novoContador;
      });
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="container">
      <div className="contador">
        <i className="far fa-clock"></i>
        {contador.map((digito, index) => (
          <span key={index} className="digito">
            {digito}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Contador;