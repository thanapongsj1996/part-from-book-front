const VERSION = '/v1'
const API_PREFIX = `api${VERSION}`
const API_ENDPOINT = process.env.REACT_APP_API_URL || 'http://localhost:8080'

class API {}

// API - Base url
API.BASE_URL = `${API_ENDPOINT}/${API_PREFIX}`

// API - Routes prefix
API.ARTICLES_PREFIX = () => `${API.BASE_URL}/articles`
API.USER_PREFIX = () => `${API.BASE_URL}/users`

// API - Articles
API.articles = () => `${API.ARTICLES_PREFIX()}`
API.articleById = (id) => `${API.ARTICLES_PREFIX()}/${id}`

// API - Users
API.login = () => `${API.USER_PREFIX()}/login`
export default API
