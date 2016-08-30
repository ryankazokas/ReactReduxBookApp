//containers are smart component
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux'; //flows through all reducers in applications

class BookList extends Component{
  renderList(){
    return this.props.books.map((book) =>{
      return(
        <li className="list-group-item" key={book.title} onClick={() => this.props.selectBook(book)}>{book.title}</li>
      )
    })
  }

  render(){
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  //whatever is returned will show up as props inside of BookList
  return{
    books: state.books
  };
}

//anything returned from this function will end up as props
//on the Booklist container
function mapDispatchToProps(dispatch){
  //whenever is select book is called, the result
  //should be passed to all of our reducers.
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//promote booklist from a component to a container - it needs to know
//about this new dispatch method, selectbook. Make it available
//as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
