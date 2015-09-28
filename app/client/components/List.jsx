/**
*   List.jsx - Used for displaying dynamic list items
*/

List = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
    createItem: React.PropTypes.func,
    clickHandler: React.PropTypes.func
  },


  /**
  *
  */
  createItemDefault(item){
    return (
      <li className="list-group-item" onClick={this.props.clickHandler}>{item}</li>
    );
  },


  /**
  *
  */
  render: function() {
    let factory = this.props.createItem || this.createItemDefault;
    let ListItems = this.props.items.map(factory);

    return (
      <div className='list-group'>
        {ListItems}
      </div>
    );  
  }
});