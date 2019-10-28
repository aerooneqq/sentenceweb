import { alertAppMessage } from "../../components/ApplicationMessage/ApplicationMessageManager";

export default class ResponseService { 

    /**
     * Alerts the appliation message
     * @param {The error response from the axios request} er 
     * @param {Error message if the error does not contain response} errorMessage 
     */
    alertErrorMessage(er, errorMessage) { 
        if (er) { 
            if (er.response) { 
                alertAppMessage(er.response.data, "error");
            }
            else { 
                alertAppMessage(errorMessage, "error")
            }
        }
    }

}