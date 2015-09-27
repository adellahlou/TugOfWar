/**
*	CommentItem.jsx
*/

CommentItem = React.createClass({

	propTypes: {
		comment : React.PropTypes.object
	},


	render(){
		return (
			<li className="list-group-item comment">
				<h3>{this.props.comment.username}</h3>
					{this.props.comment.text} 
				<span className="date">{this.props.comment.createdOn}</span>
			</li>
		);
	}
});

