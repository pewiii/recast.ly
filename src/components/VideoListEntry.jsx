
var VideoListEntry = (props) => (
  <div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={item(props).thumbnails.default.url} alt={item(props).thumbnails.title} />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">{item(props).title}</div>
      <div className="video-list-entry-detail">{item(props).description}</div>
    </div>
  </div>
);

var item = function(props) {
  return props.video.snippet;
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
