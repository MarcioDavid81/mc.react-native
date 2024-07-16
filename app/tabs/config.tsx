import styles from "@/constants/style";
import { View, Text } from "react-native";

export default function TabConfig () {
    return(
        <View style={styles.central}>
            <Text style={styles.p}>
                Tab de Configuração
            </Text>
        </View>
    )
}