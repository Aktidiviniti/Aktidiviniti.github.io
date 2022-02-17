import { useState, useEffect } from 'react';
import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png'
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelServices';
const RandomChar = () => {
    const [char, setChar] = useState({});
    const {loading, error, getCharacter, clearError} = useMarvelService();
    useEffect(() => {
        getData();
    }, [])
    const onCharLoaded = (res) => {
        setChar(res);
    }

    const getData = () => {
        clearError();
        let id = (Math.random()*(1011400 - 1011000) + 1011000).toFixed(0)
        getCharacter(id)
        .then(res => {
            onCharLoaded(res)
        })
    }
    const view = (char) => {
        let {name, description, thumbnail, homepage, wiki} = char;
        if(!description){
            description = 'There is no information about the character'
        }else{
            description = description.slice(0, 210) + '...'
        }
        let thumbnailClasses = (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') ? ("randomchar__img randomchar__img-notAvailable") : "randomchar__img";
        return (
            <div className="randomchar__block">
                    <img src={thumbnail} alt="Random character" className= {thumbnailClasses}/>
                    <div className="randomchar__info">
                        <p className="randomchar__name">{name}</p>
                        <p className="randomchar__descr">
                            {description}
                        </p>
                        <div className="randomchar__btns">
                            <a href= {homepage} className="button button__main">
                                <div className="inner">homepage</div>
                            </a>
                            <a href={wiki} className="button button__secondary">
                                <div className="inner">Wiki</div>
                            </a>
                        </div>
                    </div>
                </div>
        )  
    }
    let errorMessage = error ? <ErrorMessage/> : null;
    let loadMessage = loading ? <Spinner/> : null;
    let content = !(error || loading) ? view(char) : null
        return (
        <div className="randomchar">
            {errorMessage}
            {loadMessage}
            {content}
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br/>
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button className="button button__main" onClick={getData}>
                    <div className="inner">try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
            </div>
        </div>
    )
}

export default RandomChar;