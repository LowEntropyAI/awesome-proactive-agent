# BlindToChange: AI Agents Can Find Changes When Asked But Do They Look When Needed?

[Paper](https://arxiv.org/abs/2610.41435) · [Code](https://github.com/Anirudh-Phukan/blind-to-change) · [Dataset](https://huggingface.co/datasets/Anirudh-Phukan/blind-to-change) · First posted 2026-10-30 · Checked 2026-11-02. Primary paper and available artifact listings reviewed; no rerun.

## Why It Matters

Correctly retrieving a fact on demand need not mean an assistant checks that fact when making a recommendation.

## Proactivity Signal

Tests whether a search agent checks for an unmentioned real-world change that could invalidate its recommendation.

## Evaluation Setup

Direct and indirect probes share an underlying update. The paper reports gaps up to 27.5 points and analyzes tool traces to locate missed verification steps.

## Key Limitations

The benchmark uses constructed requests and recent Wikidata events. It measures self-initiated verification within a request, not unsolicited monitoring or reminders.

## Use For

Test implicit fact checking in web-enabled recommendation agents.
