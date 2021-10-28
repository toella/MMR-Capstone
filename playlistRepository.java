package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.my_Playlist;

@Repository
public interface playlistRepository extends JpaRepository<my_Playlist, Long>{

}
