import axios from "axios";
import {authorizationServerConfig, getDocumentsAPIServerAddress} from "../ServerConfig";

export default class DocumentStructureService {

    constructor(documentsApiToken) {
        this._documentsAPIToken = documentsApiToken;
        this._apiUrl = getDocumentsAPIServerAddress(authorizationServerConfig) + "/documentsStructure";
    }

    async getDocumentStructure(documentID) {
        return await axios.get(this._apiUrl, {
            headers: {
                Authorization: `Bearer ${this._documentsAPIToken}`
            }
        });
    }

    deleteDocumentItem(documentID, itemID) {
        let apiUrl = `${this._apiUrl}?documentID=${documentID}&itemID=${itemID}`;

        return axios.delete(apiUrl, {
            headers: {
                Authorization: `Bearer ${this._documentsAPIToken}`
            }
        });
    }
}