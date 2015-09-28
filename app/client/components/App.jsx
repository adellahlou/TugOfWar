//TODO: Integrate React Router
/**
*	App.jsx - Data holding and controlling component
*/
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
		this.setState({selectedPoll: Polls.findOne(this.state.selectedPoll._id)})
	},

	/**
	*	@param {String} newComment
	*	@param {String}	pollId
	*/
	commentOnPoll(newComment){
		console.log("Adding to %s new comment: %s", this.state.selectedPoll._id, newComment);
		Meteor.call('commentOnPoll', this.state.selectedPoll._id, newComment);
		this.setState({selectedPoll: Polls.findOne(this.state.selectedPoll._id)})
	},


	/**
 	*	@param {Event} pollId
 	*	@param {String} vote
 	*/
	goToComments(){
		this.setState({display : 'comments'});
	},

	goToPolls(){
		this.setState({display : 'list'});
	},


	createPollItem(poll){
          return (<PollItem item={poll} selectPoll={this.selectPoll} />);
	},


	createCommentItem(comment){
		return (<CommentItem comment={comment}/>);
	},

	/**
	*
	*/
	renderComments(){
		return (
			<div>
				<CommentBox commentOnPoll={this.commentOnPoll} goToPolls={this.goToPolls}/>
				<List items={this.state.selectedPoll.comments} createItem={this.createCommentItem}/>
			</div>
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
		return (
			<div>
				<Title />
				<FilteredList itemClickHandler={this.selectPoll} createItem={this.createPollItem} initialItems={this.data.polls} />
			</div>
		);
	},


	renderVisual() {
		return (<Visualizer poll={this.state.selectedPoll} votePoll={this.votePoll} goToComments={this.goToComments}/>);
	},

	/**
	*	Switches rendering depending on this.state.display
	*/
	render(){
		//if not logged in, dispaly login
		if(!this.data.currentUser){
			return (
				<div> 
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
			case 'visualize':
				return this.renderVisual();
			default:
				return this.renderList();
		}
	}
});