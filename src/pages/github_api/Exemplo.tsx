import { Flex, Link, List, ListItem, Text } from "@chakra-ui/layout"
import { GetStaticProps } from "next"
import { Header } from "../../components/Header"

type Repository = {
  id: string
  name: string
  description: string
  html_url: string
  topics: string
  homepage: string
}

interface GithubDataProps {
  data: Repository[]
}

export default function RepositoryList({ data }: GithubDataProps) {
  return (
    <>
      <Header
        title="API Github"
        subtitle="Aprenda como Buscar dados na api do github"
        pageOne="Como usar"
        pageTwo="Exemplo"
        hrefOne="/github_api"
        hrefTwo="/github_api/Exemplo"
      />
      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6" justify="center">
        <List>
          {data.map(repository => {
            return (
              <ListItem key={repository.id}
                m="1rem"
                p="1.5rem"
                textalign="left"
                textDecoration="none"
                border="2px solid #464646"
                borderRadius="10px"
                _hover={{ borderColor: "orange.500" }}
              >
                <Link _hover={{ fontStyle: "none" }} href={repository.html_url} target="_blank">
                  <Text fontSize="2xl">{repository.name}</Text>
                  <Text >{repository.description}</Text>
                  <Text mt="2" mb="2" fontSize="12">{repository.topics}</Text>
                  <Text>{repository.homepage}</Text>
                </Link>
              </ListItem>
            )
          })}
        </List>
      </Flex>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/devmiguell/repos', {
    method: "GET",
    headers: {
      Accept: "application/vnd.github.mercy-preview+json"
    }
  })

  const data = await response.json()

  return {
    props: {
      data: data
    },
    revalidate: 60 * 60 * 24, // 24 horas
  }
}