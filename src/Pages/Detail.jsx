import { useLocation } from "react-router-dom";
import "./Detail.css";
import React from "react";

const Detail = () => {
  const {state} = useLocation();
  return (
      <div className="detail">
        <div className="alan">
       <div className="case">
        <img className="" src={state.imj === undefined || null ? '/images/nofoto.jpg':state.imj} alt="" />
          </div>
          <div className="overview">
            <div className="yazisi">
              <h1 className='name'>{state.name}</h1>
              <h3 className='author'>Yazar: {state.yazar}</h3>
              <h5> Yayın Evi: {state.pher}</h5>
              <h5>Sayfa Sayısı: {state.pcount}</h5>
              <h5> Dil: {state.dil}</h5>
              <h5> Tür: {state.tur}</h5>

            </div>
            <div className="satinal1">
              <button className="satinal">
           
                Satın Al</button>
            </div>
          </div>
        </div>
        <div className="Desc">
          <h1>Description</h1>
          { <p>
            { state.desc != null ? state.desc : "Description bulunmuyor." }             </p> }
        </div>
      </div>
  );
};

export default Detail;
