
package com.cactora.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class GeminiChatRequestDto {

    @NotBlank(message = "Message cannot be empty")
    @Size(max = 2000, message = "Message must not exceed 2000 characters")
    private String message;

    public GeminiChatRequestDto() {
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
