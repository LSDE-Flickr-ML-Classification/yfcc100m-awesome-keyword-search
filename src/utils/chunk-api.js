import axios from 'axios'

/**
 * The Chunk API
 */
export default class ChunkAPI {

    _http
    constructor (url) {
        this._http = axios.create({
            baseURL: url,
            headers: { 'Content-Type': 'application/json' }
        })
    }

    async fetch_inverted_list() {
        return await this._http.get(`yfcc100m-tags/inverted_list.json`)
    }

    async get (chunk_id) {
        return await this._http.get(`yfcc100m-tags/${chunk_id}.json`)
    }
}