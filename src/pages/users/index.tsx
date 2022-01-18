import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";
import { RiAddLine } from "react-icons/ri";
import { useQuery } from "react-query";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const { data, isLoading, error } = useQuery('users', async () => {
    const response = await fetch('http://localhost:3000/api/users')
    const data = await response.json()

    return data
  })


  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justifyContent="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar Novo Usuário
              </Button>
            </Link>
          </Flex>

          { isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuários</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th px={["4", "4", "6"]} color="gray.300" width="8">
                    <Checkbox colorScheme="pink" />
                  </Th>
                  <Th>Usuário</Th>
                  { isWideVersion && <Th>Data de Cadastro</Th> }
                  <Th width="8"></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Bruno Bastos</Text>
                      <Text fontSize="sm" coloe="gray.300">bastosduartebruno@gmail.com</Text>
                    </Box>
                  </Td>
                  { isWideVersion && <Td>15 de janeiro de 2022</Td> }
                  <Td>

                  </Td>
                </Tr>
                <Tr>
                  <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Bruno Bastos</Text>
                      <Text fontSize="sm" coloe="gray.300">bastosduartebruno@gmail.com</Text>
                    </Box>
                  </Td>
                  { isWideVersion && <Td>15 de janeiro de 2022</Td>}
                  <Td>
                
                  </Td>
                </Tr>
                <Tr>
                  <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Bruno Bastos</Text>
                      <Text fontSize="sm" coloe="gray.300">bastosduartebruno@gmail.com</Text>
                    </Box>
                  </Td>
                  { isWideVersion && <Td>15 de janeiro de 2022</Td>}
                  <Td>
              
                  </Td>
                </Tr>
              </Tbody>
            </Table>

            <Pagination />
           </>
          ) }
        </Box>
      </Flex>
    </Box>
  );
}