import React, { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native'
import api from './../../service/api';

import logoImg from "../../assets/logo.png";

import styles from "./style";

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
      async function loadIncidents() {
        setIncidents((await api.get(`incidents`)).data);
      }
      loadIncidents();
  }, []);

  function navigateToDetail() {
      navigation.navigate('Details');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 casos</Text>.
        </Text>
      </View>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

      <FlatList
        style={styles.incidentsList}
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: incident}) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.description}</Text>

            <Text style={styles.incidentProperty}>Valor:</Text>
            <Text style={styles.incidentValue}>{incident.value}</Text>

            <TouchableOpacity style={styles.detailsButton} onPress={navigateToDetail}>
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
