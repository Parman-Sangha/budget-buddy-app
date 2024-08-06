import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Overview from './screens/Overview';
import BudgetGoals from './screens/BudgetGoals';
import Layout from './screens/Layout';
import Explore from './screens/Explore';
import Index from './screens/Index';
import Layout2 from './screens/Layout2';
import AddTransaction from './screens/AddTransaction';
import { TransactionsProvider } from './TransactionsContext';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
      <TransactionsProvider>
        <NavigationContainer>
          <Tab.Navigator initialRouteName="Overview">
            <Tab.Screen name="Overview" component={Overview} />
            <Tab.Screen name="BudgetGoals" component={BudgetGoals} />
            <Tab.Screen name="Layout" component={Layout} />
            <Tab.Screen name="Explore" component={Explore} />
            <Tab.Screen name="Index" component={Index} />
            <Tab.Screen name="Layout2" component={Layout2} />
            <Tab.Screen name="AddTransaction" component={AddTransaction} />
          </Tab.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </TransactionsProvider>
    );
  }