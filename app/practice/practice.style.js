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
    }


})


export default styles;