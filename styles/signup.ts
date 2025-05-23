import { Dimensions, StyleSheet } from "react-native";

const signupStyle = () =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white',
        },
        content: {
            flex: 1,
            paddingHorizontal: 24,
            paddingTop: 40,
            justifyContent: 'space-between',
            paddingBottom: 20,
        },
        lottieAnimation: {
            width: Dimensions.get("window").width,
            height: 350, // Reduced height for better vertical centering
            marginVertical: 20,
                },
        title: {
            fontSize: 24,
            fontWeight: '600',
            color: '#1e3a8a',
            marginBottom: 20,
        },
        form: {
            flex: 1,
        },
        inputGroup: {
            marginBottom: 16,
        },
        label: {
            fontSize: 14,
            color: '#4b5563',
            marginBottom: 6,
        },
        input: {
            height: 50,
            borderWidth: 1,
            borderColor: '#e5e7eb',
            borderRadius: 8,
            paddingHorizontal: 12,
            fontSize: 16,
        },
        passwordContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#e5e7eb',
            borderRadius: 8,
            height: 50,
        },
        passwordInput: {
            flex: 1,
            height: '100%',
            paddingHorizontal: 12,
            fontSize: 16,
        },
        eyeIcon: {
            padding: 10,
        },
        primaryButton: {
            backgroundColor: '#1e3a8a',
            borderRadius: 8,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 20,
        },
        primaryButtonText: {
            color: 'white',
            fontSize: 16,
            fontWeight: '600',
        },
        dividerContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
        },
        divider: {
            flex: 1,
            height: 1,
            backgroundColor: '#e5e7eb',
        },
        dividerText: {
            paddingHorizontal: 10,
            color: '#6b7280',
            fontSize: 14,
        },
        socialButton: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            borderWidth: 1,
            borderColor: '#e5e7eb',
            borderRadius: 8,
            marginBottom: 16,
        },
        socialIcon: {
            width: 20,
            height: 20,
            marginRight: 10,
        },
        socialButtonText: {
            fontSize: 16,
            color: '#4b5563',
        },
        footer: {
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
        },
        footerText: {
            color: '#6b7280',
            fontSize: 14,
        },
        footerLink: {
            color: '#1e3a8a',
            fontSize: 14,
            fontWeight: '600',
        },
        indicator: {
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
        },
        indicatorDot: {
            width: 30,
            height: 4,
            backgroundColor: '#1e3a8a',
            borderRadius: 2,
        },
        });

        export default signupStyle