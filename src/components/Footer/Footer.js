import tmdb from '../../images/tmdb.svg'
import classes from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={classes.container}>
            <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
            <img src={tmdb} alt='tmdb' className={classes.tmdb}/>
        </div>
    )
}

export default Footer