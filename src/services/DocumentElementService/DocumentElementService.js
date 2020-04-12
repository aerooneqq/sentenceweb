import axios from "axios";
import {authorizationServerConfig, getDocumentsAPIServerAddress} from "../ServerConfig";


export default class DocumentElementsService {

    constructor(token) {
        this._token = token;
        this._url = getDocumentsAPIServerAddress(authorizationServerConfig) + "/documentElements";
    }

    getDocumentElements(documentID, itemID) {
        return axios.get(`${this._url}?documentID=${documentID}&itemID=${itemID}`, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    createNewElement(elementType, itemID, documentID, index) {
        let url = `${this._url}?documentID=${documentID}&itemID=${itemID}&type=${elementType}&index=${index}`;
        return axios.post(url, {}, {
            headers: {
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    getDocumentElement(elementID) {
        let url = `${this._url}/element?documentElementID=${elementID}`;
        return axios.get(url, {
            headers: {
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    deleteDocumentElement(elementID) {
        let url = `${this._url}?documentElementID=${elementID}`;
        return axios.delete(url, {
            headers: {
                Authorization: `Bearer ${this._token}`
            }
        });
    }
}