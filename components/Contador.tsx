import styles from '@/constants/style';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Botao from './Botao';
import { Ionicons } from '@expo/vector-icons';

export interface ContadorProps {
    valorInicial?: number
}


export default function Contador(props: ContadorProps) {
    const [valor, setValor] = useState(props.valorInicial ?? 0)

    return (
        <View style={styles.central}>
            <Text style={styles.p}>
                <Text style={{fontSize: 50}}>Valor: {valor}</Text>
            </Text>
            <View style= {{flexDirection: 'row', gap: 10}}>
                <Botao onPress={() => setValor(valor + 1)}>
                    <Ionicons name="add" size={24} color="#fff"/>
                </Botao>
                <Botao onPress={() => setValor(valor - 1)}>
                    <Ionicons name="remove" size={24} color="#fff"/>
                </Botao>
            </View>
        </View>
    )
}