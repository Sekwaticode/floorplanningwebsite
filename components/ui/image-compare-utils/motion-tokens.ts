/** Shared spring presets for the image compare slider. */
export const motionTokens = {
  spring: {
    /** Quick, tight follow for the divider. */
    snappy: { type: "spring" as const, visualDuration: 0.3, bounce: 0.12 },
    /** Softer shape changes: the handle capsule and orientation turns. */
    morph: { type: "spring" as const, visualDuration: 0.42, bounce: 0.2 },
  },
} as const;
