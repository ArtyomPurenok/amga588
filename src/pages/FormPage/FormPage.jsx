import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./FormPage.scss"

import { setValue } from "../../redux/reducer/dataInputsReducer";
import {Button} from "../../components/Button"


export const FormPage = () => {
    const dispatch = useDispatch();
    const dataFromReducer = useSelector((state) => state.dataInputsReducer);

    const [input, setInput] = useState(0);
    const [textarea, setTextarea] = useState(0);
    const [checkbox, setCheckbox] = useState(0);


    const onInputChange = (event) => {
        setInput(event.target.value);
      };
    const onTextareaChange = (event) => {
        setTextarea(event.target.value);
      };
    const onCheckboxChange = (event) => {
        setCheckbox(event.target.value);
      };


      const CreateForm = (el) => {
        el.preventDefault();

        const formData = {
            input: input,
            textarea: textarea,
            checkbox: checkbox,
        }; 
        
        dispatch(setValue(formData));
    }


    const createField = (num, typeField) => {
        const test = new Array(+num).fill(1); 
        
        const result = (num == null ? '' : test.map(() => {
            return typeField
        }))
        return result
    }






    return <div className="form-page">

        <form onSubmit={CreateForm} className="form-page_form">
            <div className="form-page_input-field">
                <p>Input</p>
                <input name="input" value={input} onChange={onInputChange} type="number" />
            </div>

            <div className="form-page_input-field">
                <p>Textarea</p>
                <input name="textarea" value={textarea} onChange={onTextareaChange} type="number" />
            </div>

            <div className="form-page_input-field">
                <p>Checkbox</p>
                <input name="checkbox" value={checkbox} onChange={onCheckboxChange} type="number" />
            </div>

            <Button text="Build" classname="form-page_button"/>
        </form>


        <h1 className="form-page_title">Result</h1>

        <div className="form-page_result">
            <div className="form-page_result-input">
                <p>Input</p>
                {createField(dataFromReducer.inputData, <input type="text"/>)}
            </div>

            <div className="form-page_result-input">
                <p>Textarea</p>
                {createField(dataFromReducer.textareaData, <textarea/>)}
            </div>

            <div className="form-page_result-input">
                <p>Checkbox</p>
                {createField(dataFromReducer.checkboxData, <input type="checkbox"/>)}
            </div>
        </div>

    </div>
}