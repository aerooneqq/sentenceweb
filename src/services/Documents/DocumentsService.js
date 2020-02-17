import axios from "axios";
import {authorizationServerConfig, getDocumentsAPIServerAddress} from "../ServerConfig";

export default class DocumentsService {
    constructor(token) {
        this._token = token;
        this._apiUrl = getDocumentsAPIServerAddress(authorizationServerConfig.documentsApiPrefix)
            + "/documents";
    }


    async getDocumentByDocumentID(documentID) {
        let url = this._apiUrl + `?documentID=${documentID}`;

        return await axios.get(this._apiUrl, {
            headers: {
                Authorization: `Bearer ${this._apiUrl}`
            }
        });
    }
}