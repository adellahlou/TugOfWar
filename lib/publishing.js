/**
*	publishing.js - specifies publications and subscriptions
*/

if (Meteor.isClient) {

	Meteor.startup(function() {
		//grabs latitude and longitude
		let position = Geolocation.latLng();
		Meteor.subscribe('localPolls', position.lat , position.lng);
	}); //end startup
}



if (Meteor.isServer) {

	Meteor.startup( function() {
		Meteor.publish('localPolls', function(lat, long){
			// TODO: implement geo-fencing
			return Tasks.find({open : true});
		});

		Meteor.publish('globalPolls', function(){
			return Tasks.find();
		});

		//TODO : Allow users to see polls they answered before
	}); //end startup
}