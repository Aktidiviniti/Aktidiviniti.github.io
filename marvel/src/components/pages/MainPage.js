import { useState } from "react";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import OnTop from "../onTop/OnTop";
import RandomChar from "../randomChar/RandomChar";
import decoration from '../../resources/img/vision.png';

const MainPage = () => {
    const [selectedChar, setSelectedChar] = useState(null);
    const onCharSelected = (id) => {
        setSelectedChar(id)
    }
    return(
        <>
            <RandomChar/>
                <div className="char__content">
                    <CharList
                        onCharSelected = {onCharSelected}
                        selectedChar = {selectedChar}/>
                    <ErrorBoundary>
                    <CharInfo charId = {selectedChar}/> 
                    </ErrorBoundary>
                    <OnTop/>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}
export default MainPage;