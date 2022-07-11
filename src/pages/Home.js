
import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'

const Home = () => {
     // eslint-disable-next-line 
  const [input,setInput]=useState('');
  const [results,setResults]=useState(null);

  const OnInputChange =(ev) => {
      setInput(ev.target.value);
  }
  const onSearch=()=>{ 
       fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then(r=>r.json()).then(result=>{

               setResults(result);
           }
       )
  }

  const onKeyDown=(ev)=>
  { 
      if(ev.keyCode===13){
          onSearch( )
      }
  }

  const renderResults=()=>{
      if(results && results.length === 0){
return <div>NO RESULTS</div>
      }
      if(results && results.length > 0){
          return <div> 
              {results.map(item=>
          <div key={item.show.id}>{item.show.name}</div>)} 
          </div>
          
    }
    return null;

    }

    return (
    <MainPageLayout>
        <input type="text" onChange={OnInputChange} onKeyDown={onKeyDown} value={input}/>
    <button type="button" onClick={onSearch}>
        Search</button>
        {renderResults()}
    </MainPageLayout>
  )  
}

export default Home