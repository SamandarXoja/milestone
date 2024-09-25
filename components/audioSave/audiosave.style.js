import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        width: "100%",
    },

    block: {
        marginTop: 50,
        display: 'flex',
        alignItems: 'flex-end'
    },
    row: {
        marginTop: 30, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // marginLeft: 10,
        // marginRight: 40,
    },
    fill: {
        flex: 1,
        // margin: 15
    },

    startBtn: {
        width: 100,
        backgroundColor: '#3D5CFF',
        borderRadius: 30,
        marginTop: 40,

    },

    clearBtn: {
        backgroundColor: '#FF6905',
        marginTop: 40,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 10,
        width: 100,
        display: 'flex',
        alignItems: 'center'
    },
    btnText: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        paddingTop: 10,
        paddingBottom: 10,
        color: '#fff',
        
    },
    right: {
        display: 'flex',
        alignItems: 'flex-end'
    },
    play: {
        backgroundColor: '#3D5CFF',
        width: 44,
        height: 44,
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }


})


export default styles;