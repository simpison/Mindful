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
    //console.log(data);
    heartRateArray = data['activities-heart-intraday'].dataset;
    
    var print = false;
    var test1 = [];
    var test2 = [];
    var test3 = [];
    var test4 = [];
    var test5 = [];
    var test6 = [];
    var test7 = [];
    var test8 = [];


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
        test1.push(heartRateArray[i]);
      }
    }


    for (var i = 0; i < heartRateArray.length; i++) {
      var tid = heartRateArray[i].time;
      var puls = heartRateArray[i].value;
      if(tid.substr(0, 5) == "14:05"){
        print = true;
      }
      if(tid.substr(0, 5) == "14:08"){
        print = false;
      }
      if(print){
        test2.push(heartRateArray[i]);
      }
    }


    for (var i = 0; i < heartRateArray.length; i++) {
      var tid = heartRateArray[i].time;
      var puls = heartRateArray[i].value;
      if(tid.substr(0, 5) == "16:32"){
        print = true;
      }
      if(tid.substr(0, 5) == "16:35"){
        print = false;
      }
      if(print){
        test3.push(heartRateArray[i]);
      }
    }

    for (var i = 0; i < heartRateArray.length; i++) {
      var tid = heartRateArray[i].time;
      var puls = heartRateArray[i].value;
      if(tid.substr(0, 5) == "16:20"){
        print = true;
      }
      if(tid.substr(0, 5) == "16:23"){
        print = false;
      }
      if(print){
        test4.push(heartRateArray[i]);
      }
    }

    for (var i = 0; i < heartRateArray.length; i++) {
      var tid = heartRateArray[i].time;
      var puls = heartRateArray[i].value;
      if(tid.substr(0, 5) == "16:48"){
        print = true;
      }
      if(tid.substr(0, 5) == "16:51"){
        print = false;
      }
      if(print){
        test5.push(heartRateArray[i]);
      }
    }

    for (var i = 0; i < heartRateArray.length; i++) {
      var tid = heartRateArray[i].time;
      var puls = heartRateArray[i].value;
      if(tid.substr(0, 5) == "17:21"){
        print = true;
      }
      if(tid.substr(0, 5) == "17:24"){
        print = false;
      }
      if(print){
        test6.push(heartRateArray[i]);
      }
    }

    for (var i = 0; i < heartRateArray.length; i++) {
      var tid = heartRateArray[i].time;
      var puls = heartRateArray[i].value;
      if(tid.substr(0, 5) == "22:00"){
        print = true;
      }
      if(tid.substr(0, 5) == "22:03"){
        print = false;
      }
      if(print){
        test7.push(heartRateArray[i]);
      }
    }


    for (var i = 0; i < heartRateArray.length; i++) {
      var tid = heartRateArray[i].time;
      var puls = heartRateArray[i].value;
      if(tid.substr(0, 5) == "22:36"){
        print = true;
      }
      if(tid.substr(0, 5) == "22:39"){
        print = false;
      }
      if(print){
        test8.push(heartRateArray[i]);
      }
    }

    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(test1));
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "puls1.json");
    dlAnchorElem.click();

    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(test2));
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "puls2.json");
    dlAnchorElem.click();

    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(test3));
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "puls3.json");
    dlAnchorElem.click();

        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(test4));
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "puls4.json");
    dlAnchorElem.click();

        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(test5));
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "puls5.json");
    dlAnchorElem.click();

        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(test6));
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "puls6.json");
    dlAnchorElem.click();

        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(test7));
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "puls7.json");
    dlAnchorElem.click();

        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(test8));
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "puls8.json");
    dlAnchorElem.click();


}).catch(function(error) {
    console.log(error);
});
