/**
* 
*/

FilteredList = React.createClass({
  propTypes: {
    initialItems: React.PropTypes.array.isRequired
  },


  componentDidMount(){
    this.setState({filteredItems: this.props.initialItems});
  },


  /**
  *
  */
  filterList(event){
    var updatedList = this.state.initialItems;

    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });

    this.setState({filteredItems: updatedList});
  },


  /**
  *
  */
  getInitialState(){
     return { filteredItems: []};
  },

  /**
  *
  */
  render(){
    return (
      <div className="filter-list">
        {/*<input type="text" placeholder="Search" onChange={this.filterList}/>*/}
        <List items={this.props.initialItems} selectPoll={this.props.selectPoll} createItem={this.props.createItem}/>
      </div>
    );
  }
});




