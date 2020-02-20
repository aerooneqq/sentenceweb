import axios from "axios";
import {authorizationServerConfig, getDocumentsAPIServerAddress} from "../ServerConfig";

export default class DocumentStructureService {

    constructor(documentsApiToken) {
        this._documentsAPIToken = documentsApiToken;
        this._apiUrl = getDocumentsAPIServerAddress(authorizationServerConfig) + "/documentStructure";
    }

    async getDocumentStructure(documentID) {
        return await axios.get(`${this._apiUrl}?documentID=${documentID}`, {
            headers: {
                Authorization: `Bearer ${this._documentsAPIToken}`
            }
        });
    }

    addListItem(parentItemID, documentStructureID) {
        alert(documentStructureID);
        return axios.put(`${this._apiUrl}`, {
            parentDocumentStructureID: documentStructureID,
            itemID: parentItemID,
            newName: null,
            newInnerItem: {
                name: "New item",
                itemType: 0,
                position: 0,
            }
        }, {
            headers: {
                Authorization: `Bearer ${this._documentsAPIToken}`
            }
        });
    }

    addContentItem(parentItemID, documentStructureID) {
        return axios.put(`${this._apiUrl}`, {
            parentDocumentStructureID: documentStructureID,
            itemID: parentItemID,
            newName: null,
            newInnerItem: {
                name: "New item",
                itemType: 1,
                position: 0,
            }
        }, {
            headers: {
                Authorization: `Bearer ${this._documentsAPIToken}`
            }
        });
    }

    renameItem(itemID, documentStructureID, newName) {
        return axios.put(`${this._apiUrl}`, {
            parentDocumentStructureID: documentStructureID,
            itemID: itemID,
            newName: newName,
            newInnerItem: null
        }, {
            headers: {
                Authorization: `Bearer ${this._documentsAPIToken}`
            }
        });
    }

    deleteDocumentItem(documentStructureID, itemID) {
        let apiUrl = `${this._apiUrl}/item?documentStructureID=${documentStructureID}&itemToDeleteID=${itemID}`;

        return axios.delete(apiUrl, {
            headers: {
                Authorization: `Bearer ${this._documentsAPIToken}`
            }
        });
    }
}