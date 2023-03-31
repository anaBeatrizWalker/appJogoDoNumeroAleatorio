import React, {Component} from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import Constants from 'expo-constants';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      resultado: ''
    }
    this.descobrir = this.descobrir.bind(this);
  }

  descobrir(){
    this.setState({
      resultado: Math.floor(Math.random() * 10)
    })
  }

  render (){
    return (
      <View>
        <Text style={styles.paragraph}>
          Jogo do Nº Aleatório
        </Text>

        <Image style={styles.image} source={require("./img/gerador-numeros-aleatorios.png")}></Image>

        <Text style={styles.text}>
          Pense em um número de 0 a 10
        </Text>

        <Text style={styles.textResult}>
          ----- {this.state.resultado} -----
        </Text>

        <View style={styles.button}>
          <Button title="Descobrir" onPress={this.descobrir}></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    button: {
    margin: 20,
    width: 300
  },
  paragraph: {
    margin: 24,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    margin: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  textResult:{
    margin: 20,
    fontSize: 45,
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginLeft: '30%',
  }
});
