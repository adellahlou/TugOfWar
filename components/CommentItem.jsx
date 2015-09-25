CommentItem = React.creatClass({
	render(){
		return (
			<li className="comment">{this.props.comment.text} 
				<span className=""></span></li>
		)
	}
});