import React, { useState } from 'react'
import { Image, VStack, Text, Button, IconButton, Avatar, useDisclosure, DrawerFooter, DrawerContent, Drawer, DrawerBody, FormControl, FormLabel, Input, Stack, DrawerOverlay, DrawerCloseButton, DrawerHeader } from '@chakra-ui/react'

interface Props {
    profilePicture: string
    firstName: string
    lastName: string
    teacher: string
}

const Header: React.FC<Props> = ({ profilePicture, firstName, lastName, teacher }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [first, setFirst] = useState(firstName)
    const [last, setLast] = useState(lastName)
    const [profile, setProfile] = useState(profilePicture)

    return (
        <VStack
            spacing={0}
        >
            <br />
            <br />
            <IconButton aria-label='Edit Profile' colorScheme='orange.500' onClick={onOpen}>
                <Avatar
                    name={first + ' ' + last}
                    src={profile}
                    h='120px'
                    w='120px'
                    border='4px white solid'
                />
            </IconButton>
            <br />
            <br />
            <Text
                fontSize='2xl'
                fontWeight='bold'
                color='white'
            >
                {first} {last}
            </Text>
            <Text
                fontSize='lg'
                color='white'
                fontWeight='semibold'
            >
                {teacher}{'&apos;'} Class
            </Text>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                size='md'
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Edit your Profile</DrawerHeader>

                    <DrawerBody>
                        <br />
                        <Stack
                            alignItems='center'
                        >
                            <Avatar
                                name={first + ' ' + last}
                                src={profile}
                                size='xl'
                            />
                            <br />
                            <Button
                                onClick={() => setProfile(`https://api.multiavatar.com/${Math.random().toString(8).substring(2)}.png`)}
                            >
                                Randomize
                            </Button>
                        </Stack>
                        <br />
                        <FormControl>
                            <FormLabel>First Name</FormLabel>
                            <Input placeholder={first} />
                            <br />
                            <br />
                            <Text>Last Name</Text>
                            <Input placeholder={last} />
                        </FormControl>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </VStack>
    )
}

export default Header