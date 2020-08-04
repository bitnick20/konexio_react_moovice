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
        .then(data => {
            console.log("cmp/movie/Card#componentDidMount :", data.results); 
            // j'affecte la valeur de la clé results qui se trouve dans l'objet data à ma const movies
            // et ainsi éviter de devoir l'indiquer à nouveau dans le setState plus bas dans ce bloc
            const movies = data.results;
            // je dois à présent modifier le state du constructeur
            // comme la variable est égale à la clé , on peut ne pas mettre la valeur
            this.setState ({ 
               movies
            })
        })
    }


    render () {
        // je dois créer une condition qui doit vérifier ce qu'il y a dans l'Array et s'il n'y a rien, Loading... 
        if(this.state.movies.length === 0) {
            return (
            <div>
                <p>Loading...</p>
            </div>
            );
        } 
         
        const {movies, poster_path} = this.state;
        return (
            <div>
                <h2>Popular</h2>
            <div>
                    
                </div>
                    {movies.map((movie) => {
                        console.log("Test :", movie)
                        return (
                            <div key={movie.id} className="row">
                                <div className="col-12">
                                </div>
                                <img src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path}/>
                                {/* <h3>
                                    {movie.title} 
                                </h3>
                                <p>
                                    {movie.overview}
                                </p> */}
                                <Card 
                                movie={movie}
                                // title={movie.title}
                                // posterPath={movie.poster_path}
                                />
                            </div>
                        );
                    })}
            </div>          
        );
    }
}

export default Popular;
