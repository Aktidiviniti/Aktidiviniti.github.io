import './charInfo.scss';
import {useState, useEffect} from 'react';
import useMarvelService from '../../services/MarvelServices';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import Skeleton from '../skeleton/Skeleton';
import PropTypes from 'prop-types';
import Foo from '../charList/someFunc';
const CharInfo = (props) => {
    const [char, setChar] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [scroll, setScroll] = useState(0);
    const [top, setTop] = useState(0);
    const service = useMarvelService();
    const getChar = () => {
        if(!props.charId){
            return
        }
        setLoading(true)
        service
        .getCharacter(props.charId)
        .then(res => {
            onLoaded(res)
            console.log(res);
            // clearInterval(interval)
            })  
    }
    const onLoaded = (res) => {
        setChar(res);
        setLoading(false);
        setError(false);
    }
    useEffect(() => {
        getChar();
        // handleScroll();
    },[props.charId])
    const handleScroll = () => {
        window.addEventListener('scroll', (e) => {
            setTop(document.documentElement.scrollTop)
        })
    }
    const view = (char) => {
        const {name, description, thumbnail, wiki, homepage, comics} = char;
        let className = "char__basics";
                if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'){
                    className = "char__basics char__basics-fill";
                }; 
        let comicsList = comics.map((i, n) => { 
            if (n > 9) return;
            return (<li className="char__comics-item"
                        key={n}>
                            {i.name}
                    </li>)
        })
        return (
            <>
            <div className={className}>
                <img src={thumbnail} alt="abyss"/>
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
                </div>
                <div className="char__descr">
                    {description}
                </div>
                <div className="char__comics">Comics:</div>
                <ul className="char__comics-list">
                 {!comics.length ? `no comics with ${name}` : comicsList }
                </ul>
                </>
        )
    }
        let skeleton = error || loading || char ? null : <Skeleton/>
        let errorMessage = error ? <ErrorMessage/> : null;
        let loadMessage = loading ? <Spinner/> : null;
        let content = !(error || loading || !char) ? view(char) : null;
        return (
        <div className="char__info">
            {skeleton}
            {errorMessage}
            {loadMessage}
            {content}
        </div>
    )
}

CharInfo.propTypes = {
    charId: PropTypes.number
};
export default CharInfo;