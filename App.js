import Content from './files/Content';
import React,{ useState} from 'react';
import './App.css';

function App() {
  const [count,setCount] =useState(0);
  const [text,setText] =useState([]);
  const handleSubmit =(e) =>{
    e.preventDefault();
    let amount = parseInt(count)
    if (count <=0){
      amount = 1;
    }
    if (count >46){
      amount = 46;
    }
    setText(Content.slice(0,amount));
  }
  return (
    <section className='sec-cen'>
      <h3> If You Tired of "lorem ipsum". Try this</h3>
       <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'> paragraphs: </label>
        <input type='number' name='amount' id='amount' value={count}
          onChange={(e)=>setCount(e.target.value)}/>
        <button className='btn' type='submit'>
          Generate
        </button>
       </form>
       <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}
export default App;