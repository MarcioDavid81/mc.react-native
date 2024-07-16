import Botao from "@/components/Botao";
import styles from "@/constants/style";
import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function TelaNova () {
    return(
        <View style={[styles.central, { gap: 10 }]}>
            <Text style={styles.p}>
                Tela Nova!
            </Text>
            <Botao>
                <Link href="/stack" style={{color:'#fff'}}>Retornar</Link>
            </Botao>
        </View>
    )
}