import { Flex, Text, Link as ChakraLink } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";

import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";

import styles from '../../styles/Home.module.scss'

interface HeaderProps {
  title: string
  subtitle: string
  pageOne: string
  pageTwo: string
  hrefOne: string
  hrefTwo: string
}

export function Header({ title, subtitle, pageOne, pageTwo, hrefOne, hrefTwo }: HeaderProps) {
  const { asPath } = useRouter()

  // const isWideVersion = useBreakpointValue({
  //   base: false,
  //   lg: true,
  // })

  return (
    <Flex w="100%" h="72" bg="gray.900" px="6" align="center">
      <Flex
        as="header"
        w="100%"
        maxWidth={1480}
        h="72"
        bg="gray.900"
        mx="auto"
        px="6"
        align="center"
        justify="space-between"
        direction="column"
      >
        <Flex w="100%" mt="6">
          <ChakraLink href="/">
            <Logo />
          </ChakraLink>

          <Flex align="center" ml="auto">
            <NotificationNav />
          </Flex>
        </Flex>
        <Flex w="100%" direction="column" align="center" >
          <Text fontSize="4xl" fontWeight="bold">{title}</Text>
          <Text fontSize="2xl" mt="6">{subtitle}</Text>
        </Flex>

        <Flex w="100%" justify="center" mt="4" fontSize="1.125rem">
          <ChakraLink href={hrefOne} _hover={{ fontStyle: "none", color: "#DD6B20" }}>
            <Text className={asPath === hrefOne && styles.isActive }>{pageOne}</Text>
          </ChakraLink>

          <ChakraLink ml="8" href={hrefTwo} _hover={{ fontStyle: "none", color: "#DD6B20" }}>
            <Text className={asPath === hrefTwo && styles.isActive }>{pageTwo}</Text>
          </ChakraLink>
        </Flex>
      </Flex>
    </Flex>
  )
}