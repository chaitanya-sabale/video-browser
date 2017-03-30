
import React, {Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {term:''};
  }

  render(){   //each class component must have render() which returns some JSX
    //return <input onChange={this.onInputChange} />;
    //Event Handler ES6 way is here:
    return (
              <div className ="search-bar">
                <input
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />

              </div>
            );
    }

  onInputChange(term) {
      this.setState({term});
      this.props.onSearchTermChange(term);
    }

  //Create Event Handle
  //onInputChange(event){
  //  console.log(event.target.value);
  //}
}

export default SearchBar;
