import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import IncidentsPage from "./pages/Incidents";
import DetailsPage from "./pages/Detail";

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Incidents" component={IncidentsPage} />
        <AppStack.Screen name="Details" component={DetailsPage} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
