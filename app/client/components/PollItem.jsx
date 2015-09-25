PollItem = React.createClass({
  
  handleSelection(event){
  	this.props.selectPoll(this.props.item);
  },

  render() {
    return (
      <a href='#' className="list-group-item" key={this.props.item._id} onClick={this.handleSelection}>
        #{this.props.item.tag} 
      </a>
    );
  }
});

