package com.cactora.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.cactora.entity.Cactus;
import com.cactora.repository.CactusRepository;

@Service
public class CactusService {

    private final CactusRepository cactusRepository;

    public CactusService(CactusRepository cactusRepository) {
        this.cactusRepository = cactusRepository;
    }

    public List<Cactus> getAllCacti() {
        return cactusRepository.findAll();
    }

    public Optional<Cactus> getCactusById(Long id) {
        return cactusRepository.findById(id);
    }

    public Cactus createCactus(Cactus cactus) {
        return cactusRepository.save(cactus);
    }

    public Cactus updateCactus(Long id, Cactus updatedCactus) {
        return cactusRepository.findById(id)
                .map(existingCactus -> {

                    existingCactus.setCommonName(
                            updatedCactus.getCommonName()
                    );

                    existingCactus.setScientificName(
                            updatedCactus.getScientificName()
                    );

                    existingCactus.setCategory(
                            updatedCactus.getCategory()
                    );

                    existingCactus.setOrigin(
                            updatedCactus.getOrigin()
                    );

                    existingCactus.setSunlight(
                            updatedCactus.getSunlight()
                    );

                    existingCactus.setWatering(
                            updatedCactus.getWatering()
                    );

                    existingCactus.setSoil(
                            updatedCactus.getSoil()
                    );

                    existingCactus.setTemperature(
                            updatedCactus.getTemperature()
                    );

                    existingCactus.setHumidity(
                            updatedCactus.getHumidity()
                    );

                    existingCactus.setSize(
                            updatedCactus.getSize()
                    );

                    existingCactus.setGrowthRate(
                            updatedCactus.getGrowthRate()
                    );

                    existingCactus.setFlowering(
                            updatedCactus.getFlowering()
                    );

                    existingCactus.setDifficulty(
                            updatedCactus.getDifficulty()
                    );

                    existingCactus.setDescription(
                            updatedCactus.getDescription()
                    );

                    existingCactus.setCareInstructions(
                            updatedCactus.getCareInstructions()
                    );

                    existingCactus.setImageUrl(
                            updatedCactus.getImageUrl()
                    );

                    return cactusRepository.save(existingCactus);
                })
                .orElseThrow(
                        () -> new RuntimeException(
                                "Cactus not found with id: " + id
                        )
                );
    }

    public void deleteCactus(Long id) {
        if (!cactusRepository.existsById(id)) {
            throw new RuntimeException(
                    "Cactus not found with id: " + id
            );
        }

        cactusRepository.deleteById(id);
    }
}