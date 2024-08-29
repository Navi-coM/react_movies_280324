function Movie (props) {

    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props
    
    return (
        <div className="card movie" id={id}>
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" alt="poster_movie" src={poster}/>
            </div>
            <div className="card-content">
                <span className="card-title activator">{title}<i className="material-icons right"></i></span>
                <p className="card-description"><span>{year}</span><span className="right-side">{type}</span></p>
            </div>
        </div>
    )
}

export { Movie }