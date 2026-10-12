
package com.cactora.repository;

import com.cactora.entity.CactusSubmission;
import com.cactora.entity.SubmissionStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CactusSubmissionRepository
        extends JpaRepository<CactusSubmission, Long> {

    List<CactusSubmission> findBySubmittedByIdOrderBySubmittedAtDesc(
            Long userId
    );

    List<CactusSubmission> findByStatusOrderBySubmittedAtAsc(
            SubmissionStatus status
    );

    boolean existsByScientificNameIgnoreCaseAndStatusIn(
            String scientificName,
            List<SubmissionStatus> statuses
    );
}