import './App.css';
import Row from "./Components/Row";
import requests from './Components/requests';
import Banner from './Components/Banner';
import Nav from './Components/Nav';

function App() {
    return (
         <div className = "App" >
        <Nav />
        <Banner />
        <Row title = "netfilix orginals"
        fetchUrl = { requests.fetchNetflixOriginals }
        isLargeRow />
        <Row title = "netfilix trending"
        fetchUrl = { requests.fetchTrending }/>
        <Row title = "top rated"
        fetchUrl = { requests.fetchTopRatedMovies }/>
        <Row title = "Action movie"
        fetchUrl = { requests.fetchActionMovies } />
        <Row title = "comedy movie"
        fetchUrl = { requests.fetchComedyMovies }/>
         <Row title = "Horror movie"
        fetchUrl = { requests.fetchHorrorMovies }/>
         <Row title = "Romance movie"
        fetchUrl = { requests.fetchRomanceMovies }/>
         < Row title = "Documentaries"
        fetchUrl = { requests.fetchDocumentaries } />

        </div>
    );
}

export default App;
