/**
*	tugOfWar.jsx - used to bootstrap the application
*/
Polls = new Mongo.Collection('polls');

if(Meteor.isClient){

	//enables using username only, no email
	Accounts.ui.config(
		passwordSignupFields : "USERNAME_ONLY"
	);

	Meteor.startup(() => {
		React.render(<App />, document.findElementById('react-target'));
	});
}