# Do GUI Agents Know When Not to Act? Enabling Conflict-Aware Termination for Multimodal GUI Agents

## Why It Matters

This paper exposes execution-biased overcompliance in GUI agents: systems that are strong on ordinary tasks may continue acting when the instruction is internally inconsistent or contradicts the visible interface. It makes safe termination a first-class agent capability rather than treating every instruction as executable.

## Proactivity Signal

Before and during execution, CONFLICTGUARD checks instruction logic and GUI-side evidence. When feasibility fails, conditional action modulation shifts the policy from continued tool use toward termination, yielding an explicit act-versus-stop decision instead of blindly pursuing the user's original request.

## Evaluation Setup

CONFLICTGUI contains 2,364 feasible instructions, 1,122 instruction-internal conflicts, and 1,174 instruction-GUI context conflicts. A disjoint test split contains 1,800 feasible, 822 internal-conflict, and 874 GUI-conflict instances; experiments across five GUI agents measure conflict-task success while checking that normal-task performance is preserved.

## Key Limitations

This is proactive restraint inside a user-requested task rather than unsolicited need discovery. Conflict cases are benchmark-constructed, and termination alone may not be the best user experience when an agent could instead explain the conflict, request clarification, or propose a recoverable alternative.

## Use For

Use this for GUI-agent abstention, instruction-feasibility verification, overcompliance analysis, act-versus-stop policies, multimodal conflict detection, and safety evaluations that preserve ordinary task performance.
