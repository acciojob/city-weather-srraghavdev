
import React,{useState,useEffect} from "react";
import './../styles/App.css';
import axios from "axios";
import 'regenerator-runtime/runtime'

const App = () => {
  var [data,Setdata]=useState({})
  let [term,Setterm]=useState('')
  useEffect(()=>{
    (async function getdata(){
    try{
      let temp=  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${term}&appid=0bbb9949bea044992ad8cfe3859cca57&units=imperial`)
    console.log(temp.data)
    Setdata(temp.data)
    
  
  }
    catch(error){
      Setdata({})
      document.getElementsByTagName('input')[0].value=''
    }
  }
    )()
  },[term])
  

  return (
    <div>
        <input type='text' className="search" onChange={(event)=>Setterm(event.target.value)}></input>
      { JSON.stringify(data).length!=2 && <div className="weather"> {data.name}
                                          <div className="weather">{data.main.temp+'F'}</div>
                                          <div className="weather">{data.weather[0].description}</div>
                                          <div className="weather"><img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}></img></div>
      
      
        </div>
      }
  
    </div>
  )
}

export default App
