import { appleAuthAndroid } from '@invertase/react-native-apple-authentication';

export default async () =>
{
    try
    {
        appleAuthAndroid.configure({
            clientId: "com.example.client-android",
            redirectUri: "https://example.com/auth/callback",
        });

        const response = await appleAuthAndroid.signIn();
        if (response) return response.id_token;
    } 
    catch (error) 
    {
      if (error && error.message) 
      {
        switch (error.message) 
        {
            case appleAuthAndroid.Error.NOT_CONFIGURED:
                console.log("appleAuthAndroid not configured yet.");
                break;
            case appleAuthAndroid.Error.SIGNIN_FAILED:
                console.log("Apple signin failed.");
                break;
            case appleAuthAndroid.Error.SIGNIN_CANCELLED:
                console.log("User cancelled Apple signin.");
                break;
            default:
                throw(err)
        }
      }
    }
}