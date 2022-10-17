import React from 'react'

import Link from 'next/link';

import { HStack, Icon, Text, VStack } from '@chakra-ui/react'

import { IconType } from 'react-icons';
import { FaCog, FaLock, FaPhoneAlt, FaInfoCircle, FaSignOutAlt } from 'react-icons/fa';

const actionsData : ActionProps[] = [
    {
        href: '/profile',
        icon: FaCog,
        text: 'Settings'
    },
    {
        href: '/profile',
        icon: FaLock,
        text: 'Privacy Policy'
    },
    {
        href: '/profile',
        icon: FaPhoneAlt,
        text: 'Get Support'
    },
    {
        href: '/profile',
        icon: FaInfoCircle,
        text: 'About'
    },
    {
        href: '/profile',
        icon: FaSignOutAlt,
        text: 'Log Out'
    }
]

const Actions : React.FC = () => {
  return (
    <VStack
        w='100%'
        px={4}
        spacing={0}
    >
        {
            actionsData.map((action, index) => (
                <Action 
                    key={index}
                    {...action}
                />
            ))
        }
    </VStack>
  )
}

interface ActionProps {
    href: string;
    text: string;
    icon: IconType;
}

const Action : React.FC<ActionProps> = ({ href, text, icon }) => {
    return (
        <Link
            href={href}
        >
            <HStack
                w='100%'
                borderBottomColor='whiteAlpha.500'
                borderBottomWidth='1px'
                spacing={8}
                py={6}
            >
                <Icon 
                    as={icon}
                    color='white'
                    h={6}
                    w={6}
                />
                <Text
                    fontSize='lg'
                    color='white'
                    fontWeight='semibold'
                >
                    {text}
                </Text>
            </HStack>
        </Link>
    )
}

export default Actions