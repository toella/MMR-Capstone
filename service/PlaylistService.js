import axios from "axios";

const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/Playlist"

class PlaylistService{

    getPlaylist(){
        return axios.get(STUDENT_API_BASE_URL);
    }
    saveSong(playlist){
        return axios.post(STUDENT_API_BASE_URL, playlist);
    }

}
export default new PlaylistService();