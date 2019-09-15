
/**
 * This class represents the history of folders which were visited by user.
 * This class provides an api to get previously visited folder, to get
 * the next visited folder and to add the new folder to the history.
 */
class FolderHistoryManager { 
    
    constructor(firstFolderID) { 
        this.currIndex = 0;
        this.foldersID = [firstFolderID];
    }

    setGoToFolderFunc(goToFolderFunc) { 
        this.goToFolder = goToFolderFunc;
    }

    setGoToStartingScreen(goToStartingScreen) { 
        this.goToStartingScreen = goToStartingScreen;
    }

    getCurrentFolderID() { 
        return this.foldersID[this.currIndex];
    }

    getPreviousFolder() {
        if (this.currIndex - 1 === 0) { 
            this.goToStartingScreen();
            return 0;
        }
        else if (this.currIndex > 0) { 
            this.currIndex--;
            this.goToFolder(this.foldersID[this.currIndex], false);
            return this.currIndex;
        }
        
        return null;
    }

    clear() { 
        this.foldersID = [null];
        this.currIndex = 0;
    }

    getNextFolder() { 
        if (this.currIndex + 1 < this.foldersID.length) {
            this.currIndex++; 
            this.goToFolder(this.foldersID[this.currIndex], false);
            return this.currIndex;
        }

        return null;
    }

    addNewFolder(folderID) { 
        if (this.foldersID[this.currIndex + 1] === folderID) { 
            this.currIndex++;
        }
        else if (this.currIndex === this.foldersID.length - 1) { 
            this.foldersID.push(folderID);
        }
        else { 
            this.foldersID.splice(this.currIndex + 1, this.length - this.currIndex - 1, folderID);
        }

        this.currIndex++;
    }
}

var foldersHistoryManager = null;

function initializeManager() { 
    foldersHistoryManager = new FolderHistoryManager(null);
}

function setGoToFolderFunc(goToFolderFunc) { 
    foldersHistoryManager.setGoToFolderFunc(goToFolderFunc)
}

function setGoToStartingScreenFunc(goToStartingScreenFunc) { 
    foldersHistoryManager.setGoToStartingScreen(goToStartingScreenFunc);
}

var getFoldersHistoryManager = () => foldersHistoryManager;

export {initializeManager, getFoldersHistoryManager, setGoToFolderFunc, 
    setGoToStartingScreenFunc};