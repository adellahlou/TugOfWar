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
      <div className="row">
        <div className="filter-list col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6">
          {/*<input type="text" placeholder="Search" onChange={this.filterList}/>*/}
          <input type="text" placeholder="Search"/>
          <List polls={this.props.initialItems} selectPoll={this.props.selectPoll}/>
        </div>
      </div>
    );
  }
});




