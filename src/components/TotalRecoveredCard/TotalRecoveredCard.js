import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import currentDate from '../CurrentDate';

const useStyles = makeStyles({
    root: {
        color: '#fff',
        maxWidth: 300,
        background: 'linear-gradient(45deg, #8bc34a 30%, #c5e1a5 90%)',
        //backgroundColor: '#00c853',
        border: '1px solid #64dd17',
        boxShadow: '0 3px 5px 2px rgba(96, 125, 139, .3)',
    },
    title: {
        fontSize: 14,
        color: '#fff',
        '@media (max-width:414px)': {
            fontSize: '0.4rem'
        }
    },
    heading_4: {
        '@media (max-width:414px)': {
            fontSize: '4.2vw'
        }
    }
});

export default function TotalRecoveredCard() {
    const classes = useStyles();
    const [totalRecovered, setTotalRecovered] = useState();

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
        setTotalRecovered(data.response[0].cases.recovered);
    }
    return (
        <Container fixed>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <AccessibilityNewIcon />
                    <Typography variant="h5" className={classes.title} gutterBottom>
                        Recovered
                 </Typography>
                    <Typography variant="h4" className={classes.heading_4}>
                        {totalRecovered || "..."}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}
