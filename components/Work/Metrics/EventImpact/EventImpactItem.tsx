import { Box, Grid, GridItem, HStack, Icon, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import { RiMoneyDollarCircleLine, RiScales2Fill } from 'react-icons/ri';
import { GiMeal } from 'react-icons/gi'
import { FaShoppingCart } from 'react-icons/fa'
import ImpactCard from './ImpactCard';

interface Props {
    name: String;
    pounds: number;
    money: number;
    meals: number;
    avgCost: number;
    selected: boolean;
}
    

const EventImpactItem: React.FC<Props> = ({ name, pounds, money, meals, avgCost, selected }) => {

    const cardData = [
        {
            icon: RiScales2Fill,
            bg: 'purple.500',
            desription: 'Collected',
            amount: pounds,
            unit: 'LBS'
        },
        {
            icon: RiMoneyDollarCircleLine,
            bg: 'green.500',
            desription: 'Valued',
            amount: (money / 1000),
            unit: 'USD'
        },
        {
            icon: GiMeal,
            bg: 'yellow.500',
            desription: 'Equivalent to',
            amount: meals,
            unit: 'Meals'
        },
        {
            icon: FaShoppingCart,
            bg: 'pink.500',
            desription: 'Avg. cost / meal',
            amount: avgCost,
            unit: 'USD/Meal'
        }
    ]

    return (
        <SimpleGrid
            columns={2}
            spacing={2}
        >
            {
                cardData.map((card, index) => (
                    <ImpactCard
                        key={index}
                        {...card}
                    />
                ))
            }
        </SimpleGrid>
    )
}

export default EventImpactItem