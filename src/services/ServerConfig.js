const authorizationServerConfig = {
    host:"http://localhost:3000",
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