Poll = React.createClass({
	propTypes: {
		poll.tag : React.PropTypes.string.isRequired,
		poll.description : React.PropTypes.string,
		poll.votes : React.PropTypes.object.isRequired,
		poll.colors : React.PropTypes.object.isRequired
	},

	handleVote(event){
		this.props.vote(event.target.value);
	},

	render(){
		let poll = this.props.poll;
		let blurb = this.props.poll.description ? (<div>{this.props.poll.description}</div>) : '';

		return (
			<h1 className="pollHeader">{this.props.poll.tag}</h1>
			{blurb}
			<div className="votebox">
				{Object.getOwnPropertyNames(poll)
					.map((choice) => {
					return (<button value={choice} className="btn voteChoice">{choice}</button>);
				}}
			</div>
		);
	}

});