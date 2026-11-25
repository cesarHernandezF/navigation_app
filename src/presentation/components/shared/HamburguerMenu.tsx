import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Pressable, Text } from "react-native";
import { IonicIcon } from "./IonicIcon";
import { globalColors } from "../../theme/theme";

export const HamburguerMenu = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable
                    style={{ marginLeft: 5 }}
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
                    <IonicIcon name="menu-outline" size={30} color={globalColors.primary} />
                </Pressable>
            )
        })
    }, []);


    return <></>
}
