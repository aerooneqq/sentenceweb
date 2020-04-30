import axios from "axios";
import {authorizationServerConfig, getDocumentsAPIServerAddress} from "../ServerConfig";


export default class ProjectService {

    constructor(token) {
        this._token = token;
        this._url = getDocumentsAPIServerAddress(authorizationServerConfig) + "/projects";
    }

    getUserProjects() {
        return axios.get(`${this._url}/user`, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    getProjectInfo(projectID) {
        return axios.get(`${this._url}?projectID=${projectID}`, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    deleteProject(projectID) {
        return axios.delete(`${this._url}?projectID=${projectID}`, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    createProject(name, description) {
        return axios.post(`${this._url}?name=${name}&description=${description}`, {}, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        })
    }
}