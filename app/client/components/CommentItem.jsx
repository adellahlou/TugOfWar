/**
*	CommentItem.jsx
*/

CommentItem = React.createClass({

	propTypes: {
		comment : React.PropTypes.object
	},


	render(){
		let date = this.props.comment.createdOn.toDateString();

		return (
			<li className="comment list-group-item">
				<h3>
					{this.props.comment.username} 				
					<span className="date">{date}</span>
				</h3>
					{this.props.comment.text} 
			</li>
		);
	}
});

