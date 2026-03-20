import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 100 + 50, // Massive glow orbs
      dx: (Math.random() - 0.5) * 1.5,
      dy: (Math.random() - 0.5) * 1.5,
      color: Math.random() > 0.5 ? "34, 211, 238" : "59, 130, 246", // Cyan or Blue RGB
    }));

    const draw = () => {
      // Create a super deep black background
      ctx.fillStyle = "#020617";
      ctx.fillRect(0, 0, width, height);

      // Set global composite operation to "screen" for that "Light Overlap" glow
      ctx.globalCompositeOperation = "screen";

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < -100 || p.x > width + 100) p.dx *= -1;
        if (p.y < -100 || p.y > height + 100) p.dy *= -1;

        // Create a radial gradient for each "Orb" to make it look like a bright light
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        gradient.addColorStop(0, `rgba(${p.color}, 0.15)`);
        gradient.addColorStop(0.5, `rgba(${p.color}, 0.05)`);
        gradient.addColorStop(1, `rgba(${p.color}, 0)`);

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Add "Digital Rain" or Sparkle layer
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(34, 211, 238, 0.4)";
      for(let i = 0; i < 20; i++) {
          ctx.fillRect(Math.random() * width, Math.random() * height, 2, 2);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Background Layer */}
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full -z-20" 
      />
      
      {/* CSS Overlay for extra "Brightness" and "Glass" Texture */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] contrast-150" />
      
      {/* Large Neon Blur Orbs (Static CSS for performance) */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/10 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full -z-10 animate-pulse" />
    </>
  );
}