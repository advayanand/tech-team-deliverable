import React, { useState } from "react";
import axios from "axios";

import './Form.css';
import SubmitButton from "./SubmitButton";


const Form = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [funFact, setFunFact] = useState('');
    const [errors, setErrors] = useState(null);
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [funfactError, setFunFactError] = useState('');
    const [formHasErrors, setFormHasErrors] = useState(true);
    

    const validateFormElements = () => {
        let errors = false;
        if (name.length === 0)
        {
            setNameError("Must specify a name");
            // setFormHasErrors(true);
            errors = true;
        }
        if (email.matc)
        {
            setEmailError("Invalid email");
            errors = true;
        }
        if (funFact.length === 0)
        {
            setFunFactError("Must specify a fun fact");
            // if (!formHasErrors) setFormHasErrors(true);
            errors = true;
        }
        // setErrors(errors);
        // console.log('done validation');
        return errors;
    }
    
    const clearForm = () => {
        setName('');
        setEmail('');
        setFunFact('');
        setNameError('');
        setEmailError('');
        setFunFactError('');
    }

    const submitForm = async e => {
        const errors = validateFormElements();
        // console.log(errors);
        if (!errors) {
            console.log('sending request');
            const res = await axios.get(`https://hack-tech-app-endpoint.herokuapp.com/test?name=${name}&email=${email}&funfact=${funFact}`);
            console.log(res.data);
            clearForm();
            props.onSuccess();
            setFormHasErrors(false);
        }
    }

    return (
        <div className='form-content'>
            <h2>Hack UCI Application</h2>
            <label className='form-input-label'>
                Name
                
            </label >
            <input className='form-input' value={name} placeholder='Name' onChange={e => setName(e.target.value)} />
            {nameError ? (<p style={{color: 'red', marginTop: '0'}}>{nameError}</p>) : null}
            <label className='form-input-label'>
                Email
                
            </label>
            <input className='form-input' type='email' value={email} placeholder='Email' onChange={e => setEmail(e.target.value)} />
            {emailError ? (<p style={{color: 'red'}}>{emailError}</p>) : null}
            <label className='form-input-label'>
                Fun Fact
                
            </label>
            <textarea className='form-input' value={funFact} placeholder='Fun Fact' onChange={e => setFunFact(e.target.value)} />
            {funfactError ? (<p style={{color: 'red'}}>{funfactError}</p>) : null}
            <SubmitButton onClick={submitForm} />
        </div>
    )
}

export default Form;