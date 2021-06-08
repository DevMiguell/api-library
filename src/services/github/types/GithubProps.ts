type Repository = {
  id: string
  name: string
  description: string
  html_url: string
  topics: string
  homepage: string
}

export interface GithubDataProps {
  data: Repository[]
}

