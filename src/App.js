import React from 'react';
import './App.css';
import MenuAppBar from './components/MenuAppBar/MenuAppBar';
import TotalDeathsCard from './components/TotalDeathsCard/TotalDeathsCard';
import { Grid, Container} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import TotalRecoveredCard from './components/TotalRecoveredCard/TotalRecoveredCard';
import ConfirmedCasesCard from './components/ConfirmedCasesCard/ConfirmedCasesCard';
import TimeWeathercard from './components/TimeWeather/TimeWeatherCard';
import StackedBarGraph from './components/StackedBarGraph/StackedBarGraph';
import PieChartCard from './components/PieChart/PieChartCard';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <MenuAppBar />
        <Container fixed>
          <Grid container spacing={1} direction="row" justify="flex-start" alignItems="center">
            <Grid item xs={12} lg={6}>
              <TimeWeathercard />
            </Grid>
            <Grid item xs={4} lg={2}>
              <TotalDeathsCard />
            </Grid>
            <Grid item xs={4} lg={2}>
              <TotalRecoveredCard />
            </Grid>
            <Grid item xs={4} lg={2}>
              <ConfirmedCasesCard />
            </Grid>
          </Grid>
          <Grid container spacing={1} direction="row" justify="flex-start" alignItems="center">
            <Grid item xs={12} lg={6}>
              <PieChartCard />
            </Grid>
            <Grid item xs={12} lg={6}>
              <StackedBarGraph />
            </Grid>
          </Grid>
          <Grid container spacing={2} direction="row" justify="flex-start" alignItems="center">
            <Grid item xs={12} lg={12} style={{fontSize:10, marginTop: 30, color: '#fff'}}>
            <span role="img" aria-label="mobile">📱</span>Best Viewed in Desktop and Tablet. <span role="img" aria-label="warning">❗</span>Use Landscape mode on Android/iphone<br></br>
            <span role="img" aria-label="hacker-boy">👩‍💻</span>Designed & Developed by Suraj Kamdi :: I<span role="img" aria-label="heart">🧡</span>Open-Source :: (Real-Time updates from Rapid API)
            <span role="img" aria-label="warning">❗</span> Note: This dashboard is only for informational purpose. Please verify the data from government official resource before publishing/posting.
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
}
export default App;
