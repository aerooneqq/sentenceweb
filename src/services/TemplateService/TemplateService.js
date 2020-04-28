import axios from "axios";
import {authorizationServerConfig, getDocumentsAPIServerAddress} from "../ServerConfig";

export default class TemplatesService {

    constructor(token) {
        this._token = token;
        this._url = getDocumentsAPIServerAddress(authorizationServerConfig) + "/templates";
    }

    getTemplateByID(templateID) {
        return axios.get(`${this._url}?templateID=${templateID}`, {
            headers: {
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    getUserTemplates() {
        return axios.get(`${this._url}/user`, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    getPublishedTemplates() {
        return axios.get(`${this._url}/published`, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    createNewTemplate(name, desc, organization) {
        return axios.post(this._url, {
            name: name,
            description: desc,
            organization: organization,
        }, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    searchForUserTemplates(query) {
        return axios.get(`${this._url}/user/search?query=${query}`, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    searchForPublicTemplates(query) {
        return axios.get(`${this._url}/published/search?query=${query}`, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    deleteTemplate(templateID) {
        return axios.delete(`${this._url}?templateID=${templateID}`, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    publishTemplate(templateID) {
        return axios.put(this._url, {
            templateID: templateID,
            published: true,
        }, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    updateTemplateStructure(templateID, newStructure) { 
        return axios.put(this._url, {
            templateID: templateID, 
            items: newStructure,
        }, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        })
    }

    removeTemplateFromPublic(templateID) {
        return axios.put(this._url, {
            templateID: templateID,
            published: false,
        }, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        });
    }

    updateTemplatePhoto(templateID, newPhoto) {
        return axios.put(this._url, {
            templateID: templateID,
            logo: newPhoto,
        }, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        })
    }

    updateTemplateProperties(templateID, newName, newOrg, newDescription) {
        return axios.put(this._url, {
            templateID: templateID,
            name: newName,
            organization: newOrg,
            description: newDescription,
        }, {
            headers: { 
                Authorization: `Bearer ${this._token}`
            }
        })
    }
}