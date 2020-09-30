import React from "react";
import { Text, View } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

import estiloRotasDrawer from './estiloRotasDrawer';

function DrawerPersonalizado(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={estiloRotasDrawer.container}>
                <MaterialIcons name="person" size={80} color="black" />
                <Text style={estiloRotasDrawer.nome}>Administrador</Text>
            </View>


            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

export default DrawerPersonalizado;