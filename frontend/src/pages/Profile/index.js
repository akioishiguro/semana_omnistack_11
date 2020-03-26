import React, { useEffect, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api'

import './styles.css';

import logoImg from '../../assets/logo.svg';
import { FiPower, FiTrash2 } from 'react-icons/fi';

export default function Profile(){
    const [incidents, setIncidentes] = useState([]);

    const history = useHistory();

    const ongName = localStorage.getItem('ongName');
    const ongId= localStorage.getItem('ongId');

    useEffect(() => {
        api.get('profile', {
            headers:{
                Authorization: ongId,
            }
        }).then( response => {
            setIncidentes(response.data)
        })
    }, [ongId]);

    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`,{
                headers:{
                    Authorization: ongId,
                }
            });

            setIncidentes(incidents.filter(incident => incident.id !== id));
        }catch (err){
            alert('Erro');
        }
    }

    function handleLogout(){
        localStorage.clear();

        history.push('/')
    }

    return(
       <div className="profile-container">
           <header>
               <img src={logoImg} alt="Be the Hero"/>
               <span>Bem vindo, {ongName}</span>

               <Link className="button" to='/incidents/new'>Cadastrar novo caso</Link>

               <button onClick={handleLogout} type="button">
                   <FiPower size={18} color="#E02041" />
               </button>
           </header>

           <h1>Casos Cadastrados</h1>

           <ul>
               {incidents.map(incident => (
                   <li key={incident.id}> 
                        <strong>Caso:</strong>
                        <p>{incident.title}</p>
                        
                        <strong>Descrição</strong>
                        <p>{incident.description}</p>

                        <strong>Valor</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#E02041"/>
                        </button>
                    </li>
               ))}
           </ul>
       </div>
    );
}