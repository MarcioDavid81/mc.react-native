import Botao from "@/components/Botao";
import styles from "@/constants/style";
import { Link } from 'expo-router';
import { View, Text } from "react-native";

export default function TelaInicial () {
    return(
        <View style={[styles.central, {gap:10}]}>
            <Text style={styles.p}>
                Tela Inicial!
            </Text>
            <Botao>
                <Link href="/stack/nova" style={{color:'#fff'}}>Ir Para Tela Nova</Link>
            </Botao>
        </View>
    )
}