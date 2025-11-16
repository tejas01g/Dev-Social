import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignupScreen = ({ navigation }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Join the Dev Social Community</Text>

            {/* Name */}
            <TextInput
                style={styles.input}
                placeholder='Full Name'
                placeholderTextColor="#777"
                value={name}
                onChangeText={setName}
            />

            {/* Email */}
            <TextInput
                style={styles.input}
                placeholder='Email Address'
                placeholderTextColor="#777"
                value={email}
                onChangeText={setEmail}
            />

            {/* Password */}
            <TextInput
                style={styles.input}
                placeholder='Password'
                placeholderTextColor="#777"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            {/* Confirm Password */}
            <TextInput
                style={styles.input}
                placeholder='Confirm Password'
                placeholderTextColor="#777"
                secureTextEntry
                value={confirm}
                onChangeText={setConfirm}
            />

            {/* Signup Button */}
            <TouchableOpacity style={styles.signupBtn}>
                <Text style={styles.signupText}>Sign Up</Text>
            </TouchableOpacity>

            {/* Already have account */}
            <TouchableOpacity
                style={styles.loginContainer}
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={styles.loginText}>
                    Already have an account? <Text style={styles.loginBold}>Login</Text>
                </Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default SignupScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "black",
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#be47c7ff",
        marginTop: 70,
    },

    subtitle: {
        fontSize: 16,
        color: "#6622a2ff",
        marginBottom: 20,
    },

    input: {
        marginTop: 18,
        width: "90%",
        borderWidth: 1.5,
        borderColor: '#ccc',
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 14,
        fontSize: 16,
        backgroundColor: "#fff",
    },

    signupBtn: {
        width: "90%",
        backgroundColor: "#be47c7ff",
        paddingVertical: 15,
        borderRadius: 12,
        marginTop: 25,
        alignItems: "center",
    },
    signupText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    },

    loginContainer: {
        marginTop: 25,
    },

    loginText: {
        color: "#555",
        fontSize: 15,
    },

    loginBold: {
        color: "#6622a2ff",
        fontWeight: "bold",
    }
});
