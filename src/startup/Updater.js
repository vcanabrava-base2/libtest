import { useEffect } from 'react';
import { Alert, AppState } from 'react-native';
import * as Updates from 'expo-updates';

const searchAndUpdate = async () =>
{
  try
  {
    const update = await Updates.checkForUpdateAsync();
    if (update.isAvailable) 
    {
      await Updates.fetchUpdateAsync();
      Alert.alert('Update Manager', 'New version detected, restarting now', [
        {
          text: 'Ok',
          onPress: () => Updates.reloadAsync()
        }
      ]);
    }
  }
  catch (err) { /*alert(err.message)*/ }
}

const Updater = () =>
{
  const handleAppStateChange = (state) => { if(state === 'active') searchAndUpdate(); }

  useEffect(() =>
  {
    AppState.addEventListener('change', handleAppStateChange)
    return () => AppState.removeEventListener('change', handleAppStateChange);
  }, []);

  return null;
}

export default Updater;