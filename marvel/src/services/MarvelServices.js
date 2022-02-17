import { useHttp } from "../hooks/http.hook";
const useMarvelService = () => {
    const {loading, request, error, clearError} = useHttp();
    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=c5d6fc8b83116d92ed468ce36bac6c62';
    

    const getAllCharacters = async (num) => {
        let res = await request(`${_apiBase}characters?limit=9&offset=${num}&${_apiKey}`)
        return res.data.results.map(_transformCaracter)
    }
    const getCharacter = async(id) => {
        let res = await request(`${_apiBase}characters/${id}?${_apiKey}`)
        return _transformCaracter(res.data.results[0])
    }
    const getAllComics = async (offset = 0) => {
        const res = await request(`${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`);
        return res.data.results.map(transformComics);
    }
    const transformComics = (res) => {
        return { id: res.id,
                title: res.title,
                description: res.description || 'There is no description',
                price: res.prices.price ? `${res.prices.price}$` : 'not available',
                thumbnail: res.thumbnail.path + '.' + res.thumbnail.extension,
                pageCount: res.pageCount ? `${res.pageCount} p.` : 'No information about the number of pages',
        }
    }
    const getComics = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        return transformComics(res.data.results[0]);
    }
    const _transformCaracter = (res) => {
        return {name: res.name.length > 21 ? `${res.name.slice(0, 20)} ...` : res.name,
                description: res.description || 'There is no description',
                thumbnail: res.thumbnail.path + '.' + res.thumbnail.extension,
                homepage: res.urls[0].url,
                wiki: res.urls[1].url,
                id: res.id,
                comics: res.comics.items,}
    }
    return {loading, error, getAllCharacters, getCharacter, clearError, getAllComics, getComics}
}

export default useMarvelService;