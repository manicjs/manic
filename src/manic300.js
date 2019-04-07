/**
 *
 */
var Manic = (function() {
  var get = function(context, file, extension) {
    // Return a new promise.
    return new Promise(function(resolve, reject) {
      // Do the usual XHR staff
      var req = new XMLHttpRequest();
      req.open('GET', "./" + context + "/" + file + "." + extension);

      req.onload = function() {
        // This is called even on 404 etc
        // so check the status
        if (req.status == 200) {
          // Resolve the promise with the response text
          resolve(req.response);
        }
        else {
          // Otherwise rejectwith the status text
          // which will hopefully be a meaningful error
          reject(Error(req.statusText));
        }
      };

      // Handle network errors
      req.onerror = function() {
        reject(Error("Newtork"));
      }

      // Make the request
      req.send();
    });
  };

  var getContext = function(file) {
    return get("contexts", file, "json");
  };

  var getData = function(context, file) {
    return get("data/" + context, file, "json");
  };

  var getScript = function (){};

  return {
    getContext : getContext,
    getData : getData
  };
}());

console.log("hello");

var personCont = personDat = {};

var personContext = Manic.getContext("person");
var personData = Manic.getData("person","foxyboss");

console.log(personData);
