function getBaseUrlApi() {
    const host = window.location.host;
    
    if (host.includes('localhost') || host.includes('127.0.0.1')) {
        return 'http://localhost:3000';
    }
    
    return 'https://eventex-express.onrender.com';
}

export default getBaseUrlApi