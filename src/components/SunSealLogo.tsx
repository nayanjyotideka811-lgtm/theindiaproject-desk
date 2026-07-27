import React from 'react';

interface SunSealLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const SunSealLogo: React.FC<SunSealLogoProps> = ({
  size = 'md',
  showText = false,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-24 h-24',
    xl: 'w-48 h-48 sm:w-64 sm:h-64',
  };

  return (
    <div className={`relative flex items-center justify-center ${sizeClasses[size]} ${className}`}>
      {/* Subtle ambient gold radial glow */}
      <div className="absolute inset-0 rounded-full bg-[#c2a15a]/10 blur-sm animate-pulse" />

      {/* Exact Authentic Sun Seal SVG Graphics */}
      <svg
        className="w-full h-full relative z-10 filter drop-shadow-[0_0_10px_rgba(194,161,90,0.4)]"
        viewBox="0 0 200 200"
        aria-label="theindiaproject.world rotating glowing sun seal"
      >
        {/* Outer Ring 1 */}
        <circle cx="100" cy="100" r="88" fill="none" stroke="#8f7738" strokeWidth="3" />

        {/* Inner Ring 2 */}
        <circle cx="100" cy="100" r="78" fill="none" stroke="#c2a15a" strokeWidth="1.5" />

        {/* Rotating 24 Sun Rays */}
        <g
          className="animate-[spin_70s_linear_infinite]"
          style={{ transformOrigin: '100px 100px' }}
          stroke="#c2a15a"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <line x1="160.0" y1="100.0" x2="182.0" y2="100.0" />
          <line x1="158.0" y1="115.5" x2="171.5" y2="119.2" />
          <line x1="152.0" y1="130.0" x2="171.0" y2="141.0" />
          <line x1="142.4" y1="142.4" x2="152.3" y2="152.3" />
          <line x1="130.0" y1="152.0" x2="141.0" y2="171.0" />
          <line x1="115.5" y1="158.0" x2="119.2" y2="171.5" />
          <line x1="100.0" y1="160.0" x2="100.0" y2="182.0" />
          <line x1="84.5" y1="158.0" x2="80.8" y2="171.5" />
          <line x1="70.0" y1="152.0" x2="59.0" y2="171.0" />
          <line x1="57.6" y1="142.4" x2="47.7" y2="152.3" />
          <line x1="48.0" y1="130.0" x2="29.0" y2="141.0" />
          <line x1="42.0" y1="115.5" x2="28.5" y2="119.2" />
          <line x1="40.0" y1="100.0" x2="18.0" y2="100.0" />
          <line x1="42.0" y1="84.5" x2="28.5" y2="80.8" />
          <line x1="48.0" y1="70.0" x2="29.0" y2="59.0" />
          <line x1="57.6" y1="57.6" x2="47.7" y2="47.7" />
          <line x1="70.0" y1="48.0" x2="59.0" y2="29.0" />
          <line x1="84.5" y1="42.0" x2="80.8" y2="28.5" />
          <line x1="100.0" y1="40.0" x2="100.0" y2="18.0" />
          <line x1="115.5" y1="42.0" x2="119.2" y2="28.5" />
          <line x1="130.0" y1="48.0" x2="141.0" y2="29.0" />
          <line x1="142.4" y1="57.6" x2="152.3" y2="47.7" />
          <line x1="152.0" y1="70.0" x2="171.0" y2="59.0" />
          <line x1="158.0" y1="84.5" x2="171.5" y2="80.8" />
        </g>

        {/* Core Center Disc */}
        <circle cx="100" cy="100" r="11" fill="#c2a15a" />
      </svg>

      {showText && (
        <span className="sr-only">theindiaproject.world rotating glowing sun seal</span>
      )}
    </div>
  );
};
