import React from 'react';


class Card extends React.Component {
    render () {
        return (
            <div>
                {this.props.movie.title}
                {this.props.movie.poster_path}
                {this.props.movie.overview}
            </div>
        );
    }
}

export default Card;
