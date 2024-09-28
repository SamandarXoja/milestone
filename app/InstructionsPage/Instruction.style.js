
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    content: {
        marginTop: 60,
        marginLeft: 20,
        marginRight: 20,
        display: 'flex',
        gap: 10,
        flexDirection: 'column'
    },
    button: {
        width: 40,
        height: 40,

    },
    question: {
        marginLeft: 20,
        fontSize: 18,
        color: '#1F1F39',
        fontWeight: '600'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 100
    },

    block: {
        width: '100%',
        backgroundColor: '#F4F3FD',
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 12,
        alignItems: 'center',
        
    },
    text: {
        color: '#1F1F39',
    },
    box: {
        marginLeft: 20,
        marginRight: 10
    },
    boxTitle: {
        marginBottom: 35,
        fontSize: 20,
    },
    bolder: {
        fontWeight: '500'
    },
    boxTwo: {
        marginTop: 50,
    },
    line: {
        textDecorationLine: 'underline'
    },
    backs:{ 
        marginTop: 40
    },
    link: {
        marginTop: 30,
    },
    links: {
        color: 'red',
        marginTop: 7,
        color: '#3D5CFF',
    },
    mts: {
        marginTop: 40
    },
    mbs: {
        marginBottom: 30
    }

})


export default styles;