/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  FlatList
} from 'react-native';

const width = Dimensions.get('screen').width

type Props = {};
export default class App extends Component<Props> {
  render() {

    const fotos = [
      {id: 1, usuario: 'Tito'},
      {id: 2, usuario: 'Dodô'},
      {id: 3, usuario: 'Osmar'},
      {id: 4, usuario: 'Jonatan'},
    ]

    return (
      <FlatList
        keyExtractor={item => String(item.id)}
          data={fotos}
          renderItem={ ({item}) =>
            <View>
              <View style={styles.cabecalho}>
                <Image source={require('./resources/img/silhueta.png')} 
                      style={styles.fotoDePerfil}/>
                  <Text>{item.usuario}</Text>   
              </View>
                  <Image source={require('./resources/img/bola.jpg')}
                    style={styles.foto} />                                                  
            </View>
          }
        />        
      );
    }
};

const styles = StyleSheet.create({
  cabecalho: {
    flexDirection: 'row', 
    alignItems: 'center'},

  fotoDePerfil: {
    marginRight:10 ,
    borderRadius:20 ,
    width:40,
    height:40},
    
  foto: {width: width, 
    height: width}
})
