import {
    GoogleSignin,
    statusCodes,
} from '@react-native-community/google-signin';

GoogleSignin.configure(
  {
      scopes: ['email'],
      webClientId: '945401715138-9dolr319cvfiolg3lujd041qp4k34rbr.apps.googleusercontent.com'
  }
)

export default async () =>
{
	try 
	{
		await GoogleSignin.hasPlayServices();
		const userInfo = await GoogleSignin.signIn();
		return userInfo.idToken;
	} 
	catch (error) 
	{
		if (error.code === statusCodes.SIGN_IN_CANCELLED) console.log('Cancelled')
		else if (error.code === statusCodes.IN_PROGRESS) console.log('Progress')
		else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) console.log('Unavailable')
		else 
		{
			console.log(error);
			throw(error);
		}
	}
}

export const googleSignOut = async () =>
{
	if(GoogleSignin.isSignedIn()) await GoogleSignin.signOut();
}