import React from 'react'

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import Events from './Events'
import Metrics from './Metrics'

const Work : React.FC = () => {
  return (
    <Tabs isFitted>
        <TabList>
            <Tab>Events</Tab>
            <Tab>Metrics</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
                <Events />
            </TabPanel>
            <TabPanel>
                <Metrics />
            </TabPanel>
        </TabPanels>
    </Tabs>
  )
}

export default Work