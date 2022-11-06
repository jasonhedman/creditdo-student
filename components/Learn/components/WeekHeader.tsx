import React from 'react'
import { Stack } from '@chakra-ui/react'

interface Props {
    weekNumber: number;
}

const WeekHeader : React.FC<Props> = ({ weekNumber }) => {
  return (
    <Stack
        direction="row"
        alignItems="center"
        borderRadius={1}
        px={1.5}
        py={0.25}
        sx={{
            backgroundColor: '#f6f6f6'
        }}
    >
        Week {weekNumber}
    </Stack>
  )
}

export default WeekHeader