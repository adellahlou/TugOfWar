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
			<div className="pollBlock">
				<div className="row">
					<h1 className="pollHeader col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6"> {this.props.poll.tag} </h1>
				</div>
				<div className="row">
					<div id="blurb" className="col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6">{blurb}</div>
				</div>
				<div className="row col-md-offset-4 col-md-4 col-lg-offset-4 col-lg-4">
					<div className="votebox">
						{choices}
					</div>
				</div>
			</div>
		);
	}
});