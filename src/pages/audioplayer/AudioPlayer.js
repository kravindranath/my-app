import React from 'react';
import tracksInfo from './tracks';
import './audioplayer.css';

class AudioPlayer extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            url : '',
            name : '',
            muted : false
        }
    }

    componentDidMount() {
        var tracks = tracksInfo[0] || {},
            url   = tracks.url,
            name  = tracks.name;

        this.setState({
            url  : url,
            name : name
        });
    }

    renderTracks() {
        var renderArr = [];

        tracksInfo.forEach(function (item, i) {
            renderArr.push(
                <li key={`li-${i}`}>
                    <a>
                        <span className="iconPlay">&#9658;</span>
                        <span className="iconPause">&#61;</span>
                        <span className="text">{item.name}</span>
                    </a>
                </li>
            );
        });

        return renderArr;

    }

    render() {
        var currState = this.state || {},
            url   = currState.url,
            name  = currState.name,
            muted = currState.muted,
            renderTracks = this.renderTracks();

        return (
            <div className="audio-player">
                <h1>Audio Player</h1>
                <section className="default-list">
                    <figure className="mar_0">
                        <figcaption className="pad_10_0_10_0">{name}</figcaption>
                        <audio controls src={url} muted={muted}>
                            Your browser does not support the
                            <code>audio</code> element.
                        </audio>
                    </figure>
                    <h4>TrackList</h4>
                    <ul>
                        {renderTracks}
                    </ul>
                </section>
            </div>
        );
    }
};

export default AudioPlayer;
