import { GetStaticProps } from 'next';
import { Box, Flex, Link, List, ListItem, Text } from '@chakra-ui/react';
import Feed from 'rss-to-json'

import { Header } from '../../components/Header';

import styles from '../../styles/Home.module.scss'
import { MediumDataProps } from '../../services/medium/types/MediumProps';

export default function Exemplo({ data }: MediumDataProps) {
  return (
    <>
      <Header
        title="API Medium"
        subtitle="Aprenda como Buscar dado em um blog do Medium"
        pageOne="Como usar"
        pageTwo="Exemplo"
        hrefOne="/medium_api"
        hrefTwo="/medium_api/Exemplo"
      />
      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6" justify="center">

        <List className={styles.grid}>
          {data.map((item) => {
            return (
              <ListItem key={item.created}
                m="1rem"
                p="1.5rem"
                textalign="left"
                textDecoration="none"
                border="2px solid #464646"
                borderRadius="10px"
                _hover={{ borderColor: "orange.500" }}
              >
                <Link _hover={{ fontStyle: "none" }} href={item.link} target="_blank">
                  <Text>{item.title}</Text>
                  <Text>{item.category}</Text>
                  <Box className={styles.boxReset}
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
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
  let rss = await Feed.load('https://medium.com/feed/@towardsdatascience');
  let res = JSON.stringify(rss, null, 3)
  const data = JSON.parse(res)

  return {
    props: {
      data: data.items
    },
    revalidate: 60 * 60 * 24, // 24 horas
  }
}