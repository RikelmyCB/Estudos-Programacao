import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from './homeStyles'
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";
import { BatButton } from "../../components/BatButton/BatButton";

export default function Home () {
    return (
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <BatLogo/>
            </View>
            
            <View>
                <BatButton />
            </View>
            <StatusBar style="light"/>
        </View>
    )
}