
package com.cactora.dto;

import com.cactora.entity.SubmissionStatus;
import java.time.LocalDateTime;

public class CactusSubmissionResponse {

    private Long id;
    private String commonName;
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
    private String description;
    private String careInstructions;
    private String imageUrl;
    private SubmissionStatus status;
    private String submittedByName;
    private String submittedByEmail;
    private LocalDateTime submittedAt;
    private LocalDateTime reviewedAt;

    public CactusSubmissionResponse() {
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

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

    public SubmissionStatus getStatus() { return status; }
    public void setStatus(SubmissionStatus status) { this.status = status; }

    public String getSubmittedByName() { return submittedByName; }
    public void setSubmittedByName(String submittedByName) { this.submittedByName = submittedByName; }

    public String getSubmittedByEmail() { return submittedByEmail; }
    public void setSubmittedByEmail(String submittedByEmail) { this.submittedByEmail = submittedByEmail; }

    public LocalDateTime getSubmittedAt() { return submittedAt; }
    public void setSubmittedAt(LocalDateTime submittedAt) { this.submittedAt = submittedAt; }

    public LocalDateTime getReviewedAt() { return reviewedAt; }
    public void setReviewedAt(LocalDateTime reviewedAt) { this.reviewedAt = reviewedAt; }
}