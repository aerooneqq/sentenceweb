import axios from "axios";
import {authorizationServerConfig, getDocumentsAPIServerAddress} from "../ServerConfig";


class BranchService {

    constructor(token) {
        this._token = token;
        this._url = getDocumentsAPIServerAddress(authorizationServerConfig) + "/branch";
    }

    createNewBranch(elementID, branchName) {
        let url = `${this._url}?elementID=${elementID}&branchName=${branchName}`;
        return axios.post(url, {}, {
            headers: {
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    deleteBranch(elementID, branchID) {
        let url = `${this._url}?elementID=${elementID}&branchID=${branchID}`;
        return axios.delete(url, {
            headers: {
                Authorization: `Bearer ${this._token}`
            }
        });
    }
}

export {BranchService}