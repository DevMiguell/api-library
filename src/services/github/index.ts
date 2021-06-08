import axios from 'axios'

export const getGithubData = async () => {
  const { data } = await axios
    .get('https://api.github.com/users/devmiguell/repos', {
      headers: {
        Accept: "application/vnd.github.mercy-preview+json"
      }
    })
    
    return data
}
