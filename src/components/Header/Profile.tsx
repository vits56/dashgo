import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align='center'>
    <Box>
      <Text mr='4' textAlign='right'>
        Bruno B Duarte
      </Text>
      <Text color='gray.300' fontSize='small'>
        bastosduartebruno@gmail.com
      </Text>
    </Box>

    <Avatar ml='4' size='md' name='Bruno Bastos' src='https://github.com/vits56.png' />

  </Flex>
  );
}