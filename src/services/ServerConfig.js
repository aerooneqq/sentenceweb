const nginxServerConfig = { 
    host:"https://localhost:443",
    apiPrefix: "api"
}

function getServerAddress(config) { 
    return config.host + "/" + config.apiPrefix;
}

export {nginxServerConfig, getServerAddress};