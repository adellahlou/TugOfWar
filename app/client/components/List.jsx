/**
*   List.jsx - Used for displaying dynamic list items
*/

List = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
    createItem: React.PropTypes.func
  },

  createItemDefault(){
    return null;
  },

  render: function() {
    let ListItems = this.props.items.map(this.props.createItem);

    return (
      <div className='list-group'>
        {ListItems}
      </div>
    );  
  }
});