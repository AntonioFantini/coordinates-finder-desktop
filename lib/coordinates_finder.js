var opts; 
module.exports= {
	setOpts : function(opts){
		this.opts = opts;
	},
	findCoordinates : function(locationName, callback){
		var HttpsProxyAgent = require('https-proxy-agent');
	    var request = require('request');
			var agent;
			if(this.opts && this.opts.proxy){
	    	agent = new HttpsProxyAgent(this.opts.proxy);
			}
	   request({
	          uri: "https://maps.googleapis.com/maps/api/geocode/json?address="+locationName,
	          method: "GET",
	          headers: {
	          'content-type': 'application/x-www-form-urlencoded'
	          },
	          agent: agent,
	          timeout: 10000,
	          followRedirect: true,
	          maxRedirects: 10,
	          }, function(error, response) {
	          if(error){
	            console.log("Error " + error);
							return;	
						}
	          var resp = JSON.parse(response.body);
	          //console.log("Original resp: "+JSON.stringify(resp));
						 var locationObj ={};
						if(resp && resp.results.length >0){
								locationObj = {
									"placeId":resp.results[0].place_id,
									"location": resp.results[0].address_components[0].long_name,
									"latitude":resp.results[0].geometry.location.lat,
									"longitude":resp.results[0].geometry.location.lng,
									"formattedAddress": resp.results[0].formatted_address
	       			   }
						}else{
							locationObj = {
								"placeId":"N.A.",
							  "location": "Invalid Place",
								"latitude":"N.A.",
								"longitude":"N.A.",
								"formattedAddress":"N.A."
							 }
						 }
						callback(locationObj);
						
	      });
	}
}
