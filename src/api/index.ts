import axios from 'axios';

const url = 'http://localhost:5000/api/user/register';

export const authSignIn = async (email: string, password: string) => {
    const { data } = await axios.post("http://localhost:5000/api/user/signin", {
        email: email, 
        password: password
    })
    return data;
}

export const authRegister = async (name: string, email: string, password: string) => {
    const { data } = await axios.post(url, {
        name: name,
        email: email,
        password: password
    });
    return data;
};