import axios from "axios";
import {authorizationServerConfig, getDocumentsAPIServerAddress} from "../ServerConfig";


export default class DocumentElementsService {

    constructor(token) {
        this._token = token;
        this._url = getDocumentsAPIServerAddress(authorizationServerConfig) + "/documentElements";
    }

    getDocumentElements(itemID) {
        return axios.get(`${this._url}?itemID=${itemID}`, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    createNewElement(elementType, itemID, documentID) {
        let url = `${this._url}?documentID=${documentID}&itemID=${itemID}&type=${elementType}`;
        return axios.post(url, {}, {
            headers: {
                Authorization: `Bearer ${this._token}`
            }
        });
    }
}