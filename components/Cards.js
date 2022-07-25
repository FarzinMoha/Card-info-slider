import React, { useState } from "react";
import {ImQuotesRight} from 'react-icons/im'
import {AiFillCaretLeft , AiFillCaretRight} from 'react-icons/ai'
import data from "../data";

function Cards() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];

  const checkIndexValid = (number) =>{
    if(number>data.length-1){
        return(0)
    }
    if(number<0){
        return( data.length -1)
    }
    return number
  }

    const nextPerson = () =>{
        setIndex((index) =>{
            return checkIndexValid( index + 1 )
        })
    }
    const prevPerson = () =>{
        setIndex((index) =>{
            return checkIndexValid( index - 1 )
        })
    }

    const randomSelect = () =>{
        let number = Math.floor(Math.random()*data.length)
        if(number === index){
            number = (index+1)
        }
        setIndex(checkIndexValid(number))
    }

  return (
    <div className="card">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <ImQuotesRight className="img-icon"/>
      </div>
      <p className="card-name">{name}</p>
      <p className="card-job">{job}</p>
      <p className="card-text">{text}</p>
      <div className="card-around-button">
        <AiFillCaretLeft onClick = { prevPerson } className="card-around-button-icon"  />
        <AiFillCaretRight onClick = { nextPerson } className="card-around-button-icon" />
      </div>
      <button onClick={ randomSelect } className="card-btn">Random</button>
    </div>
  );
}

export default Cards
