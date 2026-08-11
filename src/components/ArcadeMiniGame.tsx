"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, RotateCcw, Shield, Trophy, Zap, Award } from "lucide-react";
import { fireConfetti } from "@/lib/confetti";

interface Invader {
  x: number;
  y: number;
  width: number;
  height: number;
  alive: boolean;
  type: number;
}

interface Bullet {
  x: number;
  y: number;
  dy: number;
  isPlayer: boolean;
}

interface Bunker {
  x: number;
  y: number;
  width: number;
  height: number;
  hp: number;
}

export function ArcadeMiniGame() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<"IDLE" | "PLAYING" | "GAMEOVER">("IDLE");
  const [score, setScore] = useState(0);
  const [wave, setWave] = useState(1);
  const [shield, setShield] = useState(100);

  const gameStateRef = useRef(gameState);
  const scoreRef = useRef(0);
  const waveRef = useRef(1);
  const shieldRef = useRef(100);

  useEffect(() => {
    gameStateRef.current = gameState;
  }, [gameState]);

  const handleStartGame = () => {
    scoreRef.current = 0;
    waveRef.current = 1;
    shieldRef.current = 100;
    setScore(0);
    setWave(1);
    setShield(100);
    setGameState("PLAYING");

    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 150);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let cannonX = canvas.width / 2;
    let bullets: Bullet[] = [];

    let invaders: Invader[] = [];
    let invaderDir = 1;
    let lastShootTime = 0;

    const initInvaders = () => {
      invaders = [];
      const rows = 4;
      const cols = 10;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          invaders.push({
            x: 60 + c * 62,
            y: 40 + r * 32,
            width: 36,
            height: 22,
            alive: true,
            type: r,
          });
        }
      }
    };

    initInvaders();

    let bunkers: Bunker[] = [
      { x: 120, y: canvas.height - 90, width: 70, height: 16, hp: 15 },
      { x: canvas.width / 2 - 35, y: canvas.height - 90, width: 70, height: 16, hp: 15 },
      { x: canvas.width - 190, y: canvas.height - 90, width: 70, height: 16, hp: 15 },
    ];

    // Pixel-exact Mouse & Touch Tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const mouseX = (e.clientX - rect.left) * scaleX;
      cannonX = Math.max(30, Math.min(canvas.width - 30, mouseX));
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const touchX = (e.touches[0].clientX - rect.left) * scaleX;
        cannonX = Math.max(30, Math.min(canvas.width - 30, touchX));
      }
    };

    const handleShoot = () => {
      if (gameStateRef.current === "PLAYING") {
        const now = Date.now();
        if (now - lastShootTime > 200) {
          bullets.push({ x: cannonX, y: canvas.height - 50, dy: -10, isPlayer: true });
          lastShootTime = now;
        }
      }
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("touchmove", handleTouchMove);
    canvas.addEventListener("click", handleShoot);

    let animId: number;

    // Main Loop
    const loop = () => {
      animId = requestAnimationFrame(loop);

      ctx.fillStyle = "#05060f";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Starfield
      ctx.fillStyle = "rgba(0, 240, 255, 0.25)";
      for (let i = 0; i < 30; i++) {
        const sx = (Math.sin(i * 45 + Date.now() * 0.001) * 0.5 + 0.5) * canvas.width;
        const sy = ((i * 35 + Date.now() * 0.05) % canvas.height);
        ctx.fillRect(sx, sy, 2, 2);
      }

      if (gameStateRef.current === "PLAYING") {
        // Wave speed scaling: starts slow (0.5) and accelerates with wave number
        const speed = 0.5 + (waveRef.current - 1) * 0.25;

        let hitWall = false;
        invaders.forEach((inv) => {
          if (!inv.alive) return;
          inv.x += invaderDir * speed;
          if (inv.x > canvas.width - 50 || inv.x < 15) {
            hitWall = true;
          }
        });

        if (hitWall) {
          invaderDir *= -1;
          invaders.forEach((inv) => {
            inv.y += 10;
            if (inv.y > canvas.height - 110 && inv.alive) {
              setGameState("GAMEOVER");
            }
          });
        }

        // Auto Laser Fire Rate for Player Cannon
        const now = Date.now();
        if (now - lastShootTime > 180) {
          bullets.push({ x: cannonX, y: canvas.height - 50, dy: -10, isPlayer: true });
          lastShootTime = now;
        }

        // Alien Random Fire
        if (Math.random() < 0.02 + waveRef.current * 0.004) {
          const aliveInvaders = invaders.filter((inv) => inv.alive);
          if (aliveInvaders.length > 0) {
            const randomInvader = aliveInvaders[Math.floor(Math.random() * aliveInvaders.length)];
            bullets.push({ x: randomInvader.x + 18, y: randomInvader.y + 20, dy: 3.0 + waveRef.current * 0.2, isPlayer: false });
          }
        }

        // Update Bullets
        bullets.forEach((b) => (b.y += b.dy));

        // Player Bullets <-> Invaders
        bullets.forEach((b) => {
          if (!b.isPlayer) return;
          invaders.forEach((inv) => {
            if (
              inv.alive &&
              b.x >= inv.x &&
              b.x <= inv.x + inv.width &&
              b.y >= inv.y &&
              b.y <= inv.y + inv.height
            ) {
              inv.alive = false;
              b.y = -999;
              scoreRef.current += 100 * waveRef.current;
              setScore(scoreRef.current);
            }
          });
        });

        // Bullets <-> Bunkers
        bullets.forEach((b) => {
          bunkers.forEach((bunk) => {
            if (
              bunk.hp > 0 &&
              b.x >= bunk.x &&
              b.x <= bunk.x + bunk.width &&
              b.y >= bunk.y &&
              b.y <= bunk.y + bunk.height
            ) {
              bunk.hp -= 1;
              b.y = b.isPlayer ? -999 : 999;
            }
          });
        });

        // Alien Bullets <-> Player Cannon
        bullets.forEach((b) => {
          if (b.isPlayer) return;
          if (b.y >= canvas.height - 45 && Math.abs(b.x - cannonX) < 25) {
            b.y = 999;
            shieldRef.current -= 12;
            setShield(Math.max(0, shieldRef.current));

            if (shieldRef.current <= 0) {
              setGameState("GAMEOVER");
            }
          }
        });

        // Check Wave Clear -> Advance to Next Wave!
        if (invaders.every((inv) => !inv.alive)) {
          waveRef.current += 1;
          setWave(waveRef.current);
          shieldRef.current = Math.min(100, shieldRef.current + 30);
          setShield(shieldRef.current);
          fireConfetti();
          initInvaders();
        }

        bullets = bullets.filter((b) => b.y > -20 && b.y < canvas.height + 20);
      }

      // Draw Bunkers
      bunkers.forEach((bunk) => {
        if (bunk.hp > 0) {
          ctx.fillStyle = `rgba(0, 255, 136, ${bunk.hp / 15})`;
          ctx.fillRect(bunk.x, bunk.y, bunk.width, bunk.height);
        }
      });

      // Draw Invaders
      invaders.forEach((inv) => {
        if (!inv.alive) return;
        ctx.fillStyle = inv.type === 0 ? "#ff007f" : inv.type === 1 ? "#00f0ff" : "#ffea00";
        ctx.fillRect(inv.x, inv.y, inv.width, inv.height);
        ctx.fillStyle = "#000000";
        ctx.fillRect(inv.x + 6, inv.y + 6, 6, 6);
        ctx.fillRect(inv.x + inv.width - 12, inv.y + 6, 6, 6);
      });

      // Draw Bullets
      bullets.forEach((b) => {
        ctx.fillStyle = b.isPlayer ? "#00f0ff" : "#ff007f";
        ctx.fillRect(b.x - 2, b.y, 4, 12);
      });

      // Draw Player Cannon (Strictly follows mouse position)
      if (gameStateRef.current !== "GAMEOVER") {
        ctx.fillStyle = "#00f0ff";
        ctx.fillRect(cannonX - 22, canvas.height - 35, 44, 14);
        ctx.fillRect(cannonX - 6, canvas.height - 45, 12, 10);
      }
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("click", handleShoot);
    };
  }, []);

  const isPlaying = gameState === "PLAYING";

  return (
    <motion.div
      ref={containerRef}
      layout
      initial={false}
      animate={{ height: isPlaying ? 540 : 360 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden hud-card border-2 border-cyan-400 flex flex-col justify-between p-4 bg-black shadow-2xl my-8"
    >
      {/* Top Game HUD Bar */}
      <div className="flex items-center justify-between z-10 font-mono-label text-xs font-bold text-white border-b border-cyan-400/30 pb-2 px-2">
        <div className="flex items-center gap-4">
          <span className="text-amber-400 flex items-center gap-1">
            <Trophy size={16} />
            SCORE: {score.toString().padStart(6, "0")}
          </span>
          <span className="text-cyan-400 font-extrabold flex items-center gap-1">
            <Award size={16} />
            WAVE {wave}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-rose-500 font-black tracking-widest hidden sm:inline">
            SPACE INVADERS ARENA
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Shield size={16} className="text-emerald-400" />
          <span className="text-emerald-400">SHIELD: {shield}%</span>
        </div>
      </div>

      {/* Canvas Container */}
      <div className="relative flex-1 w-full overflow-hidden my-2 rounded-xl border border-cyan-400/30">
        <canvas
          ref={canvasRef}
          width={780}
          height={isPlaying ? 450 : 280}
          className="w-full h-full cursor-crosshair"
        />

        {/* Start Screen Overlay */}
        {gameState === "IDLE" && (
          <div className="absolute inset-0 z-20 bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center gap-4">
            <div className="p-3 rounded-full bg-rose-500/20 text-rose-500 border border-rose-500">
              <Zap size={28} />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-display font-black text-2xl text-white uppercase">
                SPACE INVADERS ARENA
              </h3>
              <p className="font-mono-label text-xs text-muted-foreground max-w-md">
                La souris guide directement le canon • Tir automatique • Vitesse progressive à chaque vague !
              </p>
            </div>
            <button
              onClick={handleStartGame}
              className="hud-btn-primary px-8 py-4 rounded-xl text-sm flex items-center gap-2 cursor-pointer shadow-lg shadow-rose-500/50"
            >
              <Play size={18} className="fill-white" />
              LANCER LA PARTIE (START GAME)
            </button>
          </div>
        )}

        {/* Game Over Screen */}
        {gameState === "GAMEOVER" && (
          <div className="absolute inset-0 z-20 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center gap-4">
            <h3 className="font-display font-black text-3xl text-rose-500 uppercase tracking-widest">
              GAME OVER
            </h3>
            <div className="font-mono-label text-sm space-y-1 text-white">
              <p>SCORE FINAL : <span className="text-amber-400 font-bold">{score}</span></p>
              <p>VAGUES ATTEINTES : <span className="text-cyan-400 font-bold">WAVE {wave}</span></p>
            </div>
            <button
              onClick={handleStartGame}
              className="hud-btn-cyan px-8 py-4 rounded-xl text-xs flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw size={16} />
              REJOUER (RETRY)
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
