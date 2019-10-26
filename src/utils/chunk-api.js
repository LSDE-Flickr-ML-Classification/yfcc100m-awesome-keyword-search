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
        return await this._http.get(`data/inverted_list.json`)
    }

    async fetch_available_keywords_list() {
        return await this._http.get(`data/tag_list.json`)
    }

    async get (chunk_id) {
        return await this._http.get(`data/compressed/${chunk_id}`, {
            responseType: 'arraybuffer'
        })
    }

    async fetch_label_cloud() {
        return await this._http.get(`data/label_cloud.json`)
    }
}
