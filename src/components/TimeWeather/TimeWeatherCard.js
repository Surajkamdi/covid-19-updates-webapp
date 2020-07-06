import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Container, Typography, Divider } from '@material-ui/core';
import Clock from 'react-clock';
import WbSunnyTwoToneIcon from '@material-ui/icons/WbSunnyTwoTone';
import NightsStayTwoToneIcon from '@material-ui/icons/NightsStayTwoTone';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        background: 'linear-gradient(45deg, #4fc3f7 30%, #e1f5fe 90%)',
        borderRadius: 3,
        border: 0,
        maxWidth: 600,
        padding: '0px 30px 0px 50px',
        boxShadow: '0 3px 5px 2px rgba(96, 125, 139, .3)',
        '@media (max-width:558px)': {
            padding: '0px 0px'
        }
    },
    box: {
        backgroundColor: "#fff",
        borderRadius: 50
    },
    currentTime: {
        color: '#fff',
        marginTop: 20,
        marginBottom: 5,
        '@media (max-width:558px)': {
            fontSize: 17
        }
    },
    currentDateStamp: {
        color: '#fff',
        marginTop: 5,
        '@media (max-width:558px)': {
            fontSize: 10
        }
    },
    sunnyIcon: {
        color: 'yellow',
        marginTop: 24,
        fontSize: '5vw',
        '@media (max-width:558px)': {
            fontSize: '7vw'
        }
    },
    nightIcon: {
        color: '#fff',
        marginTop: 24,
        fontSize: '5vw',
        '@media (max-width:558px)': {
            fontSize: '7vw'
        }
    }
});

function TimeWeatherCard() {
    const [state, setState] = useState([
        { date: new Date() }
    ]);
    const [currentTime, setCurrentTime] = useState();
    const [currentDate, setCurrentDate] = useState();
    const [dayTime, setDayTime] = useState('false');

    useEffect(() => {
        setInterval(
            () => setState({ date: new Date() },
                getCurrentTime()),
            1000
        );
        getCurrentTime();
        getCurrentDate();
        checkWeatherIconTime();
    }, []);

    const classes = useStyles();

    function getCurrentTime() {
        var time = new Date();
        setCurrentTime(time.toLocaleString('en-US',
            {
                hour: '2-digit',
                minute: 'numeric',
                hour12: true
            })
        );
    }

    function getCurrentDate() {
        var time = new Date();
        var day = time.toLocaleDateString("en-us", {
            weekday: 'long'
        })
        var date = time.toLocaleDateString("en-us", {
            day: '2-digit'
        })
        var monthYear = time.toLocaleDateString("en-us", {
            month: 'long',
            year: 'numeric'
        })
        setCurrentDate(day + ", " + date + " " + monthYear);
    }

    function checkWeatherIconTime() {
        var currentDateTime = new Date();
        var startTimeDate = new Date();
        startTimeDate.setHours(6);
        var endTimeDate = new Date();
        endTimeDate.setHours(18, 30);
        if (currentDateTime > startTimeDate && currentDateTime < endTimeDate) {
            setDayTime('true');
        }
    }

    let weatherIcon;
    if (dayTime === 'true') {
        weatherIcon = <WbSunnyTwoToneIcon className={classes.sunnyIcon} />;
    } else {
        weatherIcon = <NightsStayTwoToneIcon className={classes.nightIcon} />;
    }
    return (
        <Container fixed>
            <Card className={classes.root} variant="elevation">
                <CardContent>
                    {weatherIcon}
                </CardContent>
                <CardContent>
                    <Typography variant='h4' className={classes.currentTime}>
                        {currentTime}
                    </Typography>
                    <Divider variant="middle" />
                    <Typography className={classes.currentDateStamp}>
                        {currentDate}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Clock
                        value={state.date}
                        size={100}
                        renderNumbers={true}
                        hourMarksWidth={3}
                        className={classes.box}
                    />
                </CardContent>
            </Card>
        </Container>
    );

}
export default TimeWeatherCard;