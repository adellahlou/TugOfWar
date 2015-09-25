/**
*	publishing.js - specifies publications and subscriptions
*/

if (Meteor.isClient) {

	Meteor.startup(function() {
		//grabs latitude and longitude

		Meteor.subscribe('localPolls', 0 , 0);
	}); //end startup
}



if (Meteor.isServer) {

	Meteor.startup( function() {
		Meteor.publish('localPolls', function(lat, long){
			// TODO: implement geo-fencing
			return Polls.find({open : true});
		});

		Meteor.publish('globalPolls', function(){
			return Polls.find();
		});

		//TODO : Allow users to see polls they answered before
	}); //end startup
} 