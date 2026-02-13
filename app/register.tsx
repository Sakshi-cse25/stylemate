import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function RegisterScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>

            {/* Back Button */}
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => router.back()}
            >
                <Text style={styles.backText}>← Back</Text>
            </TouchableOpacity>

            <Text style={styles.text}>Register Page</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
    },
    backButton: {
        position: "absolute",
        top: 50,
        left: 20,
    },
    backText: {
        fontSize: 18,
        color: "blue",
    },
});
