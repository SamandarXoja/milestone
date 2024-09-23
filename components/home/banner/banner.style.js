import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        width: "100%",
    },

    bannerContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    bannerItem: {
        flex: 1,
    },
     
    bannerRight:{
        marginLeft: 15,
    },
    bannerImg: {
        
        width: "100%",
        height: 120,
        resizeMode: 'cover'
    }
})


export default styles;