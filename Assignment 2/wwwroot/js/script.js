var len;
var results = '';

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com//v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "8b256574d2464fda870cafe688a655ca");
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }
        var searchResults = document.getElementById("searchResults");
        searchResults.style.visibility = "visible";
      var dialogWidth = $(window).width();
      var dialogHeight = $(window).height() * 0.60;
      $('#searchResults').html(results);
      $('#searchResults').dialog({
          width: dialogWidth,
          height: dialogHeight,
          position: {
          my: "bottom",
          at: "bottom",
          of: window
        }
      });
    })
    .fail(function () {
      alert("error");
    });
}

function getTime() {
    var timeDiv = document.getElementById("timeDiv");
    timeDiv.style.visibility = "visible";
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var formattedTime = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes);
  $(timeDiv).html(formattedTime).dialog({
    title: "Current Time",
    modal: true,
    buttons: {
      "Close": function() {
        $(this).dialog("close");
      }
    }
  });
}

function changeBackground() {
    let body = document.body;
    let computedStyle = window.getComputedStyle(body);
    let currentBg = computedStyle.backgroundImage;
    console.log(currentBg);
    if (currentBg.includes("space.png")) {
        console.log("First");
        document.body.style.backgroundImage = "url('space2.png')";
    } else {
        console.log("Sec");
        document.body.style.backgroundImage = "url('space.png')";
   }
}

function imFeelingLucky() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com//v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "8b256574d2464fda870cafe688a655ca");
      },
      type: "GET",
    })
    .done(function (data) {
        var firstResultUrl = data.webPages.value[0].url;
        window.location.href = firstResultUrl;
    });
}
