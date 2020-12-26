const buttonOnClick = (e) => {
  e.preventDefault();
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);

    console.log(`setLAT ${lat}`);
  });

  const apiButtonResp = async () => {
    try {
      const resp = await fetch(
        `${api.url}/weather?lat=${lat}&lon=${long}&units=metric&lang=pt_br&appid=${api.key}`
      );
      const JSON = await resp.json();
      setWeather(JSON);
      setQuery("");
      console.log(JSON);
    } catch (error) {
      console.log(error);
    }
  };

  apiButtonResp();
};

export default buttonOnClick;
