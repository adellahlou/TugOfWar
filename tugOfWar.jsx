/**
*	tugOfWar.jsx - used to bootstrap the application
*/

if(Meteor.isClient){

	//enables using username only, no email
	Accounts.ui.config({
		passwordSignupFields : "USERNAME_ONLY"
	});

	Meteor.startup(() => {
		React.render(<App />, document.getElementById('react-target'));
	});
}