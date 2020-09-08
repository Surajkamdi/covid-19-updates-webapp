import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Container, Typography } from '@material-ui/core';
import HotelIcon from '@material-ui/icons/Hotel';
import currentDate from '../CurrentDate';

const useStyles = makeStyles({
    root: {
        color: '#fff',
        maxWidth: 300,
        background: 'linear-gradient(45deg, #f44336 30%, #ef9a9a 90%)',
        //backgroundColor: '#f4511e',
        boxShadow: '0 3px 5px 2px rgba(96, 125, 139, .3)',
        //border: '1px solid #bf360c'
    },
    title: {
        fontSize: 15,
        color: '#fff',
        '@media (max-width:414px)': {
            fontSize: 10
        }
    },
    heading_6: {
        '@media (max-width:414px)': {
            fontSize: 15
        }
    }
});

export default function TotalDeathsCard() {
    const classes = useStyles();
    const [totalDeaths, setTotalDeaths] = useState();

    useEffect(() => {
        setInterval(
            () => fetchCovidData(),
            600000);
        fetchCovidData();
    }, []);


    async function fetchCovidData() {
        const response = await fetch("https://covid-193.p.rapidapi.com/history?day=" + currentDate + "&country=india", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "6e3b4b3136mshf20c1a4a93f6f75p1038b3jsn86130b77b803"
            }
        });
        const data = await response.json();
        setTotalDeaths(data.response[0].deaths.total);
    }

    return (
        <Container fixed>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <HotelIcon />
                    <Typography className={classes.title} gutterBottom>
                        Deaths
                    </Typography>
                    <Typography variant="h6" className={classes.heading_6}>
                        {totalDeaths || "..."}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}
