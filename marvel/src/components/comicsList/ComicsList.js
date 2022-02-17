import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useMarvelService from "../../services/MarvelServices";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import './comicsList.sass'
const ComicsList = () => {
    const [data, setData] = useState([]);
    const [list, setList] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [loadingButton, setLoadingButton] = useState(false)
    const [offset, setOffset] = useState(0);
    const {getAllComics} = useMarvelService();

    const getData = () => {
        getAllComics(offset)
        .then(res => dataLoaded(res))
        .catch(() => {
            setError(true);
            setLoading(false);
        })
    }
    const dataLoaded = async (res) => {
        setLoading(false);
        setLoadingButton(false);
        setData([...data, ...res]);
    }
    const getList = (res) => {
        let list = [];
        for(let i =0; i < res.length; i++){
          list.push(<div className="comic" key={res[i].id}>
                    <Link to={`/comics/${res[i].id}`}>
                        <img src={res[i].thumbnail} alt="IMG" className="comic__img"/>
                        <p className="comic__title" >{res[i].title.length > 25 ? `${res[i].title.slice(0, 25)}...` : res[i].title}</p>
                        <p className="comic__descr">{res[i].description.length > 25 ? `${res[i].description.slice(0, 25)}...` : res[i].description}</p>
                        <div className="comic__price">{res[i].price}</div>
                    </Link>
            </div>)
        }
        return list
    }
    const increaseOffset = () => {
        setLoadingButton(true)
        setOffset(offset => offset+8)
    }
    useEffect(() => {
       getData() 
    }, [offset])
    let items = getList(data)
    return (
        <>
            <div className="comics__list">
                {error ? <ErrorMessage/> : null}
                {loading ? <Spinner style = {{margin: '0 auto'}}/>:items} 
            </div>
                {loadingButton ? <Spinner/> : <button className="button button__main button__long">
                <div className="inner" onClick={increaseOffset}>load more</div>
            </button>}
            
        </>
        
        
    )
}
export default ComicsList;