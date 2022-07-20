import React,{Component} from "react";
import { 
    View,
    Text, 
    StyleSheet, 
    SafeAreaView, 
    TouchableOpacity, 
    Platform,
    StatusBar, 
    ImageBackground  
} from "react-native";

export default class EdicaoMilho extends Component{
    render(){
        return(
            <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea} />
            <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>Nome:</Text>
                    <Text style={styles.titleText}>Milho</Text>
                    <Text style={styles.titleText}>Data de vencimento:</Text>
                    <Text style={styles.titleText}>20 de janeiro de 2023</Text>
                    <Text style={styles.titleText}>Quantidade:</Text>
                    <Text style={styles.titleText}>5 itens</Text>
                </View>
                <TouchableOpacity style={styles.routeCard}>
                    <Text style={styles.routeText}>Excluir</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeCard} onPress={() =>
                    this.props.navigation.navigate("Alimentos")
                }>
                    <Text style={styles.routeText}>Tela de alimentos</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    inputFont: {
        borderColor: "black",
        marginBottom: 30,
        marginLeft:20,
        color: "black",
        fontFamily: "Bubblegum-Sans"
      },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: "#00ffff"
    },
    title: {
        marginTop: 50,
        marginBottom:130,
    },
    titleText: {
        fontSize: 20,
        marginLeft: 20,
        fontWeight: "bold",
        color: "white"
    },
    titleItem: {
        fontSize: 30,
        marginLeft: 20,
        fontWeight: "bold",
        color: "white"
    },
    titleText2: {
        fontSize: 20,
        marginLeft: 20,
        fontWeight: "bold",
        color: "white"
    },
    titleText3: {
        fontSize: 20,
        marginLeft: 20,
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black",
        textAlign:"center",
        padding:10,
    },
})