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
</Content>;

{
  loading ? (
    <Spinner />
  ) : (
    <Content>{error !== "" ? ErrorMensage() : <h1>HASUIDHAS</h1>}</Content>
  );
}
