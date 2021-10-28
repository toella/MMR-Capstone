package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.my_Playlist;
import com.example.demo.repository.playlistRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class PlaylistController {
	
	@Autowired
	private playlistRepository playlistRepository;
//	@RequestMapping("/")
	@GetMapping("/Playlist")
	public List<my_Playlist>showAllPlaylists(){
		return playlistRepository.findAll();
	}



//creatr employee rest api
public my_Playlist createPlaylist(@RequestBody my_Playlist playlist) {
	return playlistRepository.save(playlist);
}

}