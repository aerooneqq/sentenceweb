const authorizationServerConfig = {
    host:"https://localhost:443",
    apiPrefix: "sentenceapi",
    documentsApiPrefix: "documentsapi"
};

function getServerAddress(config) { 
    return config.host + "/" + config.apiPrefix;
}

function getDocumentsAPIServerAddress(config) {
    return config.host + "/" + config.documentsApiPrefix;
}

export {authorizationServerConfig, getDocumentsAPIServerAddress, getServerAddress};