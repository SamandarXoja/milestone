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
        alignItems: 'flex-end',
        marginTop: 30,
    },
    play: {
        backgroundColor: '#3D5CFF',
        width: 44,
        height: 44,
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    showText: {
        fontSize: 18,
        fontWeight: '400',
        marginTop: 40,
        color: '#858597'
    },
    block: {
        display: 'grid',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',

    },
    mt: {
        marginTop: 25,
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
    back: {
        width: '100%',
        alignItems: "center",
        backgroundColor: '#F4F3FD',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 12,
    },
})


export default styles;