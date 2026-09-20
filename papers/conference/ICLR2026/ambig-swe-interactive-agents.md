# Ambig-SWE: Interactive Agents to Overcome Underspecificity in Software Engineering

## Why It Matters

Ambig-SWE makes underspecified software-engineering requests a first-class interactive benchmark. It separates the ability to notice missing information from the ability to ask a useful question and then use the answer correctly.

## Proactivity Signal

The agent must decide that an issue cannot safely be solved as written, initiate targeted clarification, and integrate the user's response into repository-level execution instead of silently guessing.

## Evaluation Setup

The benchmark derives underspecified tasks from SWE-bench Verified and evaluates three stages: underspecificity detection, clarification-question generation, and post-interaction task completion. The paper reports that interaction can improve performance by as much as 74% over non-interactive settings on underspecified inputs.

## Key Limitations

Missing information is constructed from otherwise solvable issues and supplied by a simulator. The benchmark does not fully capture inconsistent stakeholders, evolving requirements, or the social cost of repeated questions in real teams.

## Use For

Use this for interactive coding-agent benchmarks, ambiguity detection, clarification quality, tool-use safety under incomplete specifications, and end-to-end ask-then-act evaluation.
