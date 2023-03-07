import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet,TouchableOpacity, Image } from 'react-native';
import NfcManager from 'react-native-nfc-manager';

function NFCReader({navigation}) {

    const [hasNfc, setHasNfc] = useState(null);
    const nfc = false;

    useEffect(() => {

        async function checkNFC(){
            setHasNfc(await NfcManager.isSupported());
            nfc = await NfcManager.isSupported();
            console.log("Stop",nfc);
        }

        console.log("Estou aqui " ,nfc);

        checkNFC();
        console.log("Estou aqui 1" ,nfc);
    },[]);

    /*if(nfc === null){
        return null;
    }*/
    //console.log(nfc);
    if (!nfc){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Your device doesn't support NFC</Text>
            </View>
        );
    }
    return(
        <View>
            <Text>Hello NFC</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "space-between",
        padding: 5,
        margin: 70,
    }
});

export default NFCReader;
