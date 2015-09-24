CommentItem = React.createClass({
	render(){
		return (
			<li className="comment">{this.props.comment.text} 
				<span className="date">{this.props.comment.createdOn}</span>
			</li>
		);
	}
});