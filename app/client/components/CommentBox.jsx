/**
*	CommentBox.jsx
*/

CommentBox = React.createClass({

	propTypes: {
	
	},

	handleSubmit(event){
		let comment = React.findDOMNode(this.refs.commentInput).value;
		Metor.call('commentOnPoll', comment)
	},

	render(){
		return (
			<div className="input-group input-group-lg">
				<input ref="commentInput" type="text" className="form-control" placeholder="Enter comment..."/>
				<span className="input-group-btn">
					<button class="btn btn-primary" type="submit" onClick={this.handleSubmit}>Comment</button>
				</span>
			</div>
		)
	}
});

