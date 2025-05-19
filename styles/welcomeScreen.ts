import { StyleSheet } from "react-native";

const getWelcomeScreenStyles = () =>
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
        title: {
            fontSize: 24,
            fontWeight: '600',
            color: '#1e3a8a',
            marginBottom: 20,
        },
        animationContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        animation: {
            width: 280,
            height: 280,
        },
        buttonContainer: {
            width: '100%',
            marginBottom: 20,
        },
        primaryButton: {
            backgroundColor: '#1e3a8a',
            borderRadius: 8,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 16,
        },
        primaryButtonText: {
            color: 'white',
            fontSize: 16,
            fontWeight: '600',
        },
        secondaryButton: {
            backgroundColor: 'white',
            borderRadius: 8,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#e5e7eb',
        },
        secondaryButtonText: {
            color: '#1e3a8a',
            fontSize: 16,
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

    export default getWelcomeScreenStyles