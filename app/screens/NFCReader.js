import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet,TouchableOpacity, Image } from 'react-native';
//import NfcManager from 'react-native-nfc-manager';

function NFCReader({navigation}) {

    const [hasNfc, setHasNfc] = useState(null);

    useEffect(() => {

        async function checkNFC(){
            //setHasNfc(await NfcManager.isSupported());
        }

        checkNFC();
    },[]);

    if(hasNfc === null){
        return null;
    }
    else if (!hasNfc){
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
