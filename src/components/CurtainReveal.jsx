import React, { useEffect, useRef } from 'react';
import './CurtainReveal.css';

const CurtainReveal = ({ onCurtainOpened }) => {
  const canvasRef = useRef(null);
  const curtainsRef = useRef([]);
  const mouse = useRef({ x: 0, y: 0, active: false });
  const curtainOpenedRef = useRef(false);

  // Configuration
  const config = {
    gravity: 0.15,
    friction: 0.98,
    spacing: 15,
    stiffness: 0.8,
    openingSpeed: 0.015,
    mouseRadius: 70,
    mouseStrength: 0.6
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight + 100; // Over-extend height to cover bottom
      initCurtains();
    };

    // Point class
    class Point {
      constructor(x, y, pinned = false) {
        this.x = x;
        this.y = y;
        this.oldX = x;
        this.oldY = y;
        this.pinned = pinned;
        this.targetX = x;
        this.targetY = y;
      }

      update() {
        if (this.pinned) {
          this.x += (this.targetX - this.x) * config.openingSpeed;
          this.y += (this.targetY - this.y) * config.openingSpeed;
          return;
        }

        if (mouse.current.active) {
          const dx = this.x - mouse.current.x;
          const dy = this.y - mouse.current.y;
          const dist = Math.hypot(dx, dy);
          if (dist < config.mouseRadius) {
            this.x += dx * config.mouseStrength * (1 - dist / config.mouseRadius);
            this.y += dy * config.mouseStrength * (1 - dist / config.mouseRadius);
          }
        }

        const vx = (this.x - this.oldX) * config.friction;
        const vy = (this.y - this.oldY) * config.friction;

        this.oldX = this.x;
        this.oldY = this.y;

        this.x += vx;
        this.y += vy + config.gravity;
      }
    }

    // Constraint class
    class Constraint {
      constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
        this.length = Math.hypot(p1.x - p2.x, p1.y - p2.y);
      }

      resolve() {
        const dx = this.p2.x - this.p1.x;
        const dy = this.p2.y - this.p1.y;
        const dist = Math.hypot(dx, dy);
        const diff = (this.length - dist) / dist * config.stiffness;

        const offsetX = dx * diff * 0.5;
        const offsetY = dy * diff * 0.5;

        if (!this.p1.pinned) {
          this.p1.x -= offsetX;
          this.p1.y -= offsetY;
        }
        if (!this.p2.pinned) {
          this.p2.x += offsetX;
          this.p2.y += offsetY;
        }
      }
    }

    // CurtainPiece class
    class CurtainPiece {
      constructor(side) {
        this.side = side;
        this.points = [];
        this.constraints = [];
        this.init();
      }

      init() {
        const rows = Math.ceil(height / config.spacing) + 2;
        const cols = Math.ceil((width / 2) / config.spacing) + 2;
        const startX = this.side === 'left' ? 0 : width / 2;

        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            const px = startX + (this.side === 'left' ? x * config.spacing : (x-1) * config.spacing);
            const py = y * config.spacing - 20;
            const pinned = y === 0;
            const p = new Point(px, py, pinned);
            this.points.push(p);

            if (x > 0) {
              this.constraints.push(
                new Constraint(this.points[this.points.length - 2], p)
              );
            }
            if (y > 0) {
              this.constraints.push(
                new Constraint(this.points[this.points.length - cols - 1], p)
              );
            }
          }
        }
      }

      update() {
        for (let i = 0; i < 5; i++) {
          this.constraints.forEach(c => c.resolve());
        }
        this.points.forEach(p => p.update());
      }

      draw() {
        const cols = Math.ceil((width / 2) / config.spacing) + 2;
        const rows = Math.ceil(height / config.spacing) + 2;

        for (let x = 0; x < cols - 1; x++) {
          ctx.beginPath();
          ctx.fillStyle = this.getFoldGradient(x, cols);
          
          for (let y = 0; y < rows - 1; y++) {
            const idx = y * cols + x;
            const p1 = this.points[idx];
            const p2 = this.points[idx + 1];
            const p3 = this.points[idx + cols + 1];
            const p4 = this.points[idx + cols];

            if (y === 0) ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineTo(p3.x, p3.y);
            ctx.lineTo(p4.x, p4.y);
          }
          ctx.fill();
        }
        
        // Draw bottom tassels
        ctx.strokeStyle = '#c7a400';
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let x = 0; x < cols; x++) {
           const p = this.points[(rows - 2) * cols + x];
           if (x === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      getFoldGradient(x, totalCols) {
        const startX = this.side === 'left' ? 0 : width / 2;
        const xPos = startX + x * config.spacing;
        const grd = ctx.createLinearGradient(xPos, 0, xPos + config.spacing, 0);

        const color1 = x % 2 === 0 ? '#6a040f' : '#9d0208';
        const color2 = x % 2 === 0 ? '#370617' : '#6a040f';

        grd.addColorStop(0, color1);
        grd.addColorStop(0.5, color2);
        grd.addColorStop(1, color1);
        return grd;
      }

      open() {
        const cols = Math.ceil((width / 2) / config.spacing) + 2;
        for (let x = 0; x < cols; x++) {
          const p = this.points[x];
          if (this.side === 'left') {
            const ratio = x / cols;
            p.targetX = -150 + ratio * 50;
            p.targetY = -80 - ratio * 30;
          } else {
            const ratio = 1 - (x / cols);
            p.targetX = width + 150 - ratio * 50;
            p.targetY = -80 - ratio * 30;
          }
        }
      }
    }

    const initCurtains = () => {
      curtainsRef.current = [new CurtainPiece('left'), new CurtainPiece('right')];
    };

    const handleInteraction = () => {
      if (!curtainOpenedRef.current) {
        curtainOpenedRef.current = true;
        curtainsRef.current.forEach(c => c.open());
        if (onCurtainOpened) {
          setTimeout(onCurtainOpened, 2000);
        }
      }
    };

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      mouse.current.active = true;
    };

    const handleMouseUp = () => {
      mouse.current.active = false;
      handleInteraction();
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Enter') handleInteraction();
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousedown', () => mouse.current.active = true);
    window.addEventListener('keydown', handleKeyDown);

    resize();

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      curtainsRef.current.forEach(c => {
        c.update();
        c.draw();
      });
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('keydown', handleKeyDown);
    };
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [onCurtainOpened]);

  return (
    <div className="curtain-container">
      <div className="vignette"></div>
      <canvas ref={canvasRef} className="curtain-canvas"></canvas>
      <div className="curtain-floor"></div>
      <div className="curtain-spotlight"></div>
    </div>
  );
};

export default CurtainReveal;