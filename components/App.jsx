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
	selectPoll(id){
		this.setState({selected : id});
	},


	/**
 	*	@param {Event} pollId
 	*	@param {String} vote
 	*/
	vote(pollId, vote){
		Meteor.call('voteOnPoll', pollId, vote);
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
			<Poll poll={this.state.selectedPoll} vote={this.vote} />
		);
	},

	renderList(){
		return (<FilteredList selectPoll={this.selectPoll} polls={this.data.polls} />);
	},

	/**
	*	Switches rendering depending on this.state.display
	*/
	render(){
		//if not logged in, dispaly login
		if(!this.data.currentUser){
			return (
				<div className="login"> 
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