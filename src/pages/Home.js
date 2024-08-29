import React from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { InputSearch } from "../components/InputSearch";

const API_KEY = process.env.REACT_APP_API_KEY;


class Home extends React.Component {

    state = {  
        movies: [],
        loading: true,
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }


    searchMovies = (str, type = 'all') => {
        this.setState({loading: true});
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading:false}))
    }

    render () {

        const { movies, loading } = this.state;
        return (
            <main className="container content">
                <InputSearch searchMovies={this.searchMovies}/>
                <h4>Movies List</h4>
                {
                    loading ? <Preloader /> : (<Movies movies={movies}/>)
                }
               
            </main>
        )
    }
    
}

export { Home };