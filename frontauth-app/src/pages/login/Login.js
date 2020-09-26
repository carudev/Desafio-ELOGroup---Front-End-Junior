import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import logo from '../../assets/logo.png';

import {ErrorMessage, Form, Formik, Field} from 'formik';
import * as yup from 'yup';

import './Login.css';

const Login = () => {






    const handleSubmit = values => {console.log(values);}
    const validations = yup.object().shape({
        email:yup.string().email().required(),
        password: yup.string().min(8).required(),
        password_confirm: yup.string().min(8).required()
    })
/*fazer funfar*/


    return (

        <div id="login-container">
            <img src= {logo} alt="logo" />
            {/*<h1 className= "login-tittle">Acesse aqui suas leads</h1>*/}
            
            <Formik 
                initialValues={{}} 
                onSubmit={handleSubmit} 
                validationSchema={validations} 
            >

                <Form name="f1" className="Login">
                    <div className="Login-Group">
                    <p className="campo-obg">Campo Obrigatório*</p>
                        <Field 
                            name="email" 
                            className="Login-Field"
                            placeholder="Aqui vai o seu melhor e-mail"
                            autoComplete = "off"
                            required
                        />    
                            <ErrorMessage
                                component="span" 
                                name="email" 
                                className="Login-Error"

                            />
                    <p className="campo-obg">Campo Obrigatório*</p>    
                        <Field 
                            id = "password1"
                            type = "password"
                            name="password" 
                            className="Login-Field"
                            placeholder="Digite sua senha"
                            required
                        />     
                                         
                            <ErrorMessage
                                component="span" 
                                name="password" 
                                className="Login-Error"

                            />
                    <p className="campo-obg">Campo Obrigatório*</p>
                        <Field 
                            id = "password2"
                            type = "password"
                            name="password_confirm" 
                            className="Login-Field"
                            placeholder="Confirme sua senha"
                            required
                        />   
                            <ErrorMessage
                                component="span" 
                                name="password_confirm" 
                                className="Login-Error"
                            />
                    </div>
                    {/*<input type="submit" value="Login" onclick=""></input>*/}
                    <Link to="/leads">
                        <span className="button">
                            <FiLogIn className="icon"/>
                            <strong className="button-txt">Login</strong>
                        </span>
                    </Link>
                </Form>
            </Formik>
        
        </div>
    )


}

export default Login;