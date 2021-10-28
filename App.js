


// import React from 'react';
// import './App.css';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import Playlist from './components/Playlist';
// import HeaderComponents from './components/HeaderComponents';
// import Footercomponent from './components/Footercomponent';
// import AddSong from './components/AddSongComponent';

// // import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
// // import ViewEmployeeComponent from './components/ViewEmployeeComponent';

// function App() {
//   return (
//     <div>
//       <Router>
//         <HeaderComponent />
//         <div className="container">
//           <Switch>
// //          <Route path = "/" exact component = {Playlist} ></Route>
// //          <Route path="/Playlist" component={Playlist} ></Route>
// //          <Route path="/AddSong/:id" component={AddSongComponent} ></Route>
//             <Route path="/view-playlist/:id" component={ViewEmployeeComponent}></Route>
//             <Route path="/update-playlist/:id" component={UpdateEmployeeComponent}></Route>
// //        </Switch>
//         </div>
//         <FooterComponent />
//       </Router>
//     </div>

//   );
// }

// export default App;

import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Playlist from './components/Playlist';
import HeaderComponents from './components/HeaderComponents';
import Footercomponent from './components/Footercomponent';
import AddSong from './components/AddSongComponent';


function App() {
  return (
    <div>
      <Router>
        
         <HeaderComponents/>
           <div className="container">
              <Switch> 
                <Route path = "/" exact component = {Playlist} ></Route>
                <Route path="/Playlist" component={Playlist} ></Route>
                <Route path="/AddSong" exact component={AddSong} ></Route>
                <Playlist/>
              </Switch>
           </div>
         <Footercomponent/>
      </Router>
    </div>
  );
}


export default App;
