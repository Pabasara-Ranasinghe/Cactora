
package com.cactora.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class CactusSubmissionRequest {

    @NotBlank(message = "Common name is required")
    @Size(max = 150)
    private String commonName;

    @NotBlank(message = "Scientific name is required")
    @Size(max = 200)
    private String scientificName;

    @Size(max = 100)
    private String category;

    @Size(max = 200)
    private String origin;

    @Size(max = 200)
    private String sunlight;

    @Size(max = 200)
    private String watering;

    @Size(max = 200)
    private String soil;

    @Size(max = 200)
    private String temperature;

    @Size(max = 200)
    private String humidity;

    @Size(max = 150)
    private String size;

    @Size(max = 150)
    private String growthRate;

    @Size(max = 200)
    private String flowering;

    @Size(max = 100)
    private String difficulty;

    @Size(max = 2000)
    private String description;

    @Size(max = 3000)
    private String careInstructions;

    @Size(max = 1000)
    private String imageUrl;

    public String getCommonName() { return commonName; }
    public void setCommonName(String commonName) { this.commonName = commonName; }

    public String getScientificName() { return scientificName; }
    public void setScientificName(String scientificName) { this.scientificName = scientificName; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getOrigin() { return origin; }
    public void setOrigin(String origin) { this.origin = origin; }

    public String getSunlight() { return sunlight; }
    public void setSunlight(String sunlight) { this.sunlight = sunlight; }

    public String getWatering() { return watering; }
    public void setWatering(String watering) { this.watering = watering; }

    public String getSoil() { return soil; }
    public void setSoil(String soil) { this.soil = soil; }

    public String getTemperature() { return temperature; }
    public void setTemperature(String temperature) { this.temperature = temperature; }

    public String getHumidity() { return humidity; }
    public void setHumidity(String humidity) { this.humidity = humidity; }

    public String getSize() { return size; }
    public void setSize(String size) { this.size = size; }

    public String getGrowthRate() { return growthRate; }
    public void setGrowthRate(String growthRate) { this.growthRate = growthRate; }

    public String getFlowering() { return flowering; }
    public void setFlowering(String flowering) { this.flowering = flowering; }

    public String getDifficulty() { return difficulty; }
    public void setDifficulty(String difficulty) { this.difficulty = difficulty; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getCareInstructions() { return careInstructions; }
    public void setCareInstructions(String careInstructions) { this.careInstructions = careInstructions; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
}