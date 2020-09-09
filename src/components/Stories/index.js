import { connect } from 'react-redux';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import Header from '../Header';
import React, {useState} from 'react';
import styles from './styles'
import { normalize } from '../../utils/normalize';
import { Actions } from 'react-native-router-flux';

const Stories = ({}) => (
    <View style={styles.container}>
        <Header></Header>
        <View style={styles.content}>
            <Text style={styles.welcomeText}>
                {'Experiencias'}
            </Text>
            <View style={styles.row}>
                <View>
                    <TouchableOpacity style={styles.element} onPress={()=>Actions.Story1(false)}>
                        <Image style={{
                            alignSelf: 'center',
                            height:normalize(270),
                            width:normalize(270),
                            borderRadius: normalize(50),
                        }} source={require('../../public/img/luis.png')} ></Image>
                    </TouchableOpacity>
                    <Text style={styles.text}> {'La historia de Don Luis'} </Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.element} onPress={()=>Actions.Story2(false)}>
                        <Image style={{
                            alignSelf: 'center',
                            height:normalize(270),
                            width:normalize(270),
                            borderRadius: normalize(50),
                        }} source={require('../../public/img/story.png')} ></Image>
                    </TouchableOpacity>
                    <Text style={styles.text}> {'Mi experiencia con Ecofiltro'} </Text>
                </View>
            </View>
        </View>
    </View>
);

export default connect(
    state => ({
        
    }),
    dispatch=>({
        
    }),
)(Stories);
