import axios from "axios";
import {authorizationServerConfig, getDocumentsAPIServerAddress} from "../ServerConfig";


class BranchNodeService {

    constructor(token) {
        this._token = token;
        this._url = getDocumentsAPIServerAddress(authorizationServerConfig) + "/branchNode";
    }

    createNewBranchNode(elementID, branchID, nodeName, comment) {
        let url = `${this._url}?elementID=${elementID}&branchID=${branchID}&nodeName=${nodeName}&comment=${comment}`;
        return axios.post(url, {}, {
            headers: {
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    deleteNode(elementID, nodeID) {
        let url = `${this._url}?elementID=${elementID}&branchNodeID=${nodeID}`;
        return axios.delete(url, {
            headers: {
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    updateNode(elementID, nodeID, newName, newComment) {
        let url = `${this._url}?elementID=${elementID}&branchNodeID=${nodeID}`;
        return axios.put(url, {
            name: newName,
            comment: newComment,
        }, {
            headers: {
                Authorization: `Bearer ${this._token}`
            }
        })
    }
}

export {BranchNodeService}