/**
*	Poll.jsx - Displays the voting screen
*/

Poll = React.createClass({
	propTypes: {
		poll: React.PropTypes.object.isRequired
		/* 
		poll.tag : React.PropTypes.string.isRequired,
		poll.description : React.PropTypes.string,
		poll.votes : React.PropTypes.object.isRequired,
		poll.colors : React.PropTypes.object.isRequired
		*/
	},

	handleVote(event){
		console.log( event);
		console.log( event.currentTarget);
		this.props.votePoll(this.props.poll._id, event.currentTarget.value);
	},

	makeChoiceButton(choice){
		return (<button value={choice} className="btn voteChoice" onClick={this.handleVote}>{choice} </button>)
	},

	render(){
		let poll = this.props.poll;
		var blurb = this.props.poll.description || '';
		var choices = Object.getOwnPropertyNames(poll.votes).map(this.makeChoiceButton);

		return (
			<div className="poll">
				<h1 className="pollHeader"> {this.props.poll.tag} </h1>
				<div>{blurb}</div>
				<div className="votebox">
					{choices}
				</div>
			</div>
		);
	}
});