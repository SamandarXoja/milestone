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
        alignItems: 'center'
    },
    text: {
        color: '#1F1F39',
    }

})


export default styles;