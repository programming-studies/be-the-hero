import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import api from "../../services/api";

import "./style.css";

import logoImg from "../../assets/logo.svg";

export default function ListCases() {
  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    async function loadIncidents() {
      setIncidents((await api.get(`/ongs/${ongId}/incidents`)).data);
    }
    loadIncidents();
  }, [ongId]);

  return (
    <div className="list-cases-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vindo(a), {ongName}</span>
        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(item => (
          <li key={item.id}>
            <strong>CASO:</strong>
            <p>{item.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{item.description}</p>

            <strong>VALOR:</strong>
            <p>R$ {item.value}</p>

            <button>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
