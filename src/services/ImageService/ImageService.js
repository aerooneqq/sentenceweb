
export default class ImageService { 

    constructor(bytes) { 
        this._bytes = new Uint8Array(bytes);
    }

    getBase64String() { 
        let binaryString = "";

        for (let i = 0; i < this._bytes.length; i++) { 
            binaryString += String.fromCharCode(this._bytes[i]);
        }

        return window.btoa(binaryString);
    }
}