import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetails from'./components/video_details';
import _ from 'lodash';

const API_KEY='AIzaSyDCQpLUyCF8F4XblDxmGdeIbWH4eZVzz0o';



class App extends Component{
  constructor(props){
    super(props);
    this.state={ videos:[],
      selectedVideo:null
    };
//putting YTSearch inside the constructor helps to display initial videos before user searches something.
    this.videoSearch({term:'React.js'})
}


  videoSearch(term){
    //YTSearch(Argument1=object, Argument2=Callback Fn)
    YTSearch( {key:API_KEY, term:term}, (videos) => {
      this.setState({
        videos:videos,
        selectedVideo:videos[0]
      });
    })
  }


  render() {
    const videoSearch= _.debounce( (term) => {this.videoSearch(term)},300 );

    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container')) ;
