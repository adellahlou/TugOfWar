Polls = new Meteor.Collection('polls');

if(Meteor.isClient){

	Meteor.startup(() => {
		React.render(<App />, document.findElementById('react-target'));
	});
}