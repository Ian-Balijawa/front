import * as React from 'react'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
interface CardProps {
    title?: string
    icon?: React.ReactNode
}
const GPInventoryCard: React.FC<CardProps> = ({title, icon}: CardProps) => {
    return (
        <Card
            variant="outlined"
            sx={{
                boxShadow: '-4px 4px 10px 1px #eee',

                width: 176,
                height: 150,
                display: 'flex',
            }}
        >
            <CardActionArea>
                <CardContent
                    sx={{
                        display: 'grid',
                        justifyItems: 'center',
                        padding: '0px',
                        justifyContent: 'center',
                    }}
                >
                    {' '}
                    {icon}
                    <Box sx={{display: 'grid', alignContent: 'center'}}>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: '1.0rem',
                                display: 'grid',
                                textAlign: 'center',
                                whiteSpace: 'normal',
                            }}
                            pt="20px"
                            color="#444"
                        >
                            {title}
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
export default GPInventoryCard
