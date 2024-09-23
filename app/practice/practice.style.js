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

   

})


export default styles;