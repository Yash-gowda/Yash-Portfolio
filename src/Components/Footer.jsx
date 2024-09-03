import React from "react";
import  {Text, Flex } from '@chakra-ui/react';

export default function Footer() {
  return (
      <Flex  color="white" h={150}  justifyContent={'Center'}>
        <Flex justify="space-between" align="center">
          <Text>&copy; {new Date().getFullYear()} Yashwanth Gowda B C.</Text>
        </Flex>
      </Flex>
  )
}