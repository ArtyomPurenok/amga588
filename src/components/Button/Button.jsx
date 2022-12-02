import React from "react";


export const Button = ({classname, text, onClick}) => {
    return <button className={classname} onClick={onClick}>{text}</button>
}