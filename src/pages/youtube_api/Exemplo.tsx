import { Flex, ListItem, Link as ChakraLink, List, Text, Image } from '@chakra-ui/react'
import styles from '../../styles/Home.module.scss'
import { Header } from '../../components/Header'
import { GetStaticProps } from 'next'
import { getYoutubeData } from '../../services/youtube'
import { ArrayVideosProps } from '../../services/youtube/types/YoutubeProps'

// baseURL= UCSfwM5u0Kce6Cce8_S72olg

export default function Exemplo({ youtubeData }: ArrayVideosProps) {
  return (
    <>
      <Header
        title="Youtube API"
        subtitle="Aprenda como funcional a api do Youtube"
        pageOne="Como usar"
        pageTwo="Exemplo"
        hrefOne="/youtube_api"
        hrefTwo="/youtube_api/Exemplo"
      />
      <Flex
        width="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
        align="center"
        direction="column"
      >
        <List
          mt="6"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          w="100%"
          direction="column"
          maxWidth={["600", "800px", "800px"]}
        >
          {!youtubeData && <h1>Coloque um ID Valido!</h1>}
          {youtubeData?.map((item) => {
            return (
              <ListItem
                key={item.etag}
                m="1rem"
                p="1.5rem"
                w="45%"
                textAlign="left"
                color="inherit"
                textDecoration="none"
                border="2px solid #464646"
                borderRadius="10px"
                transition="0.2s"
                _hover={{ borderColor: "orange.500" }}
              >
                <ChakraLink href={`https://www.youtube.com/watch?v=${item.id.videoId}`}>
                  <Text className={styles.youtubeImg}>
                    <Image
                      src={item.snippet.thumbnails.medium.url}
                      width={item.snippet.thumbnails.medium.width}
                      height={item.snippet.thumbnails.medium.height}
                    />
                  </Text>
                  <Text
                    pt="2"
                    margin="0 0 1rem 0"
                    fontSize="1rem"
                    max-width="25ch"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                  >
                    {item.snippet.title}
                  </Text>
                </ChakraLink>
              </ListItem>
            )
          })}
        </List>
      </Flex>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getYoutubeData()

  return {
    props: {
      youtubeData: data.items
    },
    revalidate: 60 * 60 * 24, // 24 horas
  }
}