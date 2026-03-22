import { useEffect, useState } from 'react';

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{
        background: `radial-gradient(1000px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.03), transparent 25%)`
      }}
    />
  );
};

export default CursorGlow;
