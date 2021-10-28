// import React, { Component } from 'react'
// import PlaylistService from '../services/PlaylistService';

// class UpdatePlaylistComponent extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             id: this.props.match.params.id,
//             title: '',
//             artist: '',
//             genre: ''
//         }
//         this.changeTitle = this.changeTitle.bind(this);
//         this.changeArtist = this.changeArtist.bind(this);
//         this.updateGenre = this.updateGenre.bind(this);
//     }

//     componentDidMount() {
//         EmployeeService.getEmployeeById(this.state.id).then((res) => {
//             let employee = res.data;
//             this.setState({
//                 firstName: employee.firstName,
//                 lastName: employee.lastName,
//                 emailId: employee.emailId
//             });
//         });
//     }

//     updatePlaylist = (e) => {
//         e.preventDefault();
//         let playlist = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId };
//         console.log('playlist => ' + JSON.stringify(Playlist));
//         console.log('id => ' + JSON.stringify(this.state.id));
//         PlaylistService.UpdatePlaylistComponent(playlist, this.state.id).then(res => {
//             this.props.history.push('/Playlist');
//         });
//     }

//     changeTitleHandler = (event) => {
//         this.setState({ firstName: event.target.value });
//     }

//     changeArtistHandler = (event) => {
//         this.setState({ lastName: event.target.value });
//     }

//     changeGenreHandler = (event) => {
//         this.setState({ emailId: event.target.value });
//     }

//     cancel() {
//         this.props.history.push('/Playlist');
//     }

//     render() {
//         return (
//             <div>
//                 <br></br>
//                 <div className="container">
//                     <div className="row">
//                         <div className="card col-md-6 offset-md-3 offset-md-3">
//                             <h3 className="text-center">Update </h3>
//                             <div className="card-body">
//                                 <form>
//                                     <div className="form-group">
//                                         <label> Title </label>
//                                         <input placeholder="Title" name="Title" className="form-control"
//                                             value={this.state.title} onChange={this.changeTitleHandler} />
//                                     </div>
//                                     <div className="form-group">
//                                         <label> Artist </label>
//                                         <input placeholder="Artist" name="Artist" className="form-control"
//                                             value={this.state.artist} onChange={this.changeArtistHandler} />
//                                     </div>
//                                     <div className="form-group">
//                                         <label> <Genre></Genre> </label>
//                                         <input placeholder="Email Address" name="emailId" className="form-control"
//                                             value={this.state.genre} onChange={this.changeGenreHandler} />
//                                     </div>

//                                     <button className="btn btn-success" onClick={this.updatePlaylist}>Save</button>
//                                     <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         )
//     }
// }

// export default UpdatePlaylistComponent