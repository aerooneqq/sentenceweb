import axios from "axios";
import {authorizationServerConfig, getDocumentsAPIServerAddress} from "../ServerConfig";

export default class TemplatesService {

    constructor(token) {
        this._token = token;
        this._url = getDocumentsAPIServerAddress(authorizationServerConfig) + "/word";
    }

    getDownloadLink(documentID) {
        return axios.get(`${this._url}/link?documentID=${documentID}`, {
            headers: {
                Authorization: `Bearer ${this._token}`
            }
        })
    }
}