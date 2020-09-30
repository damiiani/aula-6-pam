import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import Inicial from '../../views/Inicial/Inicial';
import Colecao from '../../views/Colecao/Colecao';
import Item from '../../views/Item/Item';
import Perfil from '../../views/Perfil/Perfil';
import DrawerPersonalizado from "./DrawerPersonalizado";

const Drawer = createDrawerNavigator();


const RotasDrawer = () => {
    const icones = {
        Inicial: { name: 'home' },
        Colecao: { name: 'storage' },
        Item: { name: 'done-all' },
        Perfil: { name: 'person' },
    }

    return (
        <Drawer.Navigator
            drawerContent={DrawerPersonalizado}
            screenOptions={({ route }) => ({
                drawerIcon: ({ color, size }) => {
                    const { name } = icones[route.name];

                    return <MaterialIcons name={name} size={size} color={color} />
                }
            })}
        >
            <Drawer.Screen name="Inicial" component={Inicial}/>
            <Drawer.Screen name="Colecao" component={Colecao}/>
            <Drawer.Screen name="Item" component={Item}/>
            <Drawer.Screen name="Perfil" component={Perfil}/>
        </Drawer.Navigator>
    );
}

export default RotasDrawer;