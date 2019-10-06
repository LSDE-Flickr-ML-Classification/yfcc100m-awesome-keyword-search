import axios from 'axios'

/**
 * The Chunk API
 */
export default class ChunkAPI {

    _http
    constructor (url) {
        console.log(url)
        this._http = axios.create({
            baseURL: url,
            headers: { 'Content-Type': 'application/json' }
        })
    }

    async exists (tag) {
        return await this._http.get(`yfcc100m-tags/${tag}/index.json`)
    }
    async get (tag, chunk_id) {
        console.log(tag)
        console.log(chunk_id)
        return await this._http.get(`yfcc100m-tags/${tag}/${chunk_id}.json`)
    }
}

// export default new ChunkAPI( {
//     url: "./" //env('API_URL')  // We assume 'https://api.example.com/v1' is set as the env variable
// })