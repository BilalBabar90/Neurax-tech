"use client";
import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export const ParticleBackground = () => {
  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: { value: "#ffffff" }, // ⚪ White background
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // Flowing reaction to cursor
            },
          },
          modes: {
            repulse: {
              distance: 120,
              duration: 0.3,
            },
          },
        },
        particles: {
          number: {
            value: 200, // More particles for density
            density: { enable: true, area: 800 },
          },
          color: { value: "#F7690E" }, // 🟠 Orange particles
          links: {
            enable: true,
            color: "#F7690E",
            distance: 130,
            opacity: 0.9,
            width: 2,
          },
          move: {
            enable: true,
            speed: 3.5, // Faster, fluid motion
            outModes: { default: "bounce" },
          },
          opacity: { value: 0.9 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none", // ✅ no cursor style change
      }}
    />
  );
};
