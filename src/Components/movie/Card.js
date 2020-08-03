import React from 'react';
import dvd from '../../placeholder.png';


class Card extends React.Component {
    constructor (props) {   
        super (props);

        this.state = {
            poster_path: '',
            title: '',
            overview: ''
        }
    }

    componentDidMount () {
        const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4761f779a2abf8d89a78b9b94bfde5ab'
        console.log(url);

        fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log("cmp/movie/Card#componentDidMount :", json);
            // const poster_path = json.poster_path;
            // const title = json.title;
            // const overview = json.overview;

            this.setState ({
                poster_path: json.poster_path,
                title: json.title,
                overview: json.overview
            })

        })

    }


    render () {
        const { poster_path, title, overview} = this.state;
    if (poster_path === null) {
      return (
        <img src='../../placeholder.png' alt="dvd speciment" className="img-fluid"/>
      );
    }
        return (
            <div>
                <div>
                    <img src={this.state.poster_path}/>
                    {/* {poster_path} {title} {overview} {dvd}  */}
                </div>
            </div>
        );
    }
}

export default Card;