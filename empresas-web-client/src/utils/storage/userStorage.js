import { AES } from 'crypto-js';

const cryptKey = '🚀';
const authStorageKey = '@auth';

export const UserStorage = {
    saveLoginInformation: (loginResponse) => {
        const loginResponseData = loginResponse.data;
        loginResponseData.auth = loginResponse.headers;

        const crypt = AES.encrypt(JSON.stringify(loginResponseData), cryptKey).toString();

        localStorage.setItem(authStorageKey, crypt);
    },

    getLoginInformation() {
        const cryptedAuth = localStorage.getItem(authStorageKey);

        const decryptBytes = CryptoJS.AES.decrypt(cryptedAuth, cryptKey);
        return JSON.parse(decryptBytes.toString(CryptoJS.enc.Utf8));
    },
};
