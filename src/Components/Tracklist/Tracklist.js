import React from 'react';
import "./Tracklist.css";
import Track from "../Track/Track";

function TrackList() {
    const TrackList = (props) => {
        return (
            <div className='TrackList'>
                {props.tracks.map((track) => {
                    return (
                        <Track
                            track={track}
                            key={track.id}
                            onAdd={props.onAdd}
                            isRemoval={props.isRemoval}
                            onRemove={props.onRemove}
                        />
                    );
                })}
            </div>
        );
    };

};

export default TrackList;