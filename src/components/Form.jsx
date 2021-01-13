import React, {useState} from 'react';

const Form = props =>{

    const [colorForm, setColorForm] = useState({
        colorInput: "",
    })

    const onChangeHandler = e => {
        setColorForm({colorForm, [e.target.name]: e.target.value})
    }
    const submitHandler = e => {
        e.preventDefault();
        props.newColor(colorForm);
        setColorForm({
            colorInput: "",
        })
    }
    return(
        <>
            <h1>Color</h1>
            <form onSubmit={ submitHandler }>
                <div>
                    <label htmlFor="colorInput"></label>
                    <input type="text" name="colorInput" onChange={onChangeHandler} value={colorForm.colorInput}/>
                </div>
                <input type="submit" value = "Add Color"/>
            </form>
        </>
    )
}
export default Form;