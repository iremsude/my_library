//import { useState } from 'react';
import React, {useState, useEffect}from 'react'
import './Navbar.css';
import axios from 'axios';   
import { useNavigate } from 'react-router-dom';                                                                                       
import { GoSearch } from "react-icons/go";

function Navbar({setBooks}) {           

const[search,setSearch]= useState(" ");
const handleKeyDown =(e) =>{
  if(e.key === 'Enter'){
    searchBooks(e);
  }
};
console.log(process.env.REACT_APP_SECRET_NAME)
const searchBooks = async (e) => {
  e.preventDefault();
  const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.REACT_APP_SECRET_NAME}`+'&maxResults=40');
  setBooks(response.data.items);
  navigate('/')
};
//max results yazacaksın ben 40 dedim mesela

  const navigate= useNavigate();
  const HomeLink = () => {
  navigate('/');

}
  return (
    < div className='navbar'>

        <img  onClick={HomeLink} className="logo" src="/images/logo.png" alt=""/>
        <div className="search">
            <input className='searchbox' type="text" placeholder='"Enter Your Book Name'
            value={search} onKeyDown={(e)=> handleKeyDown(e)} onChange={e=> setSearch(e.target.value)}>
            </input>
     
            <button className='searchButton' onClick={(e)=>searchBooks(e)}> <GoSearch className ="search-icon"/></button> 
        </div>
    </div>
  )
}

export default Navbar


