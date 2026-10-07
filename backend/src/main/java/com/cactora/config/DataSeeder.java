package com.cactora.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.cactora.entity.Cactus;
import com.cactora.repository.CactusRepository;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner seedCacti(CactusRepository cactusRepository) {

        return args -> {

            if (cactusRepository.count() > 0) {
                return;
            }

            cactusRepository.save(
                    new Cactus(
                            "Golden Barrel Cactus",
                            "Echinocactus grusonii",
                            "Barrel",
                            "Mexico",
                            "Full Sun",
                            "Low",
                            "Well-draining cactus soil",
                            "18°C - 30°C",
                            "Low",
                            "Up to 1 meter",
                            "Slow",
                            "Yellow flowers in mature plants",
                            "Easy",
                            "A popular round cactus known for its golden spines and distinctive barrel shape.",
                            "Provide plenty of sunlight, use well-draining soil, and allow the soil to dry completely between watering.",
                            null
                    )
            );

            cactusRepository.save(
                    new Cactus(
                            "Bunny Ears Cactus",
                            "Opuntia microdasys",
                            "Opuntia",
                            "Mexico",
                            "Full Sun",
                            "Low",
                            "Sandy, well-draining cactus soil",
                            "18°C - 32°C",
                            "Low",
                            "Up to 60 cm",
                            "Moderate",
                            "Yellow flowers during warm seasons",
                            "Easy",
                            "A distinctive cactus with flat, rounded pads that resemble bunny ears.",
                            "Place in bright sunlight, avoid overwatering, and use soil with excellent drainage.",
                            null
                    )
            );

            cactusRepository.save(
                    new Cactus(
                            "Christmas Cactus",
                            "Schlumbergera truncata",
                            "Forest",
                            "Brazil",
                            "Bright Indirect",
                            "Moderate",
                            "Organic, well-draining soil",
                            "15°C - 24°C",
                            "Moderate",
                            "Up to 30 cm",
                            "Moderate",
                            "Pink, red, white, or purple flowers",
                            "Moderate",
                            "A popular forest cactus known for its beautiful flowers that often appear around the holiday season.",
                            "Provide bright indirect light, moderate watering, and slightly humid conditions.",
                            null
                    )
            );

            cactusRepository.save(
                    new Cactus(
                            "Fairy Castle Cactus",
                            "Acanthocereus tetragonus",
                            "Columnar",
                            "North America and Central America",
                            "Full Sun",
                            "Low",
                            "Well-draining cactus soil",
                            "18°C - 30°C",
                            "Low",
                            "Up to 2 meters",
                            "Moderate",
                            "White flowers on mature plants",
                            "Easy",
                            "A tall branching cactus with multiple upright stems that resemble the towers of a fairy castle.",
                            "Give it plenty of sunlight, use fast-draining soil, and allow the soil to dry between watering.",
                            null
                    )
            );

            cactusRepository.save(
                    new Cactus(
                            "Moon Cactus",
                            "Gymnocalycium mihanovichii",
                            "Grafted",
                            "South America",
                            "Bright Light",
                            "Low",
                            "Well-draining cactus soil",
                            "18°C - 27°C",
                            "Low",
                            "Up to 15 cm",
                            "Slow",
                            "Small flowers may appear on mature plants",
                            "Moderate",
                            "A colorful grafted cactus commonly found with bright red, yellow, orange, or pink tops.",
                            "Provide bright light without excessive direct heat, water sparingly, and ensure excellent drainage.",
                            null
                    )
            );

            cactusRepository.save(
                    new Cactus(
                            "Old Man Cactus",
                            "Cephalocereus senilis",
                            "Columnar",
                            "Mexico",
                            "Full Sun",
                            "Low",
                            "Sandy, well-draining cactus soil",
                            "18°C - 30°C",
                            "Low",
                            "Up to 12 meters outdoors",
                            "Slow",
                            "Pinkish or white flowers on mature plants",
                            "Easy",
                            "A tall columnar cactus covered with long white hairs that give it its distinctive appearance.",
                            "Provide strong sunlight, excellent drainage, and allow the soil to dry completely between watering.",
                            null
                    )
            );

            System.out.println("🌵 Cactora cactus dataset seeded successfully.");
        };
    }
}