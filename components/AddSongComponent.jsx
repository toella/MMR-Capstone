import React, { Component } from 'react'
import PlaylistService from '../service/PlaylistService'

export default class AddSong extends Component {
    constructor(props) {
        super(props)

        this.state = {
            songTitle: '',
            artist:'',
            genre:'',
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this)
        this.changeArtistHandler = this.changeArtistHandler.bind(this)
        this.changeGenreHandler = this.changeGenreHandler.bind(this)
        this.saveSong = this.saveSong.bind(this);
    }
    saveSong = (e) => {
        e.preventDefault();
        let playlist = {songTitle: this.state.songTitle, artist: this.state.artist, genre: this.setState.genre};
        console.log('my_playlist =>' + JSON.stringify(playlist));

        PlaylistService.saveSong(playlist).then(res =>{
            this.props.history.push('/my_playlist')
        });
    }
    changeTitleHandler= (event) =>{
        this.setState({songTitle: event.target.value});
    }
    changeArtistHandler = (event) => {
        this.setState({ artist: event.target.value });
    }
    changeGenreHandler = (event) => {
        this.setState({ genre: event.target.value });
    }
    cancel(){
        this.props.history.push('/Playlist')
    }



    render() {
        return (
            <div>
                <div className ='container'>
                    <div className='row'>
                        <div className ='card col-md-6 offset-md-3'>
                            <h3 className = 'text-center'> Add Song</h3>
                            <div className = 'card-body'>
                                <form>
                                    <div className = 'form-group'>
                                        <label>Song Title</label>
                                        <input placeholder= 'SongTitle' name='SongTitle' className='form-control'
                                            value={this.state.songTitle} onChange={this.changeTitleHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Artist</label>
                                        <input placeholder='Artist' name='Artist' className='form-control'
                                            value={this.state.artist} onChange={this.changeArtistHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Genre</label>
                                        <input placeholder='Genre' name='Genre' className='form-control'
                                            value={this.state.genre} onChange={this.changeGenreHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.AddSong}>Add Song</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}style={{marginleft: "10px"}}>Cancel</button>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
