// import React, { Component } from 'react'
// import PlaylistService from '../services/PlaylistService'

// class ViewPlaylistComponent extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             id: this.props.match.params.id,
//             employee: {}
//         }
//     }

//     componentDidMount() {
//         PlaylistService.getPlaylistById(this.state.id).then(res => {
//             this.setState({ playlist: res.data });
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <br></br>
//                 <div className="card col-md-6 offset-md-3">
//                     <h3 className="text-center"> View Playlist</h3>
//                     <div className="card-body">
//                         <div className="row">
//                             <label> Title </label>
//                             <div> {this.state.playlist.firstName}</div>
//                         </div>
//                         <div className="row">
//                             <label> Artist </label>
//                             <div> {this.state.playlist.lastName}</div>
//                         </div>
//                         <div className="row">
//                             <label> Genre </label>
//                             <div> {this.state.playlist.emailId}</div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         )
//     }
// }

// export default ViewPlaylistComponent