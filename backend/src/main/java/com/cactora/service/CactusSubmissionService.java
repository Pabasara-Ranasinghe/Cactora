
package com.cactora.service;

import com.cactora.dto.CactusSubmissionRequest;
import com.cactora.dto.CactusSubmissionResponse;
import com.cactora.entity.CactusSubmission;
import com.cactora.entity.SubmissionStatus;
import com.cactora.entity.User;
import com.cactora.repository.CactusSubmissionRepository;
import com.cactora.repository.UserRepository;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class CactusSubmissionService {

    private final CactusSubmissionRepository submissionRepository;
    private final UserRepository userRepository;

    public CactusSubmissionService(
            CactusSubmissionRepository submissionRepository,
            UserRepository userRepository
    ) {
        this.submissionRepository = submissionRepository;
        this.userRepository = userRepository;
    }

    @Transactional
    public CactusSubmissionResponse createSubmission(
            CactusSubmissionRequest request,
            Authentication authentication
    ) {
        String email = authentication.getName();

        User user = userRepository.findByEmailIgnoreCase(email)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.UNAUTHORIZED,
                        "Authenticated user was not found"
                ));

        String scientificName = request.getScientificName().trim();

        boolean duplicate = submissionRepository
                .existsByScientificNameIgnoreCaseAndStatusIn(
                        scientificName,
                        List.of(
                                SubmissionStatus.PENDING,
                                SubmissionStatus.APPROVED
                        )
                );

        if (duplicate) {
            throw new ResponseStatusException(
                    HttpStatus.CONFLICT,
                    "A pending or approved submission already exists for this scientific name"
            );
        }

        CactusSubmission submission = new CactusSubmission();

        submission.setCommonName(request.getCommonName().trim());
        submission.setScientificName(scientificName);
        submission.setCategory(request.getCategory());
        submission.setOrigin(request.getOrigin());
        submission.setSunlight(request.getSunlight());
        submission.setWatering(request.getWatering());
        submission.setSoil(request.getSoil());
        submission.setTemperature(request.getTemperature());
        submission.setHumidity(request.getHumidity());
        submission.setSize(request.getSize());
        submission.setGrowthRate(request.getGrowthRate());
        submission.setFlowering(request.getFlowering());
        submission.setDifficulty(request.getDifficulty());
        submission.setDescription(request.getDescription());
        submission.setCareInstructions(request.getCareInstructions());
        submission.setImageUrl(request.getImageUrl());
        submission.setSubmittedBy(user);

        CactusSubmission saved = submissionRepository.save(submission);

        return toResponse(saved);
    }

    @Transactional(readOnly = true)
    public List<CactusSubmissionResponse> getMySubmissions(
            Authentication authentication
    ) {
        String email = authentication.getName();

        User user = userRepository.findByEmailIgnoreCase(email)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.UNAUTHORIZED,
                        "Authenticated user was not found"
                ));

        return submissionRepository
                .findBySubmittedByIdOrderBySubmittedAtDesc(user.getId())
                .stream()
                .map(this::toResponse)
                .toList();
    }

    private CactusSubmissionResponse toResponse(
            CactusSubmission submission
    ) {
        CactusSubmissionResponse response =
                new CactusSubmissionResponse();

        response.setId(submission.getId());
        response.setCommonName(submission.getCommonName());
        response.setScientificName(submission.getScientificName());
        response.setCategory(submission.getCategory());
        response.setOrigin(submission.getOrigin());
        response.setSunlight(submission.getSunlight());
        response.setWatering(submission.getWatering());
        response.setSoil(submission.getSoil());
        response.setTemperature(submission.getTemperature());
        response.setHumidity(submission.getHumidity());
        response.setSize(submission.getSize());
        response.setGrowthRate(submission.getGrowthRate());
        response.setFlowering(submission.getFlowering());
        response.setDifficulty(submission.getDifficulty());
        response.setDescription(submission.getDescription());
        response.setCareInstructions(submission.getCareInstructions());
        response.setImageUrl(submission.getImageUrl());
        response.setStatus(submission.getStatus());
        response.setSubmittedByName(
                submission.getSubmittedBy().getFullName()
        );
        response.setSubmittedByEmail(
                submission.getSubmittedBy().getEmail()
        );
        response.setSubmittedAt(submission.getSubmittedAt());
        response.setReviewedAt(submission.getReviewedAt());

        return response;
    }
}