import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
  return (
    <Flex align='center'>
      { showProfileData && (
          <Box>
            <Text mr='4' textAlign='right'>
              Bruno B Duarte
            </Text>
            <Text color='gray.300' fontSize='small'>
              bastosduartebruno@gmail.com
            </Text>
          </Box>
      )}

    <Avatar ml='4' size='md' name='Bruno Bastos' src='https://github.com/vits56.png' />

  </Flex>
  );
}