import { Container } from '@chakra-ui/react'
import React from 'react'

interface Props {
    children: React.ReactNode
}

const PageContainer : React.FC<Props> = ({ children }) => {
  return (
    <Container
      flex={1}
      display='flex'
      flexDirection='column'
    >
        {children}
    </Container>
  )
}

export default PageContainer