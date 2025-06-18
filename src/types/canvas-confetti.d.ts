declare module 'canvas-confetti';

/**
 * Launches confetti with the given options.
 * @param options Optional configuration object for confetti.
 * @returns Promise<void> | null
 *
 * Options:
 * - particleCount?: number
 * - angle?: number
 * - spread?: number
 * - startVelocity?: number
 * - decay?: number
 * - gravity?: number
 * - drift?: number
 * - flat?: boolean
 * - ticks?: number
 * - origin?: { x?: number; y?: number }
 * - colors?: string[]
 * - shapes?: string[]
 * - scalar?: number
 * - zIndex?: number
 * - disableForReducedMotion?: boolean
 */
declare function confetti(options?: {
  particleCount?: number;
  angle?: number;
  spread?: number;
  startVelocity?: number;
  decay?: number;
  gravity?: number;
  drift?: number;
  flat?: boolean;
  ticks?: number;
  origin?: { x?: number; y?: number };
  colors?: string[];
  shapes?: string[];
  scalar?: number;
  zIndex?: number;
  disableForReducedMotion?: boolean;
}): Promise<void> | null;

/**
 * Allows setting a custom Promise implementation for confetti.
 */
declare namespace confetti {
  let Promise: PromiseConstructor;
}

export = confetti;
