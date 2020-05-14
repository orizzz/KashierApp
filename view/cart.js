import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native';
import { Container,FooterTab,Footer, Title, Content,Button,Icon, Left, Right, Body, Text, Card, CardItem } from 'native-base';

import Counter from "./src/components/counter"
import CounterBtn from "./component/counterBtn"


export default class cart extends Component {

    state = {
      Menu: [],
      TotalHarga: 0,
      TotalBelanja:0
    }
  
    componentDidMount() {
      fetch('https://serotonincoffee.000webhostapp.com/api/menu.php')
        .then((response) => response.json())
        .then((json) => {
          this.setState({ Menu: json });
        })
        .catch((error) => console.error(error))
    }

    addHarga(harga){
      this.setState({TotalHarga: this.state.TotalHarga + harga})
    }

    removeHarga(harga){
      this.setState({TotalHarga: this.state.TotalHarga - harga})
    }

    renderMenu(items){
      let ListMenu = items.map(item =>
        <Card key={item.id_menu}>
            <CardItem>
                <Body >
                  <Text style={{fontWeight: "bold"}}>{item.nama_menu}</Text> 
                  <Text>Rp.{item.harga}</Text>
                </Body>
                  <Counter start={0} max={100}
                    onChange={(len,type) => {
                      if(type == "+"){
                        this.addHarga(parseInt(item.harga))
                      } else {
                        this.removeHarga(parseInt(item.harga))
                      }
                    }}
                  />
                  {/* <CounterBtn/> */}
            </CardItem>
          </Card>
      );
      return ListMenu
    }

    render() {
        return (
      <Container>
        <Content>
          {/* loop card */}
          {this.renderMenu(this.state.Menu)}
          {/* Loop card */}
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Rp. {this.state.TotalHarga}</Text>
              <Text>Check Out</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
  
        );
    }
}