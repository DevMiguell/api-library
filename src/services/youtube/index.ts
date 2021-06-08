import axios from 'axios'

export const getYoutubeData = async () => {
  const { data } = await axios
    .get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: 'AIzaSyBgoX-iA5JzMA_ITvKeyyW5-Eiy8k9A_d0',
        channelId: 'UCFIHeoKduKPsE2m1oSiK9Mg',
        part: 'snippet',
        order: 'date',
        maxResults: 50,
      }
    })
    data.items.pop()

    return data
}
