
package com.cactora.controller;

import com.cactora.dto.CactusSubmissionRequest;
import com.cactora.dto.CactusSubmissionResponse;
import com.cactora.service.CactusSubmissionService;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/submissions")
public class CactusSubmissionController {

    private final CactusSubmissionService submissionService;

    public CactusSubmissionController(
            CactusSubmissionService submissionService
    ) {
        this.submissionService = submissionService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CactusSubmissionResponse createSubmission(
            @Valid @RequestBody CactusSubmissionRequest request,
            Authentication authentication
    ) {
        return submissionService.createSubmission(
                request,
                authentication
        );
    }

    @GetMapping("/my")
    public List<CactusSubmissionResponse> getMySubmissions(
            Authentication authentication
    ) {
        return submissionService.getMySubmissions(authentication);
    }
}