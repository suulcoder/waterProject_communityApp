import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../configuration';
import { normalize } from '../../utils/normalize';

const styles = StyleSheet.create({
    container: {
      alignSelf: 'center',
      backgroundColor: colors.primaryB,
      borderTopLeftRadius: normalize(55),
      borderTopRightRadius: normalize(55),
      flex: 1,
      justifyContent: 'center',
      marginTop: normalize(4),
      width: '100%',
    },
    element:{
        alignSelf: 'center',
        backgroundColor: colors.white,
        borderRadius: normalize(150),
        height: normalize(450),
        justifyContent: 'center',
        padding: normalize(1),
        width: normalize(450),
    },
    text: {
        alignSelf: 'center',
        color: colors.white,
        width: normalize(500),
        fontSize: normalize(2.5),
        marginTop: normalize(1.5),
        textAlign: 'center',
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: normalize(15),
    },
    welcomeText:{
      alignSelf: 'center',
      color:colors.white,
      fontSize: normalize(8),
      fontWeight: "bold",
      marginBottom: normalize(25),
    }
  });
  
export default styles