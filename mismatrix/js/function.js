

// Constants
var gIsReloading = false;
var baseURL = "http://mismatrix.i4mi.bfh.ch/";
window.gSources = [];
window.gDisplay = [];

if (location.search.length < 2) {
  // No SessionID is created, let create one
  auth();
};

var sessionID = location.search.substring(1);
// Login
function auth(){
  //alert("Hello");

  var username = "administrator";
  var password = "admin";
  var sessionKey = "";


  getSessionId();

  function getSessionId() {
  sessionID =  $.ajax({
      type: 'POST',
      url: baseURL + 'var/session.json',
      contentType : 'application/json',
      dataType: 'json',
      success: function success(data, status, xhr) {
        sessionKey = xhr.responseText.slice(1, -1);
        //login();
        console.info("Logged successfully");
      },
      error: function error(data, status, xhr) {
        console.info(data);
        console.info("Cannot get SessionID")
      }
    });
      //console.info(sessionID);
  };



   function login() {
    $.ajax({
      type: 'POST',
      url: baseURL + 'var/auth.json?sid=' + sessionKey,
      contentType : 'application/json',
      data: JSON.stringify(["2", password]),
      dataType: 'json',
      timeout: 10000,
      success: function success() {
        console.info("Login successfully")
      },
      error: function error() {
        console.info("Not valid credentials")
      }
    });
  };





  var server = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
  var user = 0;



}
