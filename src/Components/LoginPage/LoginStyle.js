import { StyleSheet } from "react-native";
import colorRoot from '../../assets/ColorRoot.json';
export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colorRoot.primary
    },
    imageBox:{
        flex:1,
        alignItems:"center",
        marginTop:70,
        marginHorizontal:82,
    },
    imageStylization:{
        width:200,
        height:200,
        borderRadius:150,
    },
    textContainer:{
        flex:2,
        padding:10,
        marginTop:50,
        alignItems:"center",
    },
    textStylization:{
        color:'white',
        textAlign:"justify",
        marginTop:10,
        fontSize:15
    },
    inputBox:{
        padding:40
    },
    inputStylization:{
        width:250,
        color:"white"
    },
    boxButton:{
        flex:1,
        paddingVertical:50,
        paddingHorizontal:40,
        backgroundColor:colorRoot.inputDisabled
    },
    textButton:{
        color:'white',
        textAlign:"center",
        fontSize:35,
        paddingVertical: 10
    },
    buttonStylization:{
        backgroundColor:colorRoot.inputDisabled
    }
});