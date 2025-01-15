import './App.css';
import React, {useState} from 'react';


const App = () => {
  const [value, setValue] = useState("");
  
  const ESCAPE_KEY = 27;
  
  const ENTER_KEY = 13;
  
  const onChange = (event) => {
    setValue(event.target.value);
  }
  
  const erase = () => {
    setValue("");
  }
  
  const submit = () => {
    console.log('submit', value);
    erase();
  }
  const onKeyDown = (event) => {
    if(event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESCAPE_KEY){
      erase();
    }
  }
  
  return(
    <section id='app' className='container'>
      <header>
        <h1 className='tittle'>To-Do</h1>
      </header>
      <section className='main'>
        <input className='new-todo' 
        placeholder='O que precisa ser feito?'
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown} />
      </section>
    </section>
  );
}
export default App;
