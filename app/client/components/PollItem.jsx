PollItem = React.createClass({
  
  handleSelection(event){
  	this.props.selectPoll(this.props.item);
  },

  render() {
    return (
      <a href='#' className="list-group-item thumbnail pollItem" key={this.props.item._id} onClick={this.handleSelection}>
        {this.props.item.tag} 
      </a>
    );
  }
});

