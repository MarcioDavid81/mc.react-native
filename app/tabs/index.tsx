import styles from "@/constants/style";
import { View, Text } from "react-native";

export default function TabInicial () {
    return(
        <View style={styles.central}>
            <Text style={styles.p}>
                Primeira Tab!
            </Text>
        </View>
    )
}