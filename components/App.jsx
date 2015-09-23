App = React.creatClass({
	mixins: [ReactMeteorData],

	getInitialState(){
		return {
			display : 'list',
			selectedPoll : poll
		};
	},

	getMeteorData(){
		return {
			polls : Tasks.find().fetch();
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
		let query = {$set : {}};
		query.$set[vote] = this.selectedPoll.votes[vote] + 1;
		Tasks.update(pollId,{$set : query});
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
		return (<List selectPoll={this.selectPoll} polls={this.state.polls} />);
	},

	/**
	*	Switches rendering depending on this.state.display
	*/
	render(){
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

})