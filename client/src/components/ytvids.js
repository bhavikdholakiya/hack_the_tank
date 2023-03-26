import React from 'react';
import YouTube from 'react-youtube';

class MyVideos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoIds: [],
    };
  }

  componentDidMount() {
    const youtubeLinks = [
      'https://www.youtube.com/watch?v=zIczY7YXPDg',
      'https://www.youtube.com/watch?v=Cwubrlf8wUk',
      'https://www.youtube.com/watch?v=-yFp1qPCwh4',
    ];

    const videoIds = youtubeLinks.map(this.getYouTubeVideoId);
    this.setState({ videoIds });
  }

  getYouTubeVideoId(link) {
    const videoIdRegex = /(?:\/|%3D|v=)([0-9A-Za-z_-]{11}).*/;
    const match = link.match(videoIdRegex);
    return match ? match[1] : null;
  }

  render() {
    const { videoIds } = this.state;

    if (!videoIds.length) {
      return <div>Loading videos...</div>;
    }

    const opts = {
      height: '400',
      width: '550',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return (
      <div style={{display:'grid'}}>
        {videoIds.map((videoId) => (
          <YouTube key={videoId} videoId={videoId} opts={opts} />
        ))}
      </div>
    );
  }
}

export default MyVideos;
