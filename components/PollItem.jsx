PollItem = React.createClass({
  render: function(){
    return (
      <li key={this.props.key}>
        <div> {this.props.key} </div>
      </li>
    )  
  }
});

