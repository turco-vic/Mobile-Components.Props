import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Button({ text }) {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#007BFF",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        marginVertical: 10,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
    },
});
