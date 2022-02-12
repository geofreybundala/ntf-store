import React from 'react'
type InputOption = {
    inputtype: string,
    classes: string,
    placeholder: string;

}

const Input = ({inputtype , classes, placeholder}: InputOption) => {

  return (
        <input type={inputtype} className={classes} placeholder={placeholder}/> 
    )
}

export default Input