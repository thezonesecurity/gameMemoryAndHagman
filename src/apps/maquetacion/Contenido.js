import React from "react";

export const Contenido = () => {
  return (
    <div class="row">
      {/*sub sidebar */}
      <div class="col-3 col-s-3 menu">
        <ul>
          <li>The Flight</li>
          <li>The City</li>
          <li>The Island</li>
          <li>The Food</li>
          <li>The Food</li>
          <li>The Food</li>
          <li>The Food</li>
        </ul>
      </div>
      {/* FIN sub sidebar */}
      {/*ACCIONES */}
      <div class="col-15 col-s-9">
        {/*CABECERA */}
        <div className="cabecera">
          <button>b1</button>
          <button>b1</button>
          <button>b1</button>
        </div>
        {/*CABECERA */}
        {/*CONTENIDO */}
        <div class="col-20 col-s-12">
          <div class="aside">
            <h2>What?</h2>
            <p>Chania is a city on the island of Crete.</p>
            <h2>Where?</h2>
            <p>Crete is a Greek island in the Mediterranean Sea.</p>
            <h2>How?</h2>
            <p>You can reach Chania airport from all over Europe.</p>
          </div>
        </div>
        {/*CONTENIDO */}
      </div>
      7{/*ACCIONES */}
    </div>
  );
};
