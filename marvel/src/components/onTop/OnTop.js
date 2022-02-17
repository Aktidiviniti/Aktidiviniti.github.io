import { Component } from "react/cjs/react.production.min";
import arrow from '../../resources/img/arrowup.png';
import './onTop.sass'
class OnTop extends Component {
    state = {
        position: false,
    }
    componentDidMount(){
        this.scroll();
    }
    scroll = () => {
        window.addEventListener('scroll', () => {
            if(document.documentElement.scrollTop >= 300){
                this.setState({position: 'show'})
            }
            if(document.documentElement.scrollTop <= 300){
                this.setState({position: false})
            }
        }) 
    }
    scrollUp = () => {
            this.interval = setInterval(() => {
                if(document.documentElement.scrollTop === 0){
                clearInterval(this.interval);
            } 
                document.documentElement.scrollTop -= 6
            }, 5)
    }
    render(){
      return(
        <img src={arrow} alt="UP" className = {`arrow ${this.state.position}`} onClick={() => this.scrollUp()}/>
      )  
    }
}
export default OnTop;