import styles from "@/constants/style";
import { Text, View } from "react-native";

export default function TelaPrimeiro () {
    return(
        <View style={styles.central}>
            <Text style={styles.p}>
                Primeiro Componente!
            </Text>
        </View>
    )
}