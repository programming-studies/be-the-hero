import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./style.css";

import logoImg from "../../assets/logo.svg";

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um héroi para resolver
            isso.
          </p>
          <Link className="back-link" to="/list-cases">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </Link>
        </section>
        <form action="">
          <input type="text" placeholder="Título do caso" />
          <textarea cols="30" rows="10" placeholder="Descrição"></textarea>
          <input type="text" placeholder="Valor em reais" />
          <div className="input-group">
            <Link className="button" to="/">Cancelar</Link>
            <button type="submit" className="button">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
