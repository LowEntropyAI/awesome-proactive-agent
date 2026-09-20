# Realtime-Venus: A Full-Duplex Interaction System with Asynchronous Delegation

## Why It Matters

Realtime-Venus combines continuous audio or audiovisual interaction with asynchronous tool execution. Its dual-loop design addresses a practical proactive-agent problem: maintaining a responsive conversational front end while slower reasoning continues in the background.

## Proactivity Signal

The model is post-trained on proactive full-duplex trajectories and jointly controls listening, speaking, interruption handling, and delegation. Background results can be inserted into the live conversation without forcing the user to restart or poll the agent.

## Evaluation Setup

Separate 9B audio and omni models are evaluated across eight video and eight audio understanding or spoken-QA benchmarks. On Full-Duplex-Bench v1.5, the audio model responds to 75% of user interruptions and reports continuation rates of 97%, 88%, and 86% under backchannels, other-directed speech, and background speech.

## Key Limitations

Most reported metrics measure understanding, interruption handling, and conversational continuity rather than whether self-initiated content was necessary or well timed. The dual-loop system also complicates attribution between the interaction model and delegated back end.

## Use For

Use this for full-duplex proactive assistants, fast-and-slow architectures, asynchronous tool delegation, interruption robustness, and audio-visual conversational control.
