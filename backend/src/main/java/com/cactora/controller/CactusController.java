package com.cactora.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cactora.entity.Cactus;
import com.cactora.service.CactusService;

@RestController
@RequestMapping("/api/cacti")
@CrossOrigin(origins = "http://localhost:5173")
public class CactusController {

    private final CactusService cactusService;

    public CactusController(CactusService cactusService) {
        this.cactusService = cactusService;
    }

    @GetMapping
    public ResponseEntity<List<Cactus>> getAllCacti() {
        return ResponseEntity.ok(cactusService.getAllCacti());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cactus> getCactusById(@PathVariable Long id) {
        return cactusService.getCactusById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Cactus> createCactus(@RequestBody Cactus cactus) {
        return ResponseEntity.ok(cactusService.createCactus(cactus));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cactus> updateCactus(
            @PathVariable Long id,
            @RequestBody Cactus cactus
    ) {
        return ResponseEntity.ok(
                cactusService.updateCactus(id, cactus)
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCactus(@PathVariable Long id) {
        cactusService.deleteCactus(id);
        return ResponseEntity.noContent().build();
    }
}