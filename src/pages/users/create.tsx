import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm, UseFormHandleSubmit } from 'react-hook-form';

import { Input } from '../../components/Form/Input';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

interface User{
    name:string;
    email:string;
    password:string;
    password_confirmation:string
}

const CreateUserSchema = yup.object().shape({
    name: yup.string().required('name is required'),
    email: yup.string().email().required('e-mail is required'),
    password: yup.string().min(6,'min 6 digits'),
    password_confirmation: yup.string().oneOf([
        null, yup.ref('password')
    ], 'As senhas precisam ser iguais')
})

export default function UserList() {
    const {register, handleSubmit, formState:{ errors }} = useForm({
        resolver: yupResolver(CreateUserSchema)
    })

    const createUserSubmit: SubmitHandler<User> = (data) =>{
        console.log(data)
    }

    return (
        <Box>
            <Header />

            <Flex
                width="100%"
                my="6"
                maxWidth={1480}
                mx="auto"
                px="6"
            >
                <Sidebar /> 

                <Box
                    flex="1"
                    borderRadius={8}
                    bg="gray.800"
                    p={["6","8"]}
                    as="form"
                    onSubmit={handleSubmit(createUserSubmit)}
                >
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

                    <Divider my="6" borderColor="gray.700"/>

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                            <Input name="name" type="text" label="Nome completo" error={errors.name} {...register("name")}/>
                            <Input name="email" type="email" label="E-mail" error={errors.email} {...register("email")}/>
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                            <Input name="password" type="password" label="Password" error={errors.password} {...register("password")}/>
                            <Input name="password_confirmation" type="password" label="Confirmação da senha" error={errors.password_confirmation} {...register("password_confirmation")}/>
                        </SimpleGrid>
                    </VStack>
                    
                    <Flex
                        mt="8"
                        justify="flex-end"
                    >
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button type="submit" colorScheme="pink" >Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}