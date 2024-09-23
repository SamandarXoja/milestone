import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    title: {
        color: '#1F1F39',
        fontWeight: "500"
    },
    box: {
        width: "90%",
        height: 96,
        display: "flex",
        flexDirection: 'row',
        gap: 34,
        backgroundColor: "#fff",
        marginLeft: 20,
     
        borderRadius: 15,
        shadowColor: '#171717',
        elevation: 5,
        shadowOffset: {
            width: 0,
            height: 4
        },
        marginBottom: 16,
        padding: 14,
    },

    info: {
        width: 67,
        height: 20,
        backgroundColor: '#FFEBF0',
        marginTop: 5,
        borderRadius: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center"
        

    },
    audio: {
        color: '#FF6905',
        fontSize: 10,
       
    }

})


export default styles;