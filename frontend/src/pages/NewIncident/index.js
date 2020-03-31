import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./style.css";

import logoImg from "../../assets/logo.svg";
import api from "../../services/api";

export default function NewIncident() {
  const ongId = localStorage.getItem("ongId");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      api.post("incidents", {title, description, value}, {headers: {Authorization: ongId}})
      history.push("/list-cases");
    } catch (error) {
      alert("Erro ao salar, favor tentar novamente");
    }
  }

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
        <form onSubmit={handleSubmit}>
          <input type="text" value={title} onChange={event => setTitle(event.target.value)} placeholder="Título do caso" />
          <textarea cols="30" rows="10" value={description} onChange={event => setDescription(event.target.value)} placeholder="Descrição"></textarea>
          <input type="text" value={value} onChange={event => setValue(event.target.value)} placeholder="Valor em reais" />
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
