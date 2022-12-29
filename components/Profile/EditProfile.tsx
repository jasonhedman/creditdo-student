import { Text, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure, VStack, Avatar, Stack, FormControl, FormLabel } from '@chakra-ui/react'
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
  } from 'formik';
import React, { useState } from 'react'

interface Props {
    profilePicture: string
    firstName: string
    lastName: string
}

const EditProfile: React.FC<Props> = ({profilePicture, firstName, lastName}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [first, setFirst] = useState(firstName)
    const [last, setLast] = useState(lastName)
    const [profile, setProfile] = useState(profilePicture)

    return (
        <VStack>
            <Button
                colorScheme='whiteAlpha'
                fontSize='lg'
                onClick={onOpen}
            >
                Edit Profile
            </Button>
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
                            <Input placeholder={first}/>
                            <br />
                            <br />
                            <Text>Last Name</Text>
                            <Input placeholder={last}/>
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

export default EditProfile