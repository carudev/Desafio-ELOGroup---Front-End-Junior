import React from "react";
import { Link } from 'react-router-dom';
import $ from 'jquery';
import {ErrorMessage, Form, Formik, Field} from 'formik';
import * as yup from 'yup';

import logo from '../../assets/logo.png';
import './styles.css';


const CreateLeads = () => {


    const handleSubmit = values => {console.log(values);}
    const validations = yup.object().shape({
        name: yup.string().required(),
        telefone: yup.string().required(),
        email: yup.string().email().required()
    })

    function msg() {
        alert("Lead cadastrada com sucesso!");
    }

    $(document).ready(function(){
        $("#selectall").click(function(){
                if(this.checked){
                    $('.checkboxall').each(function(){
                        $(".checkboxall").prop('checked', true);
                    })
                }else{
                    $('.checkboxall').each(function(){
                        $(".checkboxall").prop('checked', false);
                    })
                }
            });
        });

    

    return (

        <div id="lead-container">
                <Link to="/leads">
                    <span className="btn-back">
                        <strong className="btn-back-txt">Voltar</strong>
                    </span>          
                </Link>
            <header>
                <img src= {logo} alt="logo" />
                <h1 className= "lead-tittle">Cadastrar nova lead</h1>
            </header>
                
            
            
        
        <div className="lead-form">
            <Formik 
                initialValues={{}} 
                onSubmit={handleSubmit} 
                validationSchema={validations} 
            >

                <Form className="newlead">
                    <div className="newlead-fields">
                    <p className="campo-obg">Campo Obrigatório*</p>
                        <Field 
                            name="name" 
                            className="lead-Field"
                            placeholder="Digite o nome"
                            autoComplete = "off"
                        />    
                            <ErrorMessage
                                component="span" 
                                name="name" 
                                className="lead-Error"

                            />
                        <p className="campo-obg">Campo Obrigatório*</p>
                        <Field 
                            id = "telefone"
                            name="telefone" 
                            className="lead-Field"
                            placeholder="Digite o telefone"
                            autoComplete = "off"
                        />                       
                            <ErrorMessage
                                component="span" 
                                name="telefone" 
                                className="lead-Error"

                            />
                        <p className="campo-obg">Campo Obrigatório*</p>
                        <Field 
                            id = "email-lead"
                            name="email-lead" 
                            className="lead-Field"
                            placeholder="Digite o e-mail"
                            autoComplete = "off"
                        />   
                            <ErrorMessage
                                component="span" 
                                name="email-lead" 
                                className="lead-Error"
                            />
                    </div>


                  
            <div className="table-leads">
            <thead className="table-head">
                <tr>
                    <th><input type="checkbox" name="selectall" id="selectall" class="css-checkbox" /></th>
                    <th>Tipo da Lead</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td><input type="checkbox" class="checkboxall" value="checkbox1" ></input></td>
                    <td>RPA</td>
                </tr>
                <tr>
                    <td><input type="checkbox" class="checkboxall" value="checkbox2"></input></td>
                    <td>Produto Digital</td>
                </tr>
                <tr>
                    <td><input type="checkbox" class="checkboxall" value="checkbox3"></input></td>
                    <td>Analytics</td>
                </tr>
                <tr>
                <td><input type="checkbox" class="checkboxall" value="checkbox4"></input></td>
                    <td>BPM</td>
                </tr>
            </tbody>
            </div>
                    
                    <div className="juntando">
 
                    <button className="btn-create-lead" onClick={() => { alert('Lead cadastrada com sucesso!') }}>Cadastrar</button>
                    </div>
                    

                    </Form>
            </Formik>
            

        </div>
        </div>
    )
}

export default CreateLeads;