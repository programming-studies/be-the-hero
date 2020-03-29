import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './style.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function index () {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <form>
                    <h1>Faça seu logon</h1>
                    <input type="text" placeholder="Digite seu ID"/>
                    <button type="submit" className="button">Entrar</button>
                    <a href="">
                        <FiLogIn size={16} color="#e02041"/>
                        Não tenho cadastro
                    </a>
                </form>
            </section>
            <img src={heroesImg} alt="heroes.png"/>
        </div>
    )
}
