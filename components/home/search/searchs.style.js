import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    searchBlock: {
        paddingLeft: 20,
        paddingRight: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    searchContainer: {
        flex: 1,
    
        marginTop: 2,
        height: 50,
        backgroundColor: '#F4F3FD',
        borderRadius: 15,
        paddingLeft: 16,
    },
    searchBtn: {
        width: 40,
        height: 40,
       
    }


})


export default styles;