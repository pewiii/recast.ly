import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentlyPlaying: exampleVideoData[1],
      videoList: exampleVideoData
    };
    this.currentVideo = this.currentVideo.bind(this);
    this.searchInput = this.searchInput.bind(this);

  }

  currentVideo(video) {
    this.setState ({
      currentlyPlaying: video
    });
  }


  searchInput(query) {
    searchYouTube(query, (incomingList) => {
      console.log(incomingList);
      //this.setState({videoList: incomingList});
    });
  }




  render () {
    return <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em><Search searchHandler={this.searchInput}/></h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><em>videoPlayer</em><VideoPlayer video={this.state.currentlyPlaying}/></h5></div>
        </div>
        <div className="col-md-5">
          <div><h5><em>videoList</em><VideoList videos={this.state.videoList} videoSelector={this.currentVideo}/></h5></div>
        </div>
      </div>
    </div>;
  }
}





// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
