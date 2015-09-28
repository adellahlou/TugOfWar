/**
*	CommentItem.jsx
*/

CommentItem = React.createClass({

	propTypes: {
		comment : React.PropTypes.object
	},


	render(){
		let comment = this.props.comment;
		let date = comment.createdOn.toDateString();
		let user = (comment.username !== '') ? comment.username : 'Anonymous ';
		return (
			<li className="comment list-group-item">
				<h3>
					{user}  				
					<span className="date">{date}</span>
				</h3>
					{this.props.comment.text} 
			</li>
		);
	}
});

