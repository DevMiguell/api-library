import { HStack, Icon } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

export function NotificationNav() {
  return (
    <HStack
      spacing={["6", "8"]}
      mx={["6", "8"]}
      pr={["6", "8"]}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={AiFillGithub} fontSize="3xl" />
      {/* <Icon as={RiUserAddLine} fontSize="20" /> */}
    </HStack>
  )
}