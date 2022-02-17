import error from './error.gif'
let ErrorMessage = () => {
    return(
        <img src = {error} alt='Error-img' style={{display: 'block', width: '250px', height: '250px', margin: '0 auto'}}/>
    )
}
export default ErrorMessage;