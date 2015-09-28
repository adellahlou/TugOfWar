/**
* 
*/

FilteredList = React.createClass({
  propTypes: {
    initialItems: React.PropTypes.array.isRequired,
    createItem: React.PropTypes.func,
    itemClickHandler : React.PropTypes.func
  },

  /**
  *
  */
  getInitialState(){
     return { filteredItems: []};
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
  render(){
//"filter-list col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6"

    return (
      <div className="row">
        <div className="filter-list col-lg-offset-3 col-lg-6">
          <input type="text" placeholder="Search"/>
          <List items={this.props.initialItems} itemClickHandler={this.props.selectPoll} createItem={this.props.createItem}/>
        </div>
      </div>
    );
  }
});




