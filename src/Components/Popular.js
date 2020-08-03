import React from 'react';
import Card from './movie/Card';


class Popular extends React.Component {
    constructor (props) {
        super (props);
        // je déclare mon state {objet} avec la clé movies et un tableau [] en valeur
        this.state = {
            movies: []
        }
    }

    componentDidMount () {
        // j'affecte l'url à la const url pour pouvoir faire un console.log()
        const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4761f779a2abf8d89a78b9b94bfde5ab'
        console.log(url);
        // je fais un fetch pour récuperer les donnés du json
        fetch(url)
        .then(res => res.json())
        .then(movies => {
            console.log("cmp/movie/Card#componentDidMount :", movies.results);
            // je dois à présent modifier le state du constructeur
            this.setState ({
               movies: movies.results
            })

        })

    }



    render () {
        const {movies, poster_path} = this.state;
        return (
            <div>
                <ul>
                    {movies.map((movie) => {
                        return <li key={movie.id}><img src={"https://image.tmdb.org/t/p/w300/" + poster_path} />{movie.title} {movie.overview} {movie.poster_path}</li>
                    })}
                </ul>
                Popular
                <Card />
            </div>
        );
    }
}

export default Popular;
