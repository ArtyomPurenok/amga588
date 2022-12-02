import React from "react";
import "./StartPage.scss";
import { useNavigate } from "react-router-dom"

import {Button} from "../../components/Button"



export const StartPage = () => {
    const navigate = useNavigate();


    const navigation = () => {
        return navigate('/form')
    }


    return <div>
        <Button  onClick={navigation} text={'FORM'}/>
    </div>
}