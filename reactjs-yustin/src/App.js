import logo from './logo.svg';
import './App.css';
import PortfolioItemList from "./components/PortfolioItemList";
import MyComponent from "./components/PortfolioFeaturedItem";
import Grid from '@mui/material/Grid';


function App() {
  return (
    <div className="App">
      <main>
          <MyComponent/>
          <Grid container spacing={2}>
            <PortfolioItemList/>
          </Grid>
      </main>
    </div>
  );
}

export default App;
