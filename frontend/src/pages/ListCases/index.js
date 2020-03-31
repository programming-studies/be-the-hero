import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import api from "../../services/api";

import "./style.css";

import logoImg from "../../assets/logo.svg";

export default function ListCases() {
  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");
  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  useEffect(() => {
    async function loadIncidents() {
      setIncidents((await api.get(`/ongs/${ongId}/incidents`)).data);
    }
    loadIncidents();
  }, [ongId]);

  async function handleDelete(incidentId) {
    try {
      await api.delete(`incidents/${incidentId}`, {headers: {Authorization: ongId}});
      setIncidents(incidents.filter(incident => incident.id !== incidentId));
    } catch (error) {
      alert("Erro ao deletar o caso, favor tente novamente.");
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <div className="list-cases-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vindo(a), {ongName}</span>
        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button onClick={handleLogout}>
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
            <p>{Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(item.value)}</p>

            <button onClick={() => handleDelete(item.id)}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
