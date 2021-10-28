import React, { Component } from 'react';
import PlaylistService from '../service/PlaylistService';

class Playlist extends Component {

    constructor(props){
        super(props)

        this.state = {
            Playlist:[]

        }
    }
    
componentDidMount(){
    PlaylistService.getPlaylist().then((res) => {
        this.setState({playlist: res.data});
    });
}
    render() {
        return (
            <div>
                <h2 className="textCenter">Playlist</h2>
                <div className= "row">
                    <table className = "table tableStriped tableBordered">
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
                                    <tr key ={Playlist.id}>
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

