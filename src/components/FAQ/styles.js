import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      backgroundColor: colors.white,
      flex: 1,
      flexDirection: 'column',
      marginTop: normalize(10), 
    },
    content: {
        backgroundColor: colors.primaryB,
        flex: 1,
        flexDirection: 'column',
        padding: normalize(3),
        width: '100%',
      },
    bottom:{
        backgroundColor: colors.primaryB,
        bottom: 0,
        height: normalize(7),
        position: 'absolute',
        width: '100%',
    },
    link:{
        alignSelf: 'center',
        color: colors.white,
        fontSize: normalize(7),
        fontWeight: "bold",
        marginBottom: normalize(5),
        marginTop: normalize(1),
        padding: normalize(0.5),
        textAlign: 'center',
        textDecorationStyle: 'solid',
        textDecorationColor: colors.white,
        textDecorationLine: 'underline',
    },
    answerText:{
        color: colors.black,
        textAlign: 'justify',
        maxWidth: normalize(1000),
        margin: normalize(1),
    },
    section:{
        width: '90%',
        alignSelf: 'center',
        marginBottom: normalize(25)
    },
    questions:{
        marginTop: normalize(5),
    },
    title:{
        alignSelf: 'center',
        color: colors.white,
        fontSize: normalize(7),
        fontWeight: "bold",
        marginBottom: normalize(5),
        marginTop: normalize(1),
        padding: normalize(0.5),
    },
    row:{
        alignItems: 'center',
        flexDirection: 'row',
    },
    icon:{
        height:normalize(20),
        margin: normalize(1),
        width:normalize(20),
    },
    circle:{
        alignItems:'center',
        backgroundColor: colors.white,
        borderRadius: normalize(50),
        height: normalize(80),
        marginRight: normalize(1),
        padding: normalize(1),
        width: normalize(80),
    },
    info:{
        marginLeft: normalize(1),
        marginRight: normalize(1),
        maxWidth: '80%',
    },
    text:{
        color:colors.white,
        fontSize: normalize(2.8),
        marginBottom: normalize(0.25),
        textDecorationStyle: 'solid',
        textDecorationColor: colors.white,
        textDecorationLine: 'underline',
    },
    answer:{
        backgroundColor: colors.white,
        borderRadius: normalize(3),
        color:colors.black,
        fontSize: normalize(2.8),
        flexDirection: 'row',
        margin: normalize(5),
        padding: normalize(1),
        alignItems: 'center',
    },
    map:{
        alignSelf: 'center',
        borderRadius: normalize(500),
        height: normalize(3000),
        margin: normalize(2),
        marginBottom: normalize(20),
        marginTop: normalize(10),
        width: '85%',
    },
    input: {
        alignSelf: 'center',
        backgroundColor: colors.white,
        borderColor: colors.white,
        borderRadius: 20,
        borderWidth: 1,
        fontSize: normalize(2),
        height: normalize(50),
        margin: normalize(0.5),
        padding: 10,
        width: '80%',
    },
    input_multiline: {
        alignSelf: 'center',
        backgroundColor: colors.white,
        borderColor: colors.white,
        borderRadius: 20,
        borderWidth: 1,
        fontSize: normalize(2),
        height: normalize(600),
        margin: normalize(0.5),
        padding: 10,
        width: '80%',
    },
    submitText:{
        backgroundColor: colors.primaryD,
        borderRadius: normalize(20),
        color: colors.white,
        padding:normalize(5),
        paddingBottom: normalize(1),
        paddingTop: normalize(1),
    },
    submit:{
        alignSelf:'flex-end',
        borderRadius: normalize(15),
        marginBottom: normalize(10),
        marginTop: normalize(5),
        right: '15%',
    },
    error:{
        alignSelf: 'center',
        color:colors.white,
        fontSize: normalize(3),
        marginBottom: normalize(0.25),
    },
  });
  
export default styles