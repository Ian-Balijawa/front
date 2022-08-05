import {Typography, Stack, Box, Grid} from '@mui/material'
import * as React from 'react'

export default function PackagesAndPricingContainer() {
    return (
        <React.Fragment>
            <Grid
                container
                spacing={2}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    boxShadow: '-1px 1px 7px 5px #eee;',
                    borderTop: 'none',
                    padding: '2rem',
                    borderRadius: '4px',
                    margin: 'auto',
                }}
            >
                <Stack
                    direction="column"
                    sx={{width: '45%', marginRight: '4em'}}
                >
                    <Typography paragraph>Package Information</Typography>
                    <PackageInformationTableHeader />
                    <PackagesSection />
                    <ConversionAndWaste />
                </Stack>
                <Stack direction="column" sx={{width: '45%'}}>
                    <Typography paragraph>Suppliers and Pricing</Typography>
                    <SuppliersAndPricingTableHeader />
                    <SuppliersAndPricingSection />
                </Stack>
            </Grid>
            <IngredientsContainerForPackagesAndPricing />
        </React.Fragment>
    )
}

const PackageInformationTableHeader = () => {
    return (
        <Stack
            direction="row"
            spacing={4}
            sx={{
                borderBottom: '2px solid #000000',
                background: '#FFE5DC',
                margin: 'auto',
            }}
        >
            <Typography>Content</Typography>
            <Typography>Supplier</Typography>
            <Typography>Product Name</Typography>
            <Typography>Price</Typography>
            <Typography>Price/ Unit</Typography>
            <Typography>Edit</Typography>
        </Stack>
    )
}

const SuppliersAndPricingTableHeader = () => {
    return (
        <Stack
            direction="row"
            spacing={4}
            sx={{
                borderBottom: '2px solid #000000',
                background: '#FFE5DC',
                margin: '0 auto',
                marginTop: '-0.1em',
            }}
        >
            <Typography>Package Type</Typography>
            <Typography>Content</Typography>
            <Typography>Active</Typography>
            <Typography>Piece</Typography>
            <Typography>Avg Price</Typography>
            <Typography>UPC/EAN</Typography>
        </Stack>
    )
}

const PackagesSection = () => {
    const packagesList = []
    return (
        <Stack
            direction="columns"
            sx={{
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
                borderBottom: '1px solid #000000',
                padding: '5px',
                width: '28em',
            }}
        >
            {packagesList.length === 0 && (
                <Typography sx={{margin: 'auto'}}>
                    No Packages linked to this Ingredient
                </Typography>
            )}
        </Stack>
    )
}
const SuppliersAndPricingSection = () => {
    const suppliersAndPricingList = []
    return (
        <Stack
            direction="columns"
            sx={{
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
                borderBottom: '1px solid #000000',
                padding: '5px',
                width: '28em',
            }}
        >
            {suppliersAndPricingList.length === 0 && (
                <Typography sx={{margin: 'auto'}}>
                    No Supplier Packages linked to this Ingredient
                </Typography>
            )}
        </Stack>
    )
}

const ConversionAndWaste = () => {
    return (
        <Box sx={{width: '29.3em'}}>
            <Typography
                sx={{
                    marginTop: '1em',
                }}
            >
                Conversions & Waste
            </Typography>
            <hr style={{width: '28em'}} />
            <Stack
                direction="columns"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    alignContent: 'center',
                    padding: '5px',
                }}
            >
                <Stack
                    direction="row"
                    spacing={4}
                    sx={{justifyContent: 'space-between', width: '100%'}}
                >
                    <Stack spacing={2}>
                        <Typography>Change Ratio Between Kg/L</Typography>
                        <Typography>1 KG = L</Typography>
                    </Stack>
                    <Stack spacing={2}>
                        <Typography>Waste Percentage</Typography>
                        <Typography>1 KG = </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}

const IngredientsContainerForPackagesAndPricing = () => {
    const ingredientsAndSubRecipesList = [
        {
            ingredientAndSubRecipes: 'Mayonnaise',
            supplier: 'Nic&Nico Supplies',
            netQty: '60 ml',
            grossQty: '60 ml',
            waste: '0%',
        },
        {
            ingredientAndSubRecipes: 'Lemon Juice',
            supplier: 'Juices by Nic',
            netQty: '6 ml',
            grossQty: '6 ml',
            waste: '0%',
        },
        {
            ingredientAndSubRecipes: 'Lemon Zest',
            supplier: 'Nic&Nico Supplies',
            netQty: '4 g',
            grossQty: '4 g',
            waste: '0%',
        },
    ]

    return (
        <Stack
            direction="column"
            sx={{
                marginTop: '2rem',
                boxShadow: '-1px 1px 7px 5px #eee;',
                borderTop: 'none',
                padding: '2rem',
                borderRadius: '4px',
            }}
        >
            <IngredientsContainerForPackagesAndPricingHeader />
            {ingredientsAndSubRecipesList.map((ingredient, index) => (
                <IngredientsContainerForPackagesAndPricingRow
                    key={index}
                    ingredientAndSubRecipes={ingredient.ingredientAndSubRecipes}
                    supplier={ingredient.supplier}
                    netQty={ingredient.netQty}
                    grossQty={ingredient.grossQty}
                    waste={ingredient.waste}
                />
            ))}
        </Stack>
    )
}

const IngredientsContainerForPackagesAndPricingHeader = () => {
    return (
        <Stack
            direction="row"
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: '1px solid #000000',
                background: '#FFE5DC',
                fontWeight: 'bold',
                alignItems: 'center',
                alignContent: 'center',
                textAlign: 'left',
                padding: '0 1em',
                marginBottom: '-3px',
            }}
        >
            <Typography paragraph>Ingredient and Sub Recipes</Typography>
            <Typography paragraph>Supplier</Typography>
            <Typography paragraph>Net Qty.</Typography>
            <Typography paragraph>Gross Qty</Typography>
            <Typography paragraph>Waste %</Typography>
        </Stack>
    )
}

const IngredientsContainerForPackagesAndPricingRow = props => {
    const {ingredientAndSubRecipes, supplier, netQty, grossQty, waste} = props

    return (
        <Stack
            direction="row"
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: '0.5px solid rgba(122, 122, 122, 0.8)',
                '&:nth-child(odd)': {
                    background: 'rgba(227, 227, 227, 0.6)',
                },
                textAlign: 'left',
            }}
        >
            <Typography paragraph>{ingredientAndSubRecipes}</Typography>
            <Typography paragraph>{supplier}</Typography>
            <Typography paragraph>{netQty}</Typography>
            <Typography paragraph>{grossQty}</Typography>
            <Typography paragraph>{waste}</Typography>
        </Stack>
    )
}
