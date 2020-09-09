import { connect } from 'react-redux';
import {Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Header from '../Header';
import React, {useState} from 'react';
import styles from './styles'
import email from 'react-native-email'
import * as selectors from '../../reducers'
import { validateEmail } from '../../utils/validate';
import { Linking } from 'react-native';

const Contact = ({name_,phone_,mail_,code_,submit}) => {
  
    const [name, changeName] = useState(name_);
    const [phone, changePhone] = useState(phone_);
    const [mail, changeEmail] = useState(mail_);
    const [code, changeCode] = useState(code_);
    const [message, changeMessage] = useState('');

    return (
    <View style={styles.container}>
        <Header></Header>
        <View style={styles.content}>
            <Text style={styles.title}>
                {'¡Contáctanos!'}
            </Text>
            <ScrollView></ScrollView>
            
            <ScrollView>
                <TouchableOpacity style={styles.viewLocation} 
                onPress={() => Linking.openURL('https://www.google.com.gt/maps/search/distribuidor+de+ecofiltro/@14.9099828,-90.7388792,8z')}>
                    <Text style={styles.submitText}> {'Haz click aquí para ver los puntos de distribuición'} </Text>
                </TouchableOpacity>
                <View style={styles.row}>
                    <View style={styles.circle}>
                        <Image style={styles.icon} source={require('../../public/icons/location.png')} ></Image>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.text}> {'Tel.: (+502) 7955-8555'} </Text>
                        <Text style={styles.text}> {'Email:  info@ecofiltro.com'} </Text>
                    </View>
                </View>
                <View style={styles.bar}></View>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre*"
                    value={name}
                    placeholderTextColor="#777777" 
                    onChangeText={changeName}   
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#777777" 
                    keyboardType={'numeric'}
                    placeholder="Teléfono*"
                    value={phone}
                    onChangeText={changePhone}   
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#777777" 
                    keyboardType={'email-address'}
                    placeholder="Email*"
                    value={mail}
                    onChangeText={changeEmail}   
                />
                {
                    !validateEmail(mail) && mail!=='' && <Text style={styles.error}> {'WRITE A VALID EMAIL'} </Text>
                }
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#777777" 
                    placeholder="Código de ecofiltro"
                    value={code}
                    onChangeText={changeCode}   
                />
                <TextInput
                    style={styles.input_multiline}
                    placeholderTextColor="#777777" 
                    multiline={true}
                    placeholder="Mensaje*"
                    value={message}
                    onChangeText={changeMessage}   
                />
                <TouchableOpacity style={styles.submit} onPress={() => submit({name,phone,mail,code,message})}>
                    <Text style={styles.submitText}> {'Enviar'} </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    </View>
)};

export default connect(
    state => ({
        name_: selectors.getName(state),
        phone_: selectors.getPhone(state),
        code_: selectors.getCode(state),
        mail_: selectors.getMail(state),
    }),
    dispatch=>({
        submit({name,phone,mail,code,message}){
            if(validateEmail(mail)){
                const to = ['info@ecofiltro.com'] // Must add all the valid
                email(to, { 
                    subject: 'Ecofiltro-App Contact',
                    body: `name: ${name}\n phone: ${phone}\n email: ${mail}\n ecofiltro code: ${code}\n message: ${message}`
                })
            }
        }
    }),
)(Contact);
