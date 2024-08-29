import { Movie } from './Movie';

function Movies(props) {
    const {movies = []} = props;

    return (
        <div className = 'movies'>
            {
              movies.length ? movies.map(movie => (<Movie key={movie.imdbID} {...movie}/>)) :<h3>Movies Not Found</h3>
        }
        </div>
    )
}

export { Movies } 



// умова ? якщо тру : якщо фолс
//  0  => false