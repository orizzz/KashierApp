import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Container, Header,FooterTab,Footer, Title, Content,Button,Icon, Left, Right, Body } from 'native-base';


import Cart from './view/cart';
import laporan from './view/laporan';

const Drawer = createDrawerNavigator();
// const isDrawerOpen = useIsDrawerOpen();

export default class App extends Component {
  state = {
    isReady: false
  }

  async componentDidMount() {
  await Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  });
  this.setState({isReady:true})
  }

  render(){
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <NavigationContainer >

        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Cashier</Title>
          </Body>
          <Right />
        </Header>

        <Drawer.Navigator>
          <Drawer.Screen name="Cart" component={Cart} />
          <Drawer.Screen name="laporan" component={laporan} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }



  
}
