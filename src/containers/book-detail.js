import React, {Component} from 'react';
import  {connect} from 'react-redux';

class BookDetail extends Component{
  render(){
    //reducer inital run passes that is null. Need a base case
    if(!this.props.book){
      return <div>Select a book to get started!</div>
    }

    return(
      <div>
        <h3>Details for: </h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    book: state.activeBook  //reference from rootReducer
  };
}

export default connect(mapStateToProps)(BookDetail);
