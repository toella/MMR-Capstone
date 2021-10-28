import React, { Component } from 'react';
import PlaylistService from '../service/PlaylistService';
import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:8080/api/v1/Playlist"
})

class Playlist extends Component {
    state = {
        Playlist: []
    }

    AddSong = this.AddSong.bind(this);

    constructor() {
        super();
        api.get("/").then(res => {
            console.log(res.data)
            this.setState({ Playlist: res.data })
        })
    }
    AddSong() {
        this.props.history.push('/Playlist')
    }
    componentDidMount() {
        PlaylistService.getPlaylist().then((res) => {
            this.setState({ playlist: res.data });
        });
    }

    render() {
        return (
            <div>
                <h2 className="textCenter">Playlist</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.saveSong}>Add Song</button>
                    <table className="table tableStriped tableBordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Playlist Name</th>
                                .                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Playlist.map(
                                    Playlist =>
                                        <tr key={Playlist.id}>
                                            <td>{Playlist.title}</td>
                                            <td> {Playlist.genre}</td>
                                            <td>{Playlist.playlist}</td>
                                        </tr>

                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Playlist;

