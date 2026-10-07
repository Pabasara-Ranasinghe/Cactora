package com.cactora.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cactora.entity.Cactus;

public interface CactusRepository extends JpaRepository<Cactus, Long> {

    Optional<Cactus> findByScientificName(String scientificName);
}