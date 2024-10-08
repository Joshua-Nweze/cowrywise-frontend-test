import axios from "axios";

const api = axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Client_ID ${import.meta.env.VITE_APP_CLIENT_ID}`
    }
})

const getInitialPhotos = (page) => {
    return api.get(`/search/photos?query=african&page=${page}&per_page=8&client_id=${import.meta.env.VITE_APP_CLIENT_ID}`)
}

const searchPhotos = (query, page) => {
    return api.get(`/search/photos?query=${query}&page=${page}&per_page=8&client_id=${import.meta.env.VITE_APP_CLIENT_ID}`)
}

export default {
    getInitialPhotos,
    searchPhotos
}