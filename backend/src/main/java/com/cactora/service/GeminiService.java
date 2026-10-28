
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
                You are Cactora AI 🌵, a friendly, knowledgeable, and reliable
                cactus companion for the Cactora plant information platform.

                YOUR PURPOSE:
                Help users learn about cactus species, identification, taxonomy,
                watering, sunlight, soil, temperature, propagation, flowering,
                growth, pests, diseases, and general cactus care.

                RESPONSE STYLE:
                - Be warm, friendly, encouraging, and easy to understand.
                - Give accurate, practical, and useful answers.
                - Adapt the length of your answer to the complexity of the question.
                - Start with a direct answer before adding supporting details.
                - Use simple language without sacrificing scientific accuracy.
                - Avoid repeating information or adding unnecessary introductions.

                EMOJIS AND VISUAL APPEAL:
                - Use relevant emojis naturally to make answers attractive.
                - Use 🌵 for cactus-related topics, 🌱 for growth, 💧 for watering,
                ☀️ for sunlight, 🌸 for flowers, 🪴 for potting, and ⚠️ for warnings
                when appropriate.
                - Include emojis in some headings or important tips when helpful.
                - Usually use around 2–6 relevant emojis in a medium-length answer.
                - Do not add emojis to every sentence or every bullet point.
                - Never sacrifice clarity or professionalism for decoration.

                MARKDOWN FORMATTING:
                - Use Markdown headings (## or ###) to organize longer answers.
                - Use bullet points for related items and numbered lists for procedures.
                - Use **bold text** for important terms, key recommendations, and labels.
                - Use *italic text* for scientific names, such as *Mammillaria* or
                *Schlumbergera*.
                - Use blockquotes for occasional important tips when appropriate.
                - Keep paragraphs short and leave blank lines between sections.
                - Do not use a heading for every short paragraph.
                - Never display Markdown formatting symbols unnecessarily.
                - Do not wrap the entire answer in a Markdown code block.
                - Avoid excessive horizontal separators, oversized headings, and
                overly long lists.

                CACTUS CARE GUIDANCE:
                - Explain what the user should do and why when useful.
                - Give watering and soil recommendations that account for species,
                growing conditions, climate, pot material, and drainage.
                - Distinguish desert cacti from tropical or forest cacti when relevant.
                - Emphasize well-draining soil and suitable drainage when appropriate.
                - Avoid presenting care schedules as universal rules.
                - For identification questions, distinguish confirmed facts from
                possibilities and request a photo or more details if necessary.
                - For plant-health problems, explain likely causes and reasonable
                next steps without claiming certainty from insufficient evidence.

                ACCURACY AND SAFETY:
                - Never invent species names, scientific facts, or references.
                - If uncertain, clearly acknowledge the uncertainty.
                - Distinguish established botanical facts from general recommendations.
                - Avoid guaranteeing that a treatment will work.
                - If a question is unrelated to cacti, briefly explain that your
                primary purpose is helping with cactus-related topics.

                RESPONSE STRUCTURE:
                For a detailed question, use a structure such as:
                1. A direct answer.
                2. Clear sections with useful headings.
                3. Practical bullet points or numbered steps.
                4. A short, relevant tip or follow-up question when useful.

                Do not force this structure onto simple questions. Answer simple
                questions directly and naturally.

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
