App = React.createClass({
	mixins: [ReactMeteorData],

	/**
	*	@property {String} display
	*	@property {Object} selectedPoll
	*/
	getInitialState(){
		return {
			display : 'list',
			selectedPoll : null
		};
	},

	/**
	*	@return {Object} 
	*/
	getMeteorData(){
		return {
			polls : Polls.find().fetch({sort : {createdAt: -1}}),
			currentUser : Meteor.user()
		}
	},

	/**
 	*	@param {Event} event
 	*/
	selectPoll(poll){
		this.setState({selectedPoll : poll, display : 'poll'});
	},


	/**
 	*	@param {Event} pollId
 	*	@param {String} vote
 	*/
	votePoll(pollId, vote){
		Meteor.call('voteOnPoll', pollId, vote);
		this.setState({display : 'visualize'});
	},

	/**
	*
	*/
	renderComments(){
		return(
			<CommentList poll={this.state.selectedPoll}/>
		);
	},

	/**
	*
	*/
	renderPoll(){
		return(
			<Poll poll={this.state.selectedPoll} votePoll={this.votePoll} />
		);
	},

	renderList(){
		return (<FilteredList selectPoll={this.selectPoll} initialItems={this.data.polls} />);
	},


	renderVisual() {
		return (<div></div>);
	},

	/**
	*	Switches rendering depending on this.state.display
	*/
	render(){
		//if not logged in, dispaly login
		if(!this.data.currentUser){
			return (
				<div className="container"> 
					<LoginWrapper />
				</div>
			);
		}

		switch (this.state.display){
			case 'list':
				return this.renderList();
			case 'poll':
				return this.renderPoll();
			case 'comments':
				return this.renderComments();
			default:
				return this.renderList();
		}
	}
});