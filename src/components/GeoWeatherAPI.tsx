// Class Component
import React from "react";
import DisplayAPI from "./DisplayAPI";
import { render } from "react-dom";

type StateType = {
  latitude: number;
  longitude: number;
  desc: string[];
  temp: string[];
  feel: string[];
  low: string[];
  high: string[];
  humid: string[];
  wind: string[];
};

export default class GeoWeatherAPI extends React.Component<{}, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      desc: [],
      temp: [],
      feel: [],
      low: [],
      high: [],
      humid: [],
      wind: [],
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (myPosition) => {
        console.log(myPosition);
        this.setState({ latitude: myPosition.coords.latitude });
        this.setState({ longitude: myPosition.coords.longitude });
      },
      (err) => {
        console.error("Error code: " + err.code + " - " + err.message);
      }
    );
    this.myWeather();
  }

  myWeather = () => {
    const key = "e51267c357017ca3a21eada5bfb90157";
    const baseURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=${key}`;

    fetch(baseURL)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.list[0]);
        this.setState({ desc: data.list[0].weather[0].description });
        this.setState({ temp: data.list[0].main.temp });
        this.setState({ feel: data.list[0].main.feels_like });
        this.setState({ low: data.list[0].main.temp_min });
        this.setState({ high: data.list[0].main.temp_max });
        this.setState({ humid: data.list[0].main.humidity });
        this.setState({ wind: data.list[0].wind.speed });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <DisplayAPI
          lat={this.state.latitude}
          lng={this.state.longitude}
          desc={this.state.desc}
          temp={this.state.temp}
          feel={this.state.feel}
          low={this.state.low}
          high={this.state.high}
          humid={this.state.humid}
          wind={this.state.wind}
        />
      </div>
    );
  }
}
