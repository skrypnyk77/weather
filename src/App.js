import React from 'react';
import Info from './Info';
import Form from './Form';
import Weather from './Weather';
import './App.css';

const API_KEY = "14760c75d23b248fdf616023d1e8b86c";

class App extends React.Component {

    state = {
        error: ''
    };

    gettingWeather = async (city) =>{
    console.log('gettingWeather =>', city)

        try {
            if(city) {
            const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await api_url.json();
            

            if (data && data.cod !== '200') {
                const sunset = data.sys.sunset;
                const date = new Date();
                date.setTime(sunset);
                const sunset_date = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();

                console.log(data);

                const {main, name: city, sys} = data;
                const {country} = sys;
                const {temp, pressure} = main;

                const model = {
                    temp,
                    city,
                    country,
                    pressure,
                    sunset: sunset_date,
                };
                this.setState({
                    model,
                    error: undefined
                });
            }

            }} catch(err)
                {
                    console.error("Error " + err)
                }

    };



  render() {
        const {model} = this.state;
    return (
      <div>
          <Info />
          <Form weatherMethod={this.gettingWeather} />
          <Weather className="table"
                   {...model}
                   error={this.state.error}
          />
      </div>
    );
  }
}

export default App;
