if (!window.location.hash) {
  window.location.replace('https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22CHCL&redirect_uri=https%3A%2F%2Fsimpison.github.io%2FMindful%2F&scope=heartrate&expires_in=604800');
} else {
  var fragmentQueryParameters = {};
  window.location.hash.slice(1).replace(
    new RegExp("([^?=&]+)(=([^&]*))?", "g"),
    function($0, $1, $2, $3) {fragmentQueryParameters[$1] = $3;}
  );

  fitbitAccessToken = fragmentQueryParameters.access_token;
}



fetch(
    //GET https://api.fitbit.com/1/user/-/activities/heart/date/today/1d/1sec/time/00:00/00:01.json
    'https://api.fitbit.com/1/user/-/activities/heart/date/today/1d/1sec.json',
    {
        headers: new Headers({
            'Authorization': 'Bearer ' + fitbitAccessToken
        }),
        mode: 'cors',
        method: 'GET'
    }
).then(function(response){
    return response.json();
}).then(function(data) {
    console.log(data);
    //heartRateArray = data['activities-heart-intraday'].dataset;
}).catch(function(error) {
    console.log(error);
});
