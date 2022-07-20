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

export default class Alimentos extends Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Uvas</Text>
                        <Text style={styles.titleText}>Vencimento:</Text>
                        <Text style={styles.titleText}>20/07/22</Text>
                        <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("EdicaoUva") }>
                        <Text style={styles.routeText}>Editar</Text>
                    </TouchableOpacity>

                        <Text style={styles.titleText}>Carne</Text>
                        <Text style={styles.titleText}>Vencimento:</Text>
                        <Text style={styles.titleText}>03/08/22</Text>
                        <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("EdicaoCarne") }>
                        <Text style={styles.routeText}>Editar</Text>
                    </TouchableOpacity>

                        <Text style={styles.titleText}>Milho</Text>
                        <Text style={styles.titleText}>Vencimento:</Text>
                        <Text style={styles.titleText}>20/01/23</Text>
                        <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("EdicaoMilho") }>
                        <Text style={styles.routeText}>Editar</Text>
                    </TouchableOpacity>
                        
                    </View>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("EscolhaTela")
                    }>
                        <Text style={styles.routeText}>Voltar para a tela inicial</Text>
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
        marginLeft: 50,
        marginRight: 50,
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
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        textAlign:"center",
        padding:10,
    },
})