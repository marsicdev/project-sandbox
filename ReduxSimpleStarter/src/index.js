import React, { Component } from 'react';
import _ from 'lodash'
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'ADD_YOUTUBE_API_KEY_HERE'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('pop hits 2017')

  }

  videoSearch(term) {

    const options = { term, key: API_KEY };

    YTSearch(options, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    })
  }

  render() {
    // Using lodash to debounce search
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 3000)

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
