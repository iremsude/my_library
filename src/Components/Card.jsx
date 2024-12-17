import React from 'react'
import './Card.css';
import { useNavigate } from 'react-router-dom';


  function Card({name,yazar,imj,desc,pher,pcount,dil,tur,price}) {
  const navigate= useNavigate();
  const DetailLink = () => {
    navigate('/detail');
  }; 
  
  
  return (
    <div className='Card'
      onClick={()=> navigate('/detail/ryt',{state:{name:name,yazar:yazar,desc:desc ,pher:pher , pcount:pcount ,dil:dil ,tur:tur, imj:imj, price:price}})}>
       
        <div className='bottom'>
        <h3 className='name1'>{name}</h3>  
        <h3 className='author2'>{yazar}</h3> 

        <div className= 'case1' >
          <img className="imj" src={imj === undefined ||null ? '/images/nofoto.jpg':imj} width={imj === undefined && 128} alt="" ></img>
        </div>

        <p className='amount'>&#x20BA; {price} </p>
        <button className=  {price != null ? "buy" : " buy-no" }>
        {price != null ? "Satın Al" : "Stok yok" }
        </button>



        </div>
    </div>
  )
}

export default Card