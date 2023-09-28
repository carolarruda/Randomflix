import classes from './Main.module.scss'
import MovieList from './MovieList/MovieList'

const Main = () => {
    return (
        <div className={classes.container}>
            <MovieList/>
        </div>
    )
}

export default Main