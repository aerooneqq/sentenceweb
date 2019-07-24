import axios from "axios";

export default class TokenService{ 
    constructor(){ 
        this.apiURL = "https://localhost:44368/api/tokens?";
    }

    async sendGetTokenRequest(email, password){ 
        localStorage.removeItem("token")
        let link = this.apiURL + "email=" + email + "&password=" + password;
        let res = await axios(link);
        return await res.data;
    }
}