import { Link } from "expo-router";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform
} from "react-native";

export default function LoginScreen() {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            style={styles.container}
        >
            <View style={styles.card}>
                <Text style={styles.title}>Welcome Back 👋</Text>

                <TextInput
                    placeholder="Enter Email"
                    placeholderTextColor="#888"
                    style={styles.input}
                />

                <TextInput
                    placeholder="Enter Password"
                    placeholderTextColor="#888"
                    secureTextEntry
                    style={styles.input}
                />

                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>

                {/* Centered Create Account */}
                <View style={styles.createAccountContainer}>
                    <Link href="/register" asChild>
                        <Text style={styles.createAccountText}>
                            Create a new account
                        </Text>
                    </Link>
                </View>
            </View>

            {/* Terms & Conditions Bottom */}
            <View style={styles.termsContainer}>
                <Text style={styles.termsText}>
                    By continuing, you agree to our{" "}
                    <Link href="/terms" asChild>
                        <Text style={{ color: "#4A90E2" }}>Terms & Conditions</Text>
                    </Link>
                    
                </Text>
            </View>

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6C63FF",
        justifyContent: "center",
        padding: 20,
    },

    card: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 25,
        elevation: 10,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 10,
    },

    title: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#333",
    },

    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 12,
        marginBottom: 15,
        borderRadius: 12,
        backgroundColor: "#F5F5F5",
    },

    loginButton: {
        backgroundColor: "#6C63FF",
        padding: 15,
        borderRadius: 12,
        alignItems: "center",
        marginTop: 10,
    },

    loginText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },

    createAccountContainer: {
        marginTop: 15,
        alignItems: "center",
    },

    createAccountText: {
        color: "#6C63FF",
        fontWeight: "600",
    },

    termsContainer: {
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,
        alignItems: "center",
    },

    termsText: {
        fontSize: 12,
        color: "white",
        textAlign: "center",
    },
});
