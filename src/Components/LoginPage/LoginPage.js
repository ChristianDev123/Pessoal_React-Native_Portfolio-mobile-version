import React from 'react';
import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { styles } from './LoginStyle';
import TestImage from '../../assets/img/testImageDog.jpg';
import colorRoot from '../../assets/ColorRoot.json';

export default function LoginPage(){
    return(
        <ScrollView style={styles.container}>
            <View style={styles.imageBox}>
                <Image
                    style={styles.imageStylization}
                    source={TestImage}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textStylization}>
                    Olá, eu sou o Christian!
                </Text>
                <Text style={styles.textStylization}>
                    Imagino que te interessa saber quem eu sou.{"\n"}
                    Fico feliz por isso.{"\n"}
                    Mas antes de mais nada, por favor indentifique-se inserindo seu nome ou corporação a qual representa:
                </Text>
                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.inputStylization}
                        placeholder="Insira seu nome ou organização: "
                        placeholderTextColor="white"
                        selectionColor="white"
                        underlineColorAndroid={colorRoot.inputPrimary}
                    />
                </View>
            </View>
            <View style={styles.inputBox}>
                <TouchableOpacity style={styles.buttonStylization}>
                    <Text style={styles.textButton}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}