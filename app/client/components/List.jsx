/**
*   List.jsx - Used for displaying dynamic list items
*/

List = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
    createItem: React.PropTypes.func
  },

  createItemDefault(item){
    return (
      <li className="list-group-item">{item}</li>
    );
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