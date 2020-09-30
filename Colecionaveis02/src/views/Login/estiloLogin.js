import { StyleSheet } from 'react-native';

const estiloLogin = StyleSheet.create({
    container: {   
        flex: 1,   
    },
    texto: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: "center",
        padding: 10
    },
    campo: {
        fontSize: 18,
        color: '#ffffff',
        marginLeft: 15,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: 'white',
    },
    botaoContainer: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 5,
        height: 40,
        borderWidth: 2,
        borderColor: '#e8f2e9',
        backgroundColor: '#14417b',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoTexto: {
        fontSize: 18,
        color: '#FFFFFF',
        paddingLeft: 15,
        backgroundColor: 'transparent',
        fontWeight: 'bold'
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    campoContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 50,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    botaoLinearGradient: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 50,
        height: 50,
        paddingHorizontal: 15,
        borderRadius: 8,
    },
    fundo: {
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    logo: {
        width: 90,
        height: 90,
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
});

export default estiloLogin;