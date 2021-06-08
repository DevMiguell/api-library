import { Flex, Link, List, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import { Header } from '../components/Header'
import ListItemIndex from "../components/ListItemIndex"

export default function Home() {
  return (
    <>
      <Header
        title="APIs Library"
        subtitle="Conheça e aprenda a usar API’s gratuitas"
        pageOne=""
        pageTwo=""
        hrefOne="/"
        hrefTwo="/"
      />
      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6" justify="center">

        <List display="flex" maxWidth={992} flexWrap="wrap">
          <ListItemIndex
            title="Youtube API"
            subtitle="Aprenda como funcional a api do Youtube"
            href="/youtube_api"
          />
          <ListItemIndex
            title="Medium API"
            subtitle="Aprenda como Buscar dado em um blog do Medium"
            href="/medium_api"
          />
          <ListItemIndex
            title="Github API"
            subtitle="Aprenda como Buscar dados na api do github"
            href="/github_api"
          />
        </List>
      </Flex>
    </>
  )
}
