import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";

export default function TermsScreen() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.backText}> Back</Text>
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Terms & Conditions</Text>
            </View>

            {/* Content */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer}
            >
                <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
                <Text style={styles.text}>
                    By accessing and using this application, you agree to comply with
                    and be bound by these terms and conditions.
                </Text>

                <Text style={styles.sectionTitle}>2. User Responsibilities</Text>
                <Text style={styles.text}>
                    You agree to use this app only for lawful purposes and in a manner
                    that does not infringe the rights of others.
                </Text>

                <Text style={styles.sectionTitle}>3. Privacy Policy</Text>
                <Text style={styles.text}>
                    We value your privacy. Only necessary information is collected to
                    improve app performance and user experience.
                </Text>

                <Text style={styles.sectionTitle}>4. Account Security</Text>
                <Text style={styles.text}>
                    You are responsible for maintaining the confidentiality of your
                    login credentials and all activities under your account.
                </Text>

                <Text style={styles.sectionTitle}>5. Updates to Terms</Text>
                <Text style={styles.text}>
                    We may update these terms periodically. Continued use of the app
                    means you accept any changes made.
                </Text>

                <Text style={styles.sectionTitle}>6. Contact Information</Text>
                <Text style={styles.text}>
                    If you have any questions about these terms, please contact our
                    support team for assistance.
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F6FA",
    },

    header: {
        backgroundColor: "#6C63FF",
        paddingVertical: 40,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
    },

    backText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
        marginRight: 15,
    },

    headerTitle: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },

    scrollContainer: {
        padding: 20,
        paddingBottom: 40,
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 15,
        marginBottom: 5,
        color: "#333",
    },

    text: {
        fontSize: 15,
        color: "#555",
        lineHeight: 22,
    },
});
