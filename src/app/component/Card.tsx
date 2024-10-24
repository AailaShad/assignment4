import React from 'react'

const Card = (props:any) => {
  return (
      <div>
          <img src={props.Image} alt="" className="w-20 h-20 rounded-full" />
          <h1>Name: {props.Name}</h1>
          <h1>Age: {props.Age}</h1>
          <h1>Roll No: {props.RollNo}</h1>
          <h1>Class: {props.Class}</h1>
      </div>
  );
};


export default Card

