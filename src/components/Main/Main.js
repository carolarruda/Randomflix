import classes from './Main.module.scss'
import MovieList from './MovieList/MovieList'

const Main = ({search, setSearch}) => {
    return (
        <div className={classes.container}>
            <MovieList search={search} setSearch={setSearch}/>
        </div>
    )
}

export default Main