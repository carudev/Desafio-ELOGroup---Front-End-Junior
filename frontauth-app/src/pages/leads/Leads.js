import React from 'react';
import $ from 'jquery';
import Draggable from 'react-draggable';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Leads.css';

const Leads = () => {


  
    $(document).ready(function () {
    $('.event').on("dragstart", function (event) {
        var dt = event.originalEvent.dataTransfer;
        dt.setData('Text', $(this).attr('id'));
    });
    $('table td').on("dragenter dragover drop", function (event) {
        event.preventDefault();
        if (event.type === 'drop') {
            var data = event.originalEvent.dataTransfer.getData('Text', $(this).attr('id'));

            var de = $('#' + data).detach();
            if (event.originalEvent.target.tagName === "SPAN") { 
                de.insertBefore($(event.originalEvent.target));
            }
            else {
                 de.appendTo($(this));
            }
        };
    });
})

    return(
        <>
        <div className="leads-page">

        <Link to="/login">
            <span className="btn-ba">
                <strong className="btn-back-txt">Voltar</strong>
            </span>          
         </Link>
        <header>
            <img src= {logo} alt="logo" />
            <h1 className= "painel-tittle">Painel de Leads</h1>
        </header>

        <Link to="/create-leads">
            <span className="button-lead">
            <strong className="buttonlead-txt">Novo Lead (+)</strong>
            </span>
        </Link>

            <table className="table-drag" border="1">
            <tr>
                <th>Cliente em Potencial</th>
                <th>Dados Confirmados</th>
                <th>Reunião Agendada</th>
            </tr>

            <tr>
                <td><span class="event" id="item1" draggable="true">Org. Internacionais</span></td>
                <td></td>
                <td></td>
                
            </tr>

            <tr>
                <td></td>
                <td><span class="event" id="item2" draggable="true">Ind. Farm. LTDA</span></td>
                <td></td>
                
            </tr>

            <tr>
                <td></td>
                <td><span class="event" id="item3" draggable="true">Carol.Sound Live</span></td>
                <td></td>
                
            </tr>
        </table>
        </div>
        </>
    )
}

export default Leads;