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
        paddingBottom: 2,
        borderRadius: 12,
        width: '45%'
    },
  
    sub: {
        fontSize: 24,
        color: '#858597',
    },

    block: {
       display: 'flex',
       flexDirection: 'row',
       gap: 12,
       flexWrap: 'wrap',
      
       
    },
    levelIcon: {
        width: "100%",
        height: 120,
        resizeMode: 'cover'
    }
  


})


export default styles;