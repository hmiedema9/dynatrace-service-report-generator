var prompt = require('prompt');
var request = require("request");
var prettyjson = require('prettyjson');
  // 
  // Start the prompt 
  // 
  prompt.start();
 
  // 
  // Get two properties from the user: username and email 
  // 
  prompt.get(['tenant', 'token'], function (err, result) {
    // 
    // Log the results. 
    // 
    console.log('Command-line input received:');
    console.log('  tenant ID: ' + result.tenant);
    //console.log('  Service ID: ' + result.id);
    console.log('  API Token: ' + result.token);
    var options = {
        noColor: true
    };
    request({
        uri: "https://"+result.tenant+".live.dynatrace.com/api/v1/entity/services?Api-Token=" + result.token,
        method: "GET",
        timeout: 10000,
        followRedirect: true,
        maxRedirects: 10
    }, function(error, response, body) {
        console.log(prettyjson.render(body, options));    
    });

  });


