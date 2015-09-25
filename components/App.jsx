App = React.creatClass({
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
			polls : Tasks.find().fetch({sort : {createdAt: -1}}),
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
		return (<List selectPoll={this.selectPoll} polls={this.data.polls} />);
	},

	/**
	*	Switches rendering depending on this.state.display
	*/
	render(){
		//if not logged in, dispaly login
		if(!this.data.currentUser){
			return(
				<div className="login"> 
					<LoginWrapper/>
				</div>
			);
		}

		switch (this.state.display){
			case 'list':
				return renderList();
			case 'poll':
				return renderPoll();
			case 'comments':
				return renderComments();
			default:
				return renderList();
		}
	}

});