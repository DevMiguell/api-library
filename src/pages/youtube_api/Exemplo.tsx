import { Button, Flex, Icon, Input, InputGroup, ListItem, Link as ChakraLink, List, Text, Image } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { RiSearchLine } from 'react-icons/ri'
import styles from '../../styles/Home.module.scss'
import { Header } from '../../components/Header'

export default function Exemplo() {
  const YOUTUBE_PLAYLIS_ITEMS_API = 'https://www.googleapis.com/youtube/v3/search'
  const [youtubeData, setYoutubeData] = useState([])

  const [channelId, setChannelId] = useState('')
  const [activeChannel, setActiveChannel] = useState('')

  // baseURL= UCSfwM5u0Kce6Cce8_S72olg

  useEffect(() => {
    fetch(`${YOUTUBE_PLAYLIS_ITEMS_API}?key=AIzaSyBgoX-iA5JzMA_ITvKeyyW5-Eiy8k9A_d0&part=snippet&channelId=UCFIHeoKduKPsE2m1oSiK9Mg&order=date&maxResults=50`)
      .then(response => response.json())
      .then(data => {
        // data.items.pop() // removendo o ultimo item 
        setYoutubeData(data.items);
        console.log(data.items[0].snippet.description);
      }
      )
      .catch(err => console.log(err))
  }, [activeChannel])

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

        <InputGroup size="md" w="md" onClick={() => {
          setActiveChannel(channelId)
        }}
          alignItems="center">
          <Input
            pr="4.5rem"
            type="text"
            value={channelId}
            placeholder="Adicione ID do canal"
            onChange={e => setChannelId(e.target.value)}
            borderColor="gray.700"
            _hover={{ borderColor: "orange.800" }}
            _focus={{ borderColor: "orange.500" }}
          />

          <Button display="flex" ml="6" p="18px" type="submit" h="2rem" w="2rem" bg="none" _hover={{ bg: "orange.500" }} borderRadius="50%" size="sm">
            <Icon as={RiSearchLine} fontSize="2xl" />
          </Button>
        </InputGroup>

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
