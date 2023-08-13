import React from "react";

function Window({ data, isVisible }) {
  const closeWindow = () => {
    // Utiliza la prop isVisible para llamar a la función y cerrar la ventana
    isVisible(false);
  };

  if (!data && isVisible) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="windoow-container">
        <button onClick={closeWindow}>X</button>
        <h1>Detalles del Producto</h1>
        <img className="window-image" src={data.images} alt={data.title} />
        <h2>{data.title}</h2>
        <p>{data.price}$</p>
      </div>
    );
  }
}

export { Window };





