// IF WHERE AM I BUTTON CLICKED
$(document).ready(function () {
  $("#btnwhereami").click(function () {
    geoLocation();
  });
  //  FIND LOCATION OF DEVICE
  function geoLocation() {
    try {
      navigator.geolocation.getCurrentPosition(showPosition);
    } catch (error) {
      console.log(error);
    }
  }
  // THEN WRITE THE POSITION ON P
  function showPosition(position) {
    let exactposition =
      "Latitude :" +
      position.coords.latitude +
      " Longitude :" +
      position.coords.longitude;
    //   WRITE LAT LONG BELOW BUTTON
    document.getElementById("pwhereami").innerText = exactposition;
  }

  $("#btnshowonmap").click(function (e) {
    geoLocationForShowOnMap();
  });

  function geoLocationForShowOnMap() {
    try {
      navigator.geolocation.getCurrentPosition(showOnMap);
    } catch (error) {
      console.log(error);
    }
  }

  function showOnMap(position) {
    try {
      let latlon = position.coords.latitude + "," + position.coords.longitude;
      console.log(latlon);
      let img_url =
        "https://maps.googleapis.com/maps/api/staticmap?center=" +
        latlon +
        "&zoom=14&size=400x400&sensor=false&key=AIzaSyBeV1qGgHMf8NonZn8dwGT34zuwcIFya6A";

      //  BELOW IMG_URL JUST FOR TESTING
      // let img_url = "https://picsum.photos/id/237/200/300";

      console.log(img_url);

      document.getElementById("mapdiv").innerHTML = "<img src=" + img_url + ">";
    } catch (error) {
      console.log(error);
    }
  }

  function showOnMapStep2() {}

  // GOOGLE MAPS API ALIP KEY'I DEĞİŞTİRDİKTEN SONRA TEKRAR DENE
});
