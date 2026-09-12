# StreamReady: Learning What to Answer and When in Long Streaming Videos

## Why It Matters

StreamReady treats answer timing as part of correctness rather than an implementation detail. A streaming assistant should neither guess before visual evidence appears nor wait so long that an otherwise correct answer loses real-time value.

## Proactivity Signal

After receiving a standing question, the model continuously monitors the unfolding video and uses a learnable readiness token and lightweight head to decide whether sufficient evidence is available. It answers only when the readiness gate fires; otherwise it keeps observing.

## Evaluation Setup

The paper introduces ProReady-QA, which annotates answer-evidence windows for proactive multi-turn questions across local and global contexts. Answer Readiness Score applies asymmetric early and late penalties and combines with correctness as effective accuracy. StreamReady reports the best accuracy and readiness score across all five ProReady-QA tasks, improving over the strongest comparison by about 3 points in accuracy and 9 points in readiness score on average, and is also evaluated on eight additional streaming and offline long-video benchmarks.

## Key Limitations

The trigger follows a question already supplied by the user, so this is proactive answer timing rather than unsolicited need discovery. Readiness supervision is weakly derived from representation similarity, and fixed evidence windows cannot fully capture situations where several response times would be acceptable to different users.

## Use For

Use this for streaming-video answer gating, wait-versus-answer policies, early/late intervention penalties, evidence-window annotation, and multimodal agents that must remain silent until observations justify a response.
