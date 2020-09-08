import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';

const useStyles = makeStyles({
    root: {
        color: '#fff',
        maxWidth: 600,
        background: 'linear-gradient(45deg, #757575 30%, #9e9e9e 90%)',
        border: '1px solid #01579b',
        boxShadow: '0 3px 5px 2px rgba(96, 125, 139, .3)',
    },
    heading_6: {
        '@media (max-width:414px)': {
            fontSize: '4.5vw'
        }
    }

});

export default function PieChartCard() {
    const classes = useStyles();
    const responseData = [];
    const [covidData, setCovidData] = useState();

    useEffect(() => {
        fetchCovidData();
        setInterval(
            () => fetchCovidData(),
            600000
        );
    },[]);


    async function fetchCovidData() {
        const response = await fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "6e3b4b3136mshf20c1a4a93f6f75p1038b3jsn86130b77b803"
            }
        })
        const data = await response.json();
        responseData.push({
            name: 'Deaths', 
            value: parseInt(data.total_deaths.replace(/,/g, '')), 
            fill: '#ff1744'
        });
        responseData.push({
            name: 'Recovered', 
            value: parseInt(data.total_recovered.replace(/,/g, '')), 
            fill: '#8bc34a'
        });
        responseData.push({
            name: 'Confirmed', 
            value: parseInt(data.total_cases.replace(/,/g, '')), 
            fill: '#2196f3'
        });
        // responseData.push({
        //     name: 'New Cases', 
        //     value: parseInt(data.new_cases.replace(/,/g, '')), 
        //     fill: '#f06292'
        // });
        setCovidData(responseData);
    }

    return (
        <Container fixed>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h6" className={classes.heading_6}>
                        Global Report
                </Typography>
                    {!covidData ? 'Loading...' : ''}
                    <PieChart width={400} height={300}>
                        <Pie 
                        dataKey="value" 
                        nameKey="name"
                        isAnimationActive={true} 
                        data={covidData} 
                        cx={250} 
                        cy={140}
                        outerRadius={100} 
                        innerRadius={60} 
                        fill="#8884d8" 
                        legendType='circle'
                        label />
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </CardContent>
            </Card>
        </Container>
    );
}
