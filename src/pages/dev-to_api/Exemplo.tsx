import { GetStaticProps } from 'next';
import { Box, Flex, Image, Link, List, ListItem, Text } from '@chakra-ui/react';

import { Header } from '../../components/Header';

import styles from '../../styles/Home.module.scss'
import { DevToDataProps } from '../../services/devTo/types/DevToProps';
import { getDevToData } from "../../services/devTo"

export default function Exemplo({ data }: DevToDataProps) {
  return (
    <>
      <Header
        title="Dev.to API"
        subtitle="Aprenda como Buscar dados em um blog do Dev.to"
        pageOne="Como usar"
        pageTwo="Exemplo"
        hrefOne="/dev-to_api"
        hrefTwo="/dev-to_api/Exemplo"
      />
      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6" justify="center">

        <List className={styles.grid}>
          {data.map((item) => {
            return (
              <Link key={item.id} _hover={{ fontStyle: "none" }} href={item.url} target="_blank">
                <ListItem 
                  m="1rem"
                  p="1.5rem"
                  textalign="left"
                  textDecoration="none"
                  border="2px solid #464646"
                  borderRadius="10px"
                  _hover={{ borderColor: "orange.500" }}
                >
                  <Image mb={4} src={item.cover_image} />
                  <Text as="h1" fontSize="20">{item.title}</Text>
                  <Text mb={4} color="gray.300">{item.tags}</Text>
                  <Box>{item.description}</Box>

                </ListItem>
              </Link>
            )
          })}
        </List>
      </Flex>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getDevToData()

  return {
    props: {
      data: data
    },
    revalidate: 60 * 60 * 24, // 24 horas
  }
}