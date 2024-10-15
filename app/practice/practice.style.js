import { StyleSheet } from "react-native";
// import { COLORS } from "../constants"

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },

    button: {
        width: 40,
        height: 40,

    },
    title: {
        marginTop: 20,
        marginBottom: 24,
        fontSize: 20,
        color: '#1F1F39',
        fontWeight: '500',
    },
    content: {
        marginLeft: 20,
        flex: 1,
        marginRight: 20,
    },
    btn: {
        backgroundColor: '#F4F3FD',
        // alignSelf: 'flex-start',
        paddingTop: 10,
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 10,
        borderRadius: 12,
        width: "30%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,

    },

    sub: {
        fontSize: 24,
        color: '#858597',
    },

    block: {
        display: 'grid',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',

    },
    testText: {
        fontSize: 18,
        fontWeight: '400'
    },

    testText2: {
        fontSize: 18,
        fontWeight: '400',
        marginTop: 40,
        color: '#858597'
    },

    answer: {
        marginTop: 100,
        backgroundColor: '#3D5CFF',
        width: 200,
        alignItems: 'center',
        paddingBottom: 12,
        paddingTop: 14,
        borderRadius: 12,
    },

    show: {
        color: '#fff'
    },

    mt: {
        marginTop: 25,
    },

    back: {
        width: '100%',
        alignItems: "center",
        backgroundColor: '#F4F3FD',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 12,
    },
    choice: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 60,
    },

    vocie: {
        backgroundColor: "#3D5CFF",
        paddingBottom: 10,
        paddingTop: 12,
        paddingLeft: 7,
        paddingRight: 7,
        borderRadius: 12
    },

    vocies: {
        marginTop: 40,
        display: 'flex',
        alignItems: 'flex-end'
    },

    text: {
        backgroundColor: "#3D5CFF",
        paddingBottom: 10,
        paddingTop: 12,
        paddingLeft: 7,
        paddingRight: 7,
        borderRadius: 12
    },

    send: {
        color: '#fff'
    },

    input: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 12,
        borderColor: '#B8B8D2',
        height: 50,
        width: '70%'
    },
    select: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 70,
    },
    sendBtn: {
        backgroundColor: "#3D5CFF",
        width: '20%',
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'

    },

    ask: {
        display: 'flex',
        alignItems: 'flex-end',
        marginTop: 40,


    },
    askText: {
        backgroundColor: '#FF6905',
        padding: 10,
        borderRadius: 13,
        color: '#fff',
        marginBottom: 20,
    }


    // 
})


export default styles;