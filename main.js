let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Los mejor autoescuela de madrid')
  .pauseFor(200)
  .deleteChars(10)
  .start();

  fetch('https://fakestoreapi.com/users')
    .then(res => res.json())

    function iniciarMap(){
      var coord = {lat: 40.44028431844322 ,lng:-3.6738814704737814 };
      var coord2 = {lat: 40.469151752713024,lng: -3.646625693668139 };
      var coord3 = {lat: 40.45958983566016, lng: -3.674827239787158 };
      var coord4 = {lat: 40.44784936081591,lng: -3.684636473278579 };
      var coord5 = {lat: 40.428818889372565,lng: -3.697727070756447 };
      var coord6 = {lat: 40.41782992300518, lng: -3.6753013287391876 };
      var coord7 = {lat: 40.38845179241852, lng: -3.649610534902497 };
      var coord8 = {lat: 40.47513674853516, lng: -3.6439080491073987 };
      var coord9 = {lat: 40.39967616864588, lng: -3.6226517675563543 };
      var coord10 = {lat: 40.428289177100744,lng: -3.696373955379468 };
      var coord11 = {lat: 40.387208320525474, lng: -3.6263809889028917};
      var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 12,
        center: coord
      });
      var marker =new google.maps.Marker({
        position: coord,
        map:map
      });
      var marker2 = new google.maps.Marker({
        position: coord2,
        map: map
      });
      var marker3 = new google.maps.Marker({
        position: coord3,
        map: map
      });
      var marker4 = new google.maps.Marker({
        position: coord4,
        map: map
      });
      var marker5 = new google.maps.Marker({
        position: coord5,
        map: map
      });
      var marker6 = new google.maps.Marker({
        position: coord6,
        map: map
      });
      var marker7 = new google.maps.Marker({
        position: coord7,
        map: map
      });
      var marker8 = new google.maps.Marker({
        position: coord8,
        map: map
      });
      var marker9 = new google.maps.Marker({
        position: coord9,
        map: map
      });
      var marker10 = new google.maps.Marker({
        position: coord10,
        map: map
      });
      var marker11 = new google.maps.Marker({
        position: coord11,
        map: map
      });
    }
    