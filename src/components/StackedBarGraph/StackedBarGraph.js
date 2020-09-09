import React, { useEffect, useState } from 'react';
import { makeStyles, Container, Typography, Card, CardContent } from '@material-ui/core';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';
import currentDate from '../CurrentDate';

const useStyles = makeStyles({
    root: {
        color: '#fff',
        background: 'linear-gradient(45deg, #757575 30%, #9e9e9e 90%)',
        border: '1px solid #01579b',
        boxShadow: '0 3px 5px 2px rgba(96, 125, 139, .3)',
        maxWidth: 600
    }
});

/**
 * Stacked Bar Graph function.
 */
function StackedBarGraph() {
    const responseData = [];
    const classes = useStyles();
    const [covidData, setCovidData] = useState();

    useEffect(() => {
        setInterval(
            () => fetchCovidData(),
            600000);
        fetchCovidData();
    }, []);

    async function fetchCovidData() {
        var response;
        var data;
        response = await fetch("https://covid-193.p.rapidapi.com/history?day=" + currentDate + "&country=usa", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "6e3b4b3136mshf20c1a4a93f6f75p1038b3jsn86130b77b803"
            }
        });
        data = await response.json();
        responseData.push({
            Country: data.response[0].country,
            Confirmed: data.response[0].cases.total,
            Deaths: data.response[0].deaths.total,
            Recovered: data.response[0].cases.recovered
        })
        response = await fetch("https://covid-193.p.rapidapi.com/history?day=" + currentDate + "&country=brazil", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "6e3b4b3136mshf20c1a4a93f6f75p1038b3jsn86130b77b803"
            }
        });
        data = await response.json();
        responseData.push({
            Country: data.response[0].country,
            Confirmed: data.response[0].cases.total,
            Deaths: data.response[0].deaths.total,
            Recovered: data.response[0].cases.recovered
        })

        response = await fetch("https://covid-193.p.rapidapi.com/history?day=" + currentDate + "&country=russia", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "6e3b4b3136mshf20c1a4a93f6f75p1038b3jsn86130b77b803"
            }
        });
        data = await response.json();
        responseData.push({
            Country: data.response[0].country,
            Confirmed: data.response[0].cases.total,
            Deaths: data.response[0].deaths.total,
            Recovered: data.response[0].cases.recovered
        })

        response = await fetch("https://covid-193.p.rapidapi.com/history?day=" + currentDate + "&country=peru", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "6e3b4b3136mshf20c1a4a93f6f75p1038b3jsn86130b77b803"
            }
        });
        data = await response.json();
        responseData.push({
            Country: data.response[0].country,
            Confirmed: data.response[0].cases.total,
            Deaths: data.response[0].deaths.total,
            Recovered: data.response[0].cases.recovered
        })

        response = await fetch("https://covid-193.p.rapidapi.com/history?day=" + currentDate + "&country=india", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "6e3b4b3136mshf20c1a4a93f6f75p1038b3jsn86130b77b803"
            }
        });
        data = await response.json();
        responseData.push({
            Country: data.response[0].country,
            Confirmed: data.response[0].cases.total,
            Deaths: data.response[0].deaths.total,
            Recovered: data.response[0].cases.recovered
        })
        setCovidData(responseData);
    }

    return (
        <Container fixed>
            <Card className={classes.root} variant="outlined">
                <CardContent >
                    <Typography variant="h6">
                        Top countries vs India
                     </Typography>
                    {!covidData ? 'Loading...' : ''}
                    <BarChart
                        fill= "#fff"
                        width={500}
                        height={300}
                        data={covidData}
                        margin={{
                            top: 20, right: 30, left: 20, bottom: 5,
                        }}>
                        <CartesianGrid strokeDasharray="5 5" />
                        <XAxis dataKey="Country" />
                        <YAxis />
                        <Tooltip coordinate={{ x: 10, y: 5 }} />
                        <Legend />
                        <Bar dataKey="Confirmed" fill="#039be5" />
                        <Bar dataKey="Deaths" fill="#ef5350" />
                        <Bar dataKey="Recovered" fill="#9ccc65" />
                    </BarChart>
                </CardContent>
            </Card>
        </Container>
    );
}
export default StackedBarGraph;