import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native';
import { Button,Icon, Left, Right, Body, Text, Card, CardItem } from 'native-base';


export default class counterBtn extends Component {

    render(){
        return(
            <View style={{flexDirection: 'row'}}>
                <Button>
                    <Icon name="plus"></Icon>
                </Button>
                <Button>

                </Button>
            </View>
        );
    }

}