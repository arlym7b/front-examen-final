import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { cardStyles } from './styles';

const BasicCard = ({content }) => {
    
    return (
        <Card sx={cardStyles}>
           
            <CardContent>
                {content}
            </CardContent>
        </Card>
    )
};

export default BasicCard;