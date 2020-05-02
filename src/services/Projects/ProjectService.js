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
        })
    }

    getProjectUsers(projectID) {
        return axios.get(`${this._url}/projectUsers?projectID=${projectID}`, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        })
    }

    getProjectDocuments(projectID) {
        return axios.get(`${this._url}/projectDocuments?projectID=${projectID}`, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        })
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

    updateProjectNameAndDesc(projectID, newName, newDescription) {
        return axios.put(this._url, {
            projectID: projectID,
            description: newDescription,
            name: newName
        }, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        })
    }

    inviteUser(userID, projectID) {
        return axios.put(`${this._url}/invite?userID=${userID}&projectID=${projectID}`, {}, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    createNewDocumentInProject(projectID, documentName, templateID) {
        return axios.put(`${this._url}/document?projectID=${projectID}&documentName=${documentName}&templateID=${templateID}`,
            {}, {
                headers: { 
                    Authorization: `Bearer ${this._token}`
                }
            });
    }
}