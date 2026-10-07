package com.cactora.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "cacti")
public class Cactus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String commonName;

    @Column(nullable = false, unique = true)
    private String scientificName;

    private String category;

    private String origin;

    private String sunlight;

    private String watering;

    private String soil;

    private String temperature;

    private String humidity;

    private String size;

    private String growthRate;

    private String flowering;

    private String difficulty;

    @Column(length = 2000)
    private String description;

    @Column(length = 3000)
    private String careInstructions;

    private String imageUrl;

    public Cactus() {
    }

    public Cactus(
            String commonName,
            String scientificName,
            String category,
            String origin,
            String sunlight,
            String watering,
            String soil,
            String temperature,
            String humidity,
            String size,
            String growthRate,
            String flowering,
            String difficulty,
            String description,
            String careInstructions,
            String imageUrl
    ) {
        this.commonName = commonName;
        this.scientificName = scientificName;
        this.category = category;
        this.origin = origin;
        this.sunlight = sunlight;
        this.watering = watering;
        this.soil = soil;
        this.temperature = temperature;
        this.humidity = humidity;
        this.size = size;
        this.growthRate = growthRate;
        this.flowering = flowering;
        this.difficulty = difficulty;
        this.description = description;
        this.careInstructions = careInstructions;
        this.imageUrl = imageUrl;
    }

    public Long getId() {
        return id;
    }

    public String getCommonName() {
        return commonName;
    }

    public void setCommonName(String commonName) {
        this.commonName = commonName;
    }

    public String getScientificName() {
        return scientificName;
    }

    public void setScientificName(String scientificName) {
        this.scientificName = scientificName;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getSunlight() {
        return sunlight;
    }

    public void setSunlight(String sunlight) {
        this.sunlight = sunlight;
    }

    public String getWatering() {
        return watering;
    }

    public void setWatering(String watering) {
        this.watering = watering;
    }

    public String getSoil() {
        return soil;
    }

    public void setSoil(String soil) {
        this.soil = soil;
    }

    public String getTemperature() {
        return temperature;
    }

    public void setTemperature(String temperature) {
        this.temperature = temperature;
    }

    public String getHumidity() {
        return humidity;
    }

    public void setHumidity(String humidity) {
        this.humidity = humidity;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getGrowthRate() {
        return growthRate;
    }

    public void setGrowthRate(String growthRate) {
        this.growthRate = growthRate;
    }

    public String getFlowering() {
        return flowering;
    }

    public void setFlowering(String flowering) {
        this.flowering = flowering;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCareInstructions() {
        return careInstructions;
    }

    public void setCareInstructions(String careInstructions) {
        this.careInstructions = careInstructions;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}