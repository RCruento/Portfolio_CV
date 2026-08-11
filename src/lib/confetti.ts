import confetti from "canvas-confetti";

export function fireConfetti() {
  try {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#10b981", "#06b6d4", "#6366f1", "#f43f5e", "#f59e0b"],
    });
  } catch {
    // Ignore confetti errors
  }
}
