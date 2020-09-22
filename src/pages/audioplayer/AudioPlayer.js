import React from 'react';
import tracksInfo from './tracks';
import assign from 'lodash/assign';
import './audioplayer.css';

class AudioPlayer extends React.Component {

    constructor() {
        super()
        this.state = {
            track: {
                id: '',
                url: '',
                name: '',
            },
            player: {
                play: false,
                pause: false,
                mute: false
            }
        }

        this.muteTrack = this.muteTrack.bind(this);
    }

    updateState(_state) {
        var me = this || {},
            state = _state || {},
            newState = assign({}, me.state, state);
        me.setState(newState);
    }

    resetPlayer() {
        var elem = document.getElementById('audioPlayer');
        this.updateState(
            {
                player: {
                    play: false,
                    pause: false,
                    mute: false
                }
            }
        );
        elem.pause();
    }

    componentDidMount() {
        var track = tracksInfo[0] || {},
            newState = {
                track: track
            },
            elem = document.getElementById('audioPlayer');
        elem.addEventListener('ended', this.resetPlayer.bind(this));

        this.updateState.call(this, newState);
    }

    componentDidUpdate() {
        var state = this.state || {},
            player = state.player,
            elem = document.getElementById('audioPlayer');

        if (player.play) {
            elem.play();
        }

        if (elem.ended) {
            elem.pause();
            elem.currentTime = 0;
        }

        if (player.mute) {
            //elem.mute();
        }

    }

    shouldComponentUpdate(nextProps, nextState) {
        var state = this.state || {},
            currId = state.track && state.track.id,
            nextId = nextState && nextState.track && nextState.track.id;


        if (state.player.mute !== nextState.player.mute) {
            return true;
        }

        if (state.player.play === true && nextState.player.play === false) {
            return true;
        }

        if (state.player.play === false && state.player.pause === false) {
            return true;
        }

        if (currId === nextId && (state.player.pause !== nextState.player.pause)) {
            return true;
        }

        if (currId === nextId) {
            return false;
        }

        return true;
    }

    playTrack(_item) {
        var state = this.state || {},
            track = state.track,
            currTrack = _item || track;

        var newState = {
            track: currTrack,
            player: assign({}, state.player, {
                pause: false,
                play: true
            })
        };

        this.updateState(newState);
    }
    pauseTrack() {
        var state = this.state || {},
            player = state.player,
            track = state.track,
            play = player.play,
            pause = player.pause,
            newState = {
                track: track,
                player: assign({}, state.player, {
                    play: !play,
                    pause: !pause
                })
            },
            elem = document.getElementById('audioPlayer');
        if (play === true && pause === false) {
            elem.pause();
        }
        if (play === false && pause === true) {
            elem.play();
        }
        this.updateState(newState);
    }
    muteTrack() {
        var state = this.state || {},
            player = state.player,
            newState = {
                player: assign({}, state.player, {
                    mute: !player.mute
                })
            };
        this.updateState(newState);
    }

    render() {
        var me = this,
            currState = this.state || {},
            track = currState.track || {},
            url = track.url,
            name = currState.track.name,
            muted = currState.player.mute,
            renderTracks = tracksInfo.map(function (item) {

                var isCurrent = track.id === item.id,
                    play = isCurrent && currState.player.play,
                    pause = isCurrent && currState.player.pause,
                    playClass = (isCurrent && currState.player.play) ? 'play' : '',
                    pauseClass = (isCurrent && currState.player.pause) ? 'pause' : '';

                return (
                    <li key={`li-${item.id}`} className={`${playClass} ${pauseClass}`}>
                        <div className="anchor">
                            {(!play) && <span className="iconPlay" onClick={me.playTrack.bind(me, item)}>&#9654;</span>}
                            {(play && !pause) && <span className="iconPause" onClick={me.pauseTrack.bind(me)}>||</span>}
                            <span className="text">{item.name}</span>
                        </div>
                    </li>
                );
            });

        return (
            <div className="audio-player">
                <h1>Audio Player</h1>
                <section className="default-list">
                    <figure className="mar_0">
                        <figcaption className="pad_10_0_10_0">{name}</figcaption>
                        <audio id="audioPlayer" controls src={url} muted={muted}>
                            Your browser does not support the
                            <code>audio</code> element.
                        </audio>
                    </figure>
                    <h4>
                        TrackList
                        <span className={`iconMute ${muted}`} onClick={me.muteTrack.bind(me)}>Mute</span>
                    </h4>

                    <ul>
                        {renderTracks}
                    </ul>
                </section>
            </div>
        );
    }
};

export default AudioPlayer;
