import axios from 'axios'

export const getDevToData = async () => {
  const { data } = await axios
    .get('https://dev.to/api/articles?username=przemek')
    
    return data
}
