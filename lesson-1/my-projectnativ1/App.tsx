import {Image, Alert, Button, StyleSheet, Switch, Text, View} from 'react-native';
import {Content} from "./Content";


export default function App() {

    return (
        <>
        <View style={styles.container}>
            <Text style={styles.text}>Viber</Text>
            <View style={styles.cont}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'data:image/png;base64,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'
                    } }/>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWWjiePo5dccEZ0AgpO2Fb0eiZjQHdo_2yiA&usqp=CAU',
                }}
            />
            </View>
        </View>
<Content/>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 30,
        marginHorizontal:10,
    },
    cont:{
        flexDirection: 'row',
    },
    tinyLogo: {
        width: 30,
        height: 30,
        marginHorizontal:10,
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
    },
});