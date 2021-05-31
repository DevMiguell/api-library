import axios from 'axios'

export const apiYoutube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/search'
})

export const apiMedium = axios.create({
  baseURL: 'https://medium.com/feed/@uxplanet'
})