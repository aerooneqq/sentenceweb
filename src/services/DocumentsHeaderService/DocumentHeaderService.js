import axios from "axios";
import {authorizationServerConfig, getServerAddress} from "../ServerConfig";

export default class DocumentHeaderService {

    constructor(token) {
        this._apiToken = token;
        this._apiUrl = getServerAddress(authorizationServerConfig) + "/documentDeskState";
    }

    getDocumentDeskState() {
        return axios.get(this._apiUrl, {
            headers: {
                Authorization: `Bearer ${this._apiToken}`
            }
        });
    }

    removeDocumentFromHeader(documentID) {
        return axios.delete(`${this._apiUrl}?documentID=${documentID}`, {
            headers: {
                Authorization: `Bearer ${this._apiToken}`
            }
        });
    }

    addDocumentToHeader(documentID) {
        let url = `${this._apiUrl}?documentID=${documentID}`;
        return axios.put(url, {}, {
            headers: {
                Authorization: `Bearer ${this._apiToken}`
            }
        })
    }
}