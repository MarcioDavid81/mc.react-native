import Botao from "@/components/Botao";
import styles from "@/constants/style";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { useNavigation } from 'expo-router';
import { DrawerActions } from "@react-navigation/native";

export default function TelaInicial() {
  const navigation = useNavigation();
  return (
    <View style={[styles.central, {gap:20}]}>
      <Ionicons name="logo-react" size={100} color="#3A98FF" />
      <View style={{alignItems:  'center'}}>
        <Text style={styles.title}>Masterclass React Native</Text>
        <Text style={styles.p}>Esquenta Formação: DEV COD3R</Text>
      </View>
      <Botao onPress={() => navigation.dispatch(DrawerActions.openDrawer)}>
        <Text style={{color: '#fff'}}>Exercícios</Text>
      </Botao>
    </View>
  );
}
