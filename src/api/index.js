const VERSION = '/v1'
const API_PREFIX = `api${VERSION}`
const API_ENDPOINT = process.env.REACT_APP_API_URL || 'http://localhost:8080'

class API {}

// API - Base url
API.BASE_URL = `${API_ENDPOINT}/${API_PREFIX}`

// API - Routes prefix
API.ARTICLES_PREFIX = () => `${API.BASE_URL}/articles`

// API - Articles
API.getAllArticles = () => `${API.ARTICLES_PREFIX()}`

export default API
