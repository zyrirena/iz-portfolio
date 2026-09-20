---
title: "Wellness Coach AI"
slug: "wellness-coach-ai"
summary: "An AI-powered behavioral coaching platform that helps users develop healthier habits through personalized wellness guidance, meal planning, exercise recommendations, and motivational support."
status: "In Development"
featured: true
order: 1
date: "2025-01-15"
tech:
  - "Next.js"
  - "TypeScript"
  - "Python"
  - "FastAPI"
  - "OpenAI GPT-4"
  - "PostgreSQL"
  - "Redis"
  - "Tailwind CSS"
github: "https://github.com/zyrirena/LeanMindAI"
demo: "https://lean-mind-ai.vercel.app/en"
detail: "LeanMind is a wellness AI I built with regulatory compliance shipped from day one — not bolted on later. It addresses six specific laws: New York's AI Companion Models Law, California SB 243, Illinois and Tennessee's professional-impersonation laws, COPPA, and FTC endorsement rules. Every mitigation is documented and testable — persistent AI disclosure, published crisis protocol, agent honesty guards, 18+ age gate, no fabricated social proof."
cover: "/images/projects/wellness-coach-ai/cover.jpg"
coverVideo: "/videos/wellness-coach-ai/cover.mp4"
screenshots:
  - "/images/projects/wellness-coach-ai/screenshot-1.jpg"
  - "/images/projects/wellness-coach-ai/screenshot-2.jpg"
  - "/images/projects/wellness-coach-ai/screenshot-3.jpg"
video: ""
---

## Overview

Wellness Coach AI is a behavioral coaching platform that combines large language models with proven techniques from behavioral psychology to help users build sustainable, healthy habits. Unlike one-size-fits-all wellness apps, it adapts to each user's goals, lifestyle, and progress over time.

## The problem

Most wellness apps assume users already know what to do — they just need a tracker. In practice, the hardest part of behavior change isn't knowledge; it's the daily friction of figuring out *what to do today*, staying motivated through setbacks, and adjusting when life gets in the way.

## What it does

- **Personalized wellness plans.** Users describe their goals, preferences, and constraints. The coach generates a realistic plan and adjusts it as the user learns what works.
- **Meal planning that actually fits.** Suggestions account for dietary restrictions, time available, budget, and what's already in the fridge.
- **Adaptive exercise recommendations.** Workouts scale based on reported energy, prior session performance, and available equipment.
- **Motivational, not preachy.** The coach pulls from motivational interviewing techniques rather than nagging or shaming.

## Architecture

The application is structured around a clear separation between the coaching reasoning layer and the user experience:

- **Frontend** — Next.js with TypeScript and Tailwind, optimized for fast, friendly interactions.
- **Backend** — A Python FastAPI service handles plan generation, retrieval, and personalization.
- **Memory layer** — Embeddings stored in PostgreSQL (pgvector) let the coach recall prior context without sending the entire history to the model.
- **Safety layer** — Domain-specific guardrails check generated advice before it reaches users — especially around food, exercise, and any health-related content.

## Responsible AI considerations

Wellness is a sensitive domain. A few design choices reflect that:

- The system never claims medical authority and recommends professional help where appropriate.
- All outputs are logged and reviewable; users can see *why* a recommendation was made.
- Personalization data stays scoped to the user and is never used to train shared models.

## What's next

Current work is focused on improving the long-term adherence loop — specifically, helping users return to the app after a missed day without feeling judged. Early tests suggest this is the single biggest predictor of meaningful behavior change.

> *This is a placeholder case study. Replace this text with your real project details, results, and learnings as the project evolves.*
