import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SignupScreen from './SignupScreen'

const LoginScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>

            {/* Logo */}
            <Image style={styles.logo} source={require("../assets/logo.png")} />

            {/* Heading */}
            {/* <Text style={styles.title}>Welcome Back 👋</Text> */}
            <Text style={styles.subtitle}>Login to your account</Text>

            {/* Inputs */}
            <TextInput
                style={styles.input}
                placeholder='Enter your Email'
                placeholderTextColor="#777"
            />
            <TextInput
                style={styles.input}
                placeholder='Enter your Password'
                secureTextEntry
                placeholderTextColor="#777"
            />

            {/* Forgot Password */}
            <TouchableOpacity style={styles.forgotContainer}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity style={styles.loginBtn} onPress={()=> navigation.navigate("BottomNavigation")}>
                <Text style={styles.loginText}>Sign In </Text>
            </TouchableOpacity>

            {/* Signup Button */}
            <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate("SignupScreen")}>
                <Text style={styles.signupText}>Create New Account</Text>
            </TouchableOpacity>

            {/* Divider */}
            <Text style={styles.orText}>or continue with</Text>

            {/* Google Button */}
            <TouchableOpacity style={styles.googleBtn}>
                {/* <Image
                    source={require("../assets/google.png")}
                    style={styles.googleIcon}
                /> */}
                <Text style={styles.googleText}>Sign in with Google</Text>
            </TouchableOpacity>

            {/* Terms and Conditions */}
            <View style={styles.bottomTextContainer}>
                <Text style={styles.bottomText}>
                    By continuing, you agree to our
                </Text>

                <TouchableOpacity>
                    <Text style={styles.linkText}> Terms & Conditions </Text>
                </TouchableOpacity>

                <Text style={styles.bottomText}>and</Text>

                <TouchableOpacity>
                    <Text style={styles.linkText}> Privacy Policy</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        
        flex: 1,
        alignItems: 'center',
        backgroundColor: "black",
    },

    logo: {
        width: 100,
        height: 100,
        resizeMode: "contain",
        marginTop: 80,
        marginBottom: 10,
    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#6622a2ff",
        marginTop: 10,
    },

    subtitle: {
        fontSize: 16,
        color: "#555",
        marginBottom: 20,
    },

    input: {
        marginTop: 20,
        width: "90%",
        borderWidth: 1.5,
        borderColor: '#ccc',
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 14,
        fontSize: 16,
        backgroundColor: "#fff",
    },

    /* Forgot Password */
    forgotContainer: {
        width: "90%",
        alignItems: "flex-end",
        marginTop: 8,
    },
    forgotText: {
        color: "#be47c7ff",
        fontSize: 14,
        fontWeight: "600",
    },

    /* Login Button */
    loginBtn: {
        width: "90%",
        backgroundColor: "#be47c7ff",
        paddingVertical: 15,
        borderRadius: 12,
        marginTop: 20,
        alignItems: "center",
    },
    loginText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    },

    /* Signup Button */
    signupBtn: {
        width: "90%",
        paddingVertical: 15,
        borderRadius: 12,
        marginTop: 12,
        alignItems: "center",
        borderWidth: 1.5,
        borderColor: "#0EA5E9"
    },
    signupText: {
        color: "#0EA5E9",
        fontSize: 17,
        fontWeight: "600"
    },

    orText: {
        marginTop: 20,
        color: "#555",
        fontSize: 15
    },

    /* Google Button */
    googleBtn: {
        width: "90%",
        flexDirection: "row",
        backgroundColor: "#EA4335",
        paddingVertical: 15,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 15,
    },
    googleIcon: {
        width: 22,
        height: 22,
        marginRight: 10,
    },
    googleText: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "600"
    },

    /* Terms Bottom */
    bottomTextContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: 35,
        width: "90%",
    },
    bottomText: {
        color: "#666",
        fontSize: 13,
    },
    linkText: {
        color: "#be47c7ff",
        fontSize: 13,
        fontWeight: "600"
    }
});
