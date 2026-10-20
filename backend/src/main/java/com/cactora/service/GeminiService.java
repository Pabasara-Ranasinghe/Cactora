
package com.cactora.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@Service
public class GeminiService {

    @Value("${gemini.api.key}")
    private String apiKey;

    @Value("${gemini.api.model}")
    private String model;

    private final RestTemplate restTemplate = new RestTemplate();
    private final ObjectMapper objectMapper = new ObjectMapper();

    public String askCactora(String message) {
        String url =
                "https://generativelanguage.googleapis.com/v1beta/models/"
                + model + ":generateContent";

        String prompt = """
                You are Cactora AI, a helpful assistant for a cactus
                information platform.

                Answer questions about cactus species, identification,
                watering, sunlight, soil, temperature, propagation,
                and common cactus problems.

                Be friendly, clear, and practical. If you are uncertain
                about a species or diagnosis, say so rather than guessing.
                For questions unrelated to cacti, briefly explain that
                your main purpose is helping with cactus-related topics.

                User question:
                """ + message;

        Map<String, Object> requestBody = Map.of(
                "contents", List.of(
                        Map.of(
                                "parts", List.of(
                                        Map.of("text", prompt)
                                )
                        )
                )
        );

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("x-goog-api-key", apiKey);

        HttpEntity<Map<String, Object>> request =
                new HttpEntity<>(requestBody, headers);

        try {
            ResponseEntity<String> response = restTemplate.exchange(
                    url,
                    HttpMethod.POST,
                    request,
                    String.class
            );

            JsonNode root = objectMapper.readTree(response.getBody());
            JsonNode textNode = root.at(
                    "/candidates/0/content/parts/0/text"
            );

            if (textNode.isMissingNode() || textNode.isNull()
                    || textNode.asText().isBlank()) {
                throw new IllegalStateException(
                        "Gemini returned an empty response."
                );
            }

            return textNode.asText();

        } catch (RestClientException exception) {
            throw new IllegalStateException(
                    "Unable to contact Gemini. Check the API key, "
                    + "model availability, quota, and network connection.",
                    exception
            );
        } catch (java.io.IOException exception) {
            throw new IllegalStateException(
                    "Unable to read the Gemini response.",
                    exception
            );
        }
    }
}
