
import React, { useState, useEffect, useRef } from 'react';
import { STATS } from '../constants';

const CountUp: React.FC<{ end: number, duration: number, suffix?: string }> = ({ end, duration, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const increment = end / (duration / 16);
          const animate = () => {
            start += increment;
            if (start < end) {
              setCount(start);
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [end, duration]);

  const displayValue = end % 1 === 0 ? Math.floor(count).toLocaleString() : count.toFixed(1);

  return <span ref={countRef}>{displayValue}{suffix}</span>;
};

const Stats: React.FC = () => {
  return (
    <div className="py-20 bg-slate-50/70 backdrop-blur-[2px]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/90 p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center transition-all hover:-translate-y-2 hover:shadow-xl duration-300"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">
                <CountUp 
                  end={stat.value} 
                  duration={2000} 
                  suffix={stat.suffix} 
                />
              </div>
              <div className="text-slate-500 font-semibold uppercase tracking-widest text-xs">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;