let Foo = () =>  {
  function logger(){
    console.log('hello');
}
let newLogger = () => {
    console.log('hi');
}  
return {logger, newLogger}
}
export default Foo;

