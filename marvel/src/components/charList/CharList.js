import './charList.scss';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import useMarvelService from '../../services/MarvelServices';
import { useEffect, useState } from 'react';
const CharList = (props) => {
    const [data, setData] = useState([]);
    const [num, setNum] = useState(210);
    const [loadingButton, setLoadingButton] = useState(false);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const {loading, error, getAllCharacters} = useMarvelService();

    const getData = (num, initial) => {
        initial ? setNewItemLoading(true) : setNewItemLoading(false);
        getAllCharacters(num)
        .then(res => {dataLoaded(res)})
    }
    const dataLoaded = (res) => {
        setData([...data, ...res]);
        setLoadingButton(false);
    }
    const increaseNum = () => {
        setNum((num) => num + 9);
        setLoadingButton(true);
    }
    const onCharSelected = ((e, data) => {
       props.onCharSelected(data); 
    })
    const getList = (res) => {
        let list = []; 
        for(let i = 0; i < res.length; i++){
            let className = "char__item";
            if (res[i].thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'){
                className = "char__item char__item-none"
            };
            list.push(
            <li className= {props.selectedChar === res[i].id ? (`${className} char__item_selected`) : className}
                key = {res[i].id}
                onClick={(e) => {onCharSelected(e, res[i].id)}} 
                onKeyDown={(e) => {
                    if(e.code === 'Enter'){
                       onCharSelected(e, res[i].id) 
                    }
                }}
                tabIndex={0}>
                <img src={res[i].thumbnail} alt= {res[i].name}/>
                <div className="char__name">{res[i].name}</div>
            </li>
            )
        }
        return list
    }
    useEffect(() => {
        getData(num, true);
    }, [num])    
    
    if(loading){
        import ('./someFunc')
        .then((obj) => {

        })
    }
        let errorMessage = error ? <ErrorMessage/> : null;
        let loadMessage = loading && newItemLoading ? <Spinner style = {{gridColumn: '2/3'}}/> : null;
        // let content = !(error || loading) ? getList(data) : null;
        return (
        <div className="char__list">
            <ul className="char__grid">
                {errorMessage}
                {loadMessage}
                {getList(data)}
            </ul>
            {loadingButton ? <Spinner width = '50px'/> : <button className="button button__main button__long">
                <div className="inner" onClick={() => increaseNum()}>load more</div>
            </button>}
            
        </div>
    ) 
}
export default CharList;