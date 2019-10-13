import React, { Component } from 'react';
import Header from './components/Header';
import Weather from './components/Weather';
import axios from 'axios';
import './App.css';
import Button from '@material-ui/core/Button';

const apiKey = '807ced8e3aa14c64ae44caaaf4291b3d'

class App extends Component {
  state = {
    temp: '',
    hi: '',
    low: '',
    city: '',
    country: '',
    desc: '',
    error: false
  }



  getWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        .then(res => {
          const imageId = res.data.weather[0].icon;
          this.setState({
            temp: Math.round(res.data.main.temp-273),
            hi: Math.round(res.data.main.temp_max-273),
            low: Math.round(res.data.main.temp_min-273),
            city: res.data.name,
            country: res.data.sys.country,
            desc: res.data.weather[0].description
          })
          console.log(this.state)
        })
      },
      (error) => {
        this.setState({
          error: true
        })
        console.log(error)
      });
    }
    
  }

  render() {
    return(
      <div className='wrapper'>
        <div className='box'>
          <div>
        <Header/>
        <Button variant="contained" color="default" onClick={this.getWeather}>Get Local Weather</Button>
        </div>
        <div>
        <Weather
          temp={this.state.temp}
          hi={this.state.hi}
          low={this.state.low}
          city={this.state.city}
          country={this.state.country}
          desc={this.state.desc}
          error={this.state.error}
        />
        </div>
        </div>
      </div>
    )
  }
}

export default App;
