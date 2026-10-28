package com.cactora.controller;

import com.cactora.dto.GeminiChatRequestDto;
import com.cactora.dto.GeminiChatResponseDto;
import com.cactora.service.GeminiService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin(
        origins = {
                "http://localhost:5173",
                "http://localhost:5174",
                "http://localhost:5175",
                "http://localhost:5176",
                "http://localhost:5177",
                "http://localhost:5178"
        }
)
public class GeminiController {

    private final GeminiService geminiService;

    public GeminiController(GeminiService geminiService) {
        this.geminiService = geminiService;
    }

    @PostMapping("/chat")
    public ResponseEntity<GeminiChatResponseDto> chat(
            @Valid @RequestBody GeminiChatRequestDto request
    ) {
        String answer = geminiService.askCactora(
                request.getMessage().trim()
        );

        return ResponseEntity.ok(
                new GeminiChatResponseDto(answer)
        );
    }
}