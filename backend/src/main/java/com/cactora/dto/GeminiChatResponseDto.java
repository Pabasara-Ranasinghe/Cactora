
package com.cactora.dto;

public class GeminiChatResponseDto {

    private String answer;

    public GeminiChatResponseDto() {
    }

    public GeminiChatResponseDto(String answer) {
        this.answer = answer;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }
}
