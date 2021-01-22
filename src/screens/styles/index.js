import { StyleSheet } from 'react-native';

export default StyleSheet.create
(
    {
        container:
        {
            flex: 1,
            justifyContent: 'center',
            alignContent: 'stretch',
        },
        
        card:
        {
            justifyContent: 'flex-start',
            alignContent: 'stretch',
            margin: 16,
            padding: 16,
            borderWidth: 1,
            borderRadius: 10
        },

        input:
        {
            marginBottom: 8
        },

        label:
        {
            marginBottom: 4
        },

        field:
        {
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 2,
            borderRadius: 20,
            height: 40
        },

        button:
        {
            height: 40,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20
        },

        buttonTouchable:
        {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }, 

        buttonText:
        {
            color: 'white'
        },

        errorText:
        {
            marginTop: 4,
            color: '#d9534f'
        },

        googleButton:
        {
            marginTop: 8,
            alignSelf: 'center'
        },

        appleButton:
        {
            marginVertical: 8,
            height: 40,
            alignSelf: 'center'
        }
    }
)