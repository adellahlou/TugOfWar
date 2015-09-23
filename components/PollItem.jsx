PollItem = React.createClass({
  render: function(){
    return (
      <li key={item}>
        <div> {this.props.key} </div>
      </li>
    )  
  }
});

React.render(<FilteredList/>, document.getElementById('react-target'));