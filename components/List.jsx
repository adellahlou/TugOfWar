/**
*
*/
List = React.createClass({
  render: function(){
    return (
      <ul>
      {
        this.props.items.map(function(item) {
          return <PollItem key={item} />
        })
       }
      </ul>
    )  
  }
});


FilteredList = React.createClass({
  propTypes: {

  },

  /**
  *
  */
  filterList: function(event){
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  },

  /**
  *
  */
  getInitialState: function(){
     return {
       polls: []
     }
  },


  /**
  *
  */
  render: function(){
    return (
      <div className="filter-list">
        <input type="text" placeholder="Search" onChange={this.filterList}/>
        <List items={this.state.items}/>
      </div>
    );
  }
});




