var fitbitAccessToken;
var heartRateArray = [];

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
    'https://api.fitbit.com/1/user/-/activities/heart/date/2017-12-14/1d/1sec/time/13:00/23:00.json',
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
    heartRateArray = data['activities-heart-intraday'].dataset;
    
    var print = false;

    for (var i = 0; i < heartRateArray.length; i++) {
      var tid = heartRateArray[i].time;
      var puls = heartRateArray[i].value;
      if(tid.substr(0, 5) == "13:28"){
        print = true;
      }
      if(tid.substr(0, 5) == "13:31"){
        print = false;
      }
      if(print){
        console.log(heartRateArray[i]);
      }
    }


    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(heartRateArray[0]));
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "puls.json");
    dlAnchorElem.click();

}).catch(function(error) {
    console.log(error);
});
