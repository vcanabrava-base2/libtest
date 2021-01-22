import AsyncStorage from '@react-native-async-storage/async-storage';

const key = '@user_data';

const defaultData =
{
    token: '',
    authType: ''
}

const UserData =
{
    read: async () =>
    {
        try
        {
            const raw = await AsyncStorage.getItem(key);
            const data = raw !== null ? JSON.parse(raw) : defaultData;
            return data
        }
        catch(err)
        {
            return defaultData;
        }
    },

    writeToken: async token =>
    {
        try
        {
            const data = await UserData.read();
            data.token = token;
            await AsyncStorage.setItem(key, JSON.stringify(data));
        }
        catch
        {
            return;
        }
    },

    writeType: async type =>
    {
        try
        {
            const data = await UserData.read();
            data.authType = type;
            await AsyncStorage.setItem(key, JSON.stringify(data));
        }
        catch
        {
            return;
        }
    },

    clear: async () =>
    {
        try
        {
            await AsyncStorage.setItem(key, JSON.stringify(defaultData));
        }
        catch
        {
            return;
        }
    }
}

export default UserData;