import {alertAppMessage} from "../../../../../../ApplicationMessage/ApplicationMessageManager";

var isUpdating = false;

async function performAction(action) {    
    if (isUpdating === false) {
        isUpdating = true
        await action();
        isUpdating = false;
    } else { 
        alertAppMessage("Wait until the previous task is done", "error");
    }
}

export {performAction}