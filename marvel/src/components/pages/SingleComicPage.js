
import './singleComic.sass';
import xMen from '../../resources/img/x-men.png';
import { useParams, Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';
import useMarvelService from '../../services/MarvelServices';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
const SingleComicPage = () => {
    const {comicId} = useParams();
    const [comic, setComic] = useState(null)
    const service = useMarvelService();
    const navigate = useNavigate();
    
    useEffect(() => {
        getChar();
    },[comicId])

    const handleClick = () => {
            navigate("/");
        }
    const getChar = () => {
        service
        .getComics(comicId)
        .then(res => {
            onLoaded(res)
        })
        .catch(() => service.error)  
    }
    const onLoaded = (res) => {
        setComic(res);
    }
    const View = (comic) => {
        const {thumbnail, title, description, pageCount, price} = comic;
        return(
            <div className="single-comic" onClick={handleClick}>
                <img src={thumbnail} alt="x-men" className="single-comic__img"/>
                <div className="single-comic__info">
                    <h2 className="single-comic__name">{title}</h2>
                    <p className="single-comic__descr">{description}</p>
                    <p className="single-comic__descr">{pageCount}</p>
                    <p className="single-comic__descr">Language: en-us</p>
                    <div className="single-comic__price">{price}</div>
                </div>
                <Link to = '/comics' className="single-comic__back">Back to all</Link>
            </div>
        )
    }
    return (
        service.error ? <ErrorMessage/> : comic ? View(comic) :<Spinner/>
    )
}

export default SingleComicPage;