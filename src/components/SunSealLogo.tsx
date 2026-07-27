import React from 'react';

interface SunSealLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  useGif?: boolean;
}

export const SunSealLogo: React.FC<SunSealLogoProps> = ({
  size = 'md',
  showText = false,
  className = '',
  useGif = false,
}) => {
  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-24 h-24',
    xl: 'w-48 h-48 sm:w-64 sm:h-64',
  };

  if (useGif) {
    return (
      <div className={`relative flex items-center justify-center ${sizeClasses[size]} ${className}`}>
        <img
          src="/seal-rotating.gif"
          alt="theindiaproject.world rotating glowing sun seal"
          className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(194,161,90,0.4)]"
        />
      </div>
    );
  }

  return (
    <div className={`relative flex items-center justify-center ${sizeClasses[size]} ${className}`}>
      {/* Outer ambient glow ring */}
      <div className="absolute inset-0 rounded-full bg-[#c2a15a]/15 blur-md animate-pulse" />
      
      <svg
        className="w-full h-full relative z-10 filter drop-shadow-[0_0_8px_rgba(194,161,90,0.35)]"
        viewBox="0 0 200 200"
        aria-label="theindiaproject.world sun seal"
      >
        <defs>
          <path id="sunCircPath" d="M100,100 m-66,0 a66,66 0 1,1 132,0 a66,66 0 1,1 -132,0" />
        </defs>
        
        {/* Outer static rings */}
        <circle cx="100" cy="100" r="88" fill="none" stroke="#8f7738" strokeWidth="1.2" />
        <circle cx="100" cy="100" r="82" fill="none" stroke="#c2a15a" strokeWidth="0.8" opacity="0.9" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="#c2a15a" strokeWidth="0.8" opacity="0.8" />
        
        {/* Rotating Circular Text */}
        <g className="animate-[spin_70s_linear_infinite]" style={{ transformOrigin: '100px 100px' }}>
          <text font-family="Space Mono, monospace" font-size="9" letter-spacing="3.2" fill="#c2a15a">
            <textPath href="#sunCircPath" startOffset="0%">
              · SURVEYED · SEALED · ASSIGNED · THEINDIAPROJECT·WORLD
            </textPath>
          </text>
        </g>

        {/* Rotating 24 Sun Rays */}
        <g
          className="rays animate-[spin_45s_linear_infinite]"
          style={{ transformOrigin: '100px 100px' }}
          stroke="#c2a15a"
          strokeWidth="2.4"
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
        <span className="sr-only">theindiaproject.world rotating sun seal</span>
      )}
    </div>
  );
};
