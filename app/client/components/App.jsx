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
	},

	/**
<<<<<<< HEAD
	*	@param {String} comment
	*	@param {String}	pollId
	*/
	commentPoll(comment, pollId){
		Meteor.call('commentOnPoll', comment, pollId);
	},


	/**
 	*	@param {Event} pollId
 	*	@param {String} vote
 	*/
	goToComments(){
		this.setState({display : 'comments'});
	},


	createPollItems(poll){
          return (<PollItem item={poll} selectPoll={this.selectPoll} />);
	},


	createCommentItems(comment){
		return (<CommentItem comment={comment}/>);
	},

	/**
	*
	*/
	renderComments(){
		return (
			<div>
				<List items={this.state.selectedPoll}/>
				<CommentBox commentOnPoll={this.commentOnPoll} />
			</div>
=======
	*
	*/
	renderComments(){
		return(
			<CommentList poll={this.state.selectedPoll}/>
>>>>>>> origin/master
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
				<FilteredList selectPoll={this.selectPoll} initialItems={this.data.polls} />
			</div>
		);
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