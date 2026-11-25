import { Pressable, Text, View } from "react-native"
import { globalStyles } from "../../theme/theme"
import { DrawerActions, type NavigationProp, useNavigation } from "@react-navigation/native"
import { PrimaryButton } from "../../components/shared/PrimaryButton";
import type { RootStackParams } from "../../routes/StackNavigator";
import { useEffect } from "react";
import { HamburguerMenu } from "../../components/shared/HamburguerMenu";

export const HomeScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    // useEffect(() => {
    //     navigation.setOptions({
    //         headerLeft: () => (
    //             <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
    //                 <Text>Menú</Text>
    //             </Pressable>
    //         )
    //     })
    // }, [])

    return (
        <View style={globalStyles.container}>
            <HamburguerMenu />

            <PrimaryButton
                label="Productos"
                onPress={() => navigation.navigate('Products')}
            />

            <PrimaryButton
                label="Settings"
                onPress={() => navigation.navigate('Settings')}
            />
        </View>
    )
}
