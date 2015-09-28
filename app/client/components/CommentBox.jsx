/**
*	CommentBox.jsx
*/

CommentBox = React.createClass({

	propTypes: {
	
	},

	handleSubmit(event){
		let commentBox = React.findDOMNode(this.refs.commentInput);
		this.props.commentOnPoll(commentBox.value);
		commentBox.value = '';
	},

	render(){
		return (
			<div className="input-group input-group-lg">
				<input ref="commentInput" type="text" className="form-control" placeholder="Enter comment..."/>
				<span className="input-group-btn">
					<input className="btn btn-primary" type="submit" onClick={this.handleSubmit}>Comment</button>
				</span>
			</div>
		)
	}
});

