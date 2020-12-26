import React, { useState } from "react";

//utils
import datebuilder from "./../../utils/datebuilder";

//key
import { key } from "./../../utils/env";

//styles
import {
  Container,
  Content,
  ContentHeader,
  Header,
  Main,
  Footer,
  Error404,
} from "./styles";
import Spinner from "../Loading";

//img
import ImgLocationGlobal from "../../assets/img/global.svg";
import ImgError from "../../assets/img/error.svg";

//Api
const api = {
  url: "https://api.openweathermap.org/data/2.5/",
  key: key,
};

const WeatherApp = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  //Input

  const inputKeyPress = (e) => {
    if (e.key === "Enter") {
      setLoading(true);
      setTimeout(async function asyncInputKeyPress() {
        try {
          const resp = await fetch(
            `${api.url}weather?q=${query}&units=metric&lang=pt_br&APPID=${api.key}`
          );
          const JSON = await resp.json();
          setWeather(JSON);
          console.log(JSON);
          setLoading(false);
          setQuery("");
        } catch (e) {
          setError(e);
          setLoading(false);
        }
      }, 2000);
    }
  };

  //Button

  const buttonOnClick = (e) => {
    e.preventDefault();
    setLoading(true);
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);

      console.log(`setLAT ${lat}`);
    });
    setTimeout(async function apiButtonResp() {
      try {
        const resp = await fetch(
          `${api.url}/weather?lat=${lat}&lon=${long}&units=metric&lang=pt_br&appid=${api.key}`
        );
        const JSON = await resp.json();
        setWeather(JSON);
        setQuery("");
        setLoading(false);
        console.log(JSON);
      } catch (err) {
        setError(err.message);
        console.log(err);
        setLoading(false);
      }
    }, 2000);
  };

  //Error Msg
  const ErrorMensage = () => (
    <Error404>
      <img src={ImgError} alt="" />
      <small>
        {" "}
        Houve um erro na sua pesquisa! Verifique o nome da cidade.{error}
      </small>
    </Error404>
  );

  //Sucess
  const SuccessMensage = () => (
    <Content>
      <Header>
        <h3>{weather.name}</h3>
        <small>{weather.sys.country}</small>
        <p>{datebuilder(new Date())}</p>
      </Header>
      <Main>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <span>
          Temp: {Math.round(weather.main.temp)}
          <sup>°C</sup>
        </span>
        <legend>{weather.weather[0].description}</legend>
      </Main>
      <Footer>
        <small>
          Umidade: {weather.main.humidity} <sup>%</sup>
        </small>
        <small>
          Temp. Min: {Math.round(weather.main.temp_min)}
          <sup>°C</sup>
        </small>
        <small>
          Temp. Max: {Math.round(weather.main.temp_max)}
          <sup>°C</sup>
        </small>
        <small>
          Sensação Térmica: {Math.round(weather.main.feels_like)}
          <sup>°C</sup>
        </small>
        <small>
          Vel. do Vento: {weather.wind.speed}
          <sup>m/s</sup>
        </small>
      </Footer>
    </Content>
  );

  return (
    <Container>
      <ContentHeader>
        <h1>Clima Tempo</h1>
        <a href="https://openweathermap.org" target="blank">
          API
        </a>
        <br />
        <small>Escreva o nome da cidade desejada e aperte `enter`.</small>
        <input
          type="text"
          placeholder="Procurar..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={inputKeyPress}
        />
        {/* <button onClick={buttonOnClick}>
          <img src={ImgLocationGlobal} alt="" />
        </button> */}
      </ContentHeader>
      {/* switch case aq pra resolver o problema dos erros */}
      {loading ? (
        <Spinner />
      ) : weather !== "" ? (
        SuccessMensage()
      ) : (
        <Content>Faça um teste!</Content>
      )}
    </Container>
  );
};
export default WeatherApp;
