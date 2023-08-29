
import React,{useState} from "react";
import './../styles/App.css';
import axios from "axios";
import 'regenerator-runtime/runtime'

const App = () => {
  var [data,Setdata]=useState({})
  async function getdata(query){
    try{
      let temp=  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=0bbb9949bea044992ad8cfe3859cca57&units=imperial`)
    console.log(temp.data)
    Setdata(temp.data)
  }
    catch(error){
      Setdata({})
      console.log(error)
    }
  }

  return (
    <div>
        <input type='text' className="search" onChange={(event)=>getdata(event.target.value)}></input>
      { JSON.stringify(data).length!=2 && <div className="weather"> {data.name}
                                          <div>{data.main.temp+'F'}</div>
                                          <div>{data.weather[0].description}</div>
                                          <div><img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}></img></div>
      
      
        </div>
      }
  
    </div>
  )
}

export default App
