/**
*   List.jsx - Used for displaying dynamic list items
*/

List = React.createClass({
  propTypes: {
    polls: React.PropTypes.array.isRequired
  },

  render: function() {
    let ListItems = this.props.polls.map((item) => {
          return <PollItem item={item} selectPoll={this.props.selectPoll} />
    });

    return (
      <div className='list-group'>
        {ListItems}
      </div>
    );  
  }
});