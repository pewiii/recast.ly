import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.check = props.check ? props.check : searchYouTube;
    this.state = {
      currentlyPlaying: {id: {videoId: ''}, snippet: {title: '', description: ''} },
      videoList: [],
      search: ''
    };

    this.currentVideo = this.currentVideo.bind(this);
    this.searchInput = this.searchInput.bind(this);
    this.searchChange = this.searchChange.bind(this);

  }

  componentDidMount() {
    this.check('muffin', (data) => {
      //console.log(data);
      this.setState ({
        currentlyPlaying: data[0],
        videoList: data
      });
    });
  }




  currentVideo(video) {
    this.setState ({
      currentlyPlaying: video
    });
  }


  searchInput(query) {
    this.check(query, (incomingList) => {
      this.setState({videoList: incomingList});
    });
  }

  searchChange(val) {
    this.setState({ search: val });
    this.searchInput(this.state.search);
  }


  render () {
    return <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em><Search searchHandler={this.searchInput} change={this.searchChange}/></h5></div>
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
