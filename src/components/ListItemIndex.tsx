import { Text, ListItem, Link } from "@chakra-ui/react";

interface ListProps {
  title: string
  subtitle: string
  href: string
}

export default function Header({ title, subtitle, href }: ListProps) {
  return (
    <Link _hover={{ fontStyle: "none" }} href={href}>
      <ListItem
        m="1rem"
        p="1.5rem"
        textalign="left"
        textDecoration="none"
        border="2px solid #464646"
        borderRadius="10px"
        _hover={{ borderColor: "orange.500" }}
        w="72"
      >
        <Text fontWeight="bold">{title}</Text>
        <Text pt="2">{subtitle}</Text>
      </ListItem>
    </Link>

  )
}