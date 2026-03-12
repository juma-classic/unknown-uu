import React, { useEffect, useState } from 'react';
import './TradersDenLoader.scss';

interface TradersDenLoaderProps {
    onLoadComplete?: () => void;
    duration?: number;
}

export const TradersDenLoader: React.FC<TradersDenLoaderProps> = ({ onLoadComplete, duration = 1500 }) => {
    const [progress, setProgress] = useState(0);
    const [statusIndex, setStatusIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    const statuses = [
        'Initializing Trading Core...',
        'Synchronizing Market Algorithms...',
        'Calibrating Trading Mechanisms...',
        'Access Granted. Welcome to UNKNOWN TRADERS.',
    ];



    // Progress and Status Updates - Optimized for faster loading
    useEffect(() => {
        const statusInterval = duration / statuses.length;
        const progressInterval = 30; // Update every 30ms for smooth animation
        const progressIncrement = 100 / (duration / progressInterval);

        const progressTimer = setInterval(() => {
            setProgress(prev => {
                const next = prev + progressIncrement;
                return next >= 100 ? 100 : next;
            });
        }, progressInterval);

        const statusTimer = setInterval(() => {
            setStatusIndex(prev => {
                if (prev < statuses.length - 1) {
                    return prev + 1;
                }
                return prev;
            });
        }, statusInterval);

        const completeTimer = setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => {
                if (onLoadComplete) {
                    onLoadComplete();
                }
            }, 300); // Reduced fade out time
        }, duration);

        return () => {
            clearInterval(progressTimer);
            clearInterval(statusTimer);
            clearTimeout(completeTimer);
        };
    }, [duration, onLoadComplete, statuses.length]);

    return (
        <div className={`unknown-traders-loader ${isComplete ? 'fade-out' : ''}`}>
            {/* Particle Background */}
            <div className='particle-background'>
                {[...Array(30)].map((_, i) => (
                    <div key={i} className='particle' style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${3 + Math.random() * 4}s`
                    }}></div>
                ))}
            </div>

            <div className='loading-container'>
                {/* Mechanical Hebrew Sun Loader */}
                <div className='mechanical-sun-container'>
                    {/* Outer rotating ring with notches */}
                    <div className='outer-ring'>
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className='ring-notch' style={{
                                transform: `rotate(${i * 30}deg) translateY(-140px)`
                            }}></div>
                        ))}
                    </div>

                    {/* Middle gear ring */}
                    <div className='middle-gear'>
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className='gear-tooth' style={{
                                transform: `rotate(${i * 45}deg) translateY(-110px)`
                            }}></div>
                        ))}
                    </div>

                    {/* Star of David - Two overlapping triangles */}
                    <div className='star-of-david'>
                        {/* Upward triangle */}
                        <div className='triangle triangle-up'>
                            <div className='triangle-side side-1'></div>
                            <div className='triangle-side side-2'></div>
                            <div className='triangle-side side-3'></div>
                        </div>
                        
                        {/* Downward triangle */}
                        <div className='triangle triangle-down'>
                            <div className='triangle-side side-1'></div>
                            <div className='triangle-side side-2'></div>
                            <div className='triangle-side side-3'></div>
                        </div>

                        {/* Center hexagon with gears */}
                        <div className='center-hexagon'>
                            <div className='hexagon-inner'>
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className='hex-gear' style={{
                                        transform: `rotate(${i * 60}deg) translateY(-25px)`
                                    }}></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Inner rotating core */}
                    <div className='inner-core'>
                        <div className='core-ring'></div>
                        <div className='core-center'>
                            <div className='progress-circle' style={{
                                background: `conic-gradient(#2563eb ${progress * 3.6}deg, transparent ${progress * 3.6}deg)`
                            }}></div>
                        </div>
                    </div>

                    {/* Orbiting elements */}
                    <div className='orbit-container'>
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className='orbit-element' style={{
                                animationDelay: `${i * 0.8}s`
                            }}></div>
                        ))}
                    </div>
                </div>

                {/* App Logo/Name */}
                <div className='logo-section'>
                    <div className='svg-logo-container'>
                        <svg width="200" height="80" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="unknownGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{stopColor:"#2563eb", stopOpacity:1}} />
                                    <stop offset="50%" style={{stopColor:"#3b82f6", stopOpacity:1}} />
                                    <stop offset="100%" style={{stopColor:"#1d4ed8", stopOpacity:1}} />
                                </linearGradient>
                                <linearGradient id="fxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{stopColor:"#10b981", stopOpacity:1}} />
                                    <stop offset="50%" style={{stopColor:"#059669", stopOpacity:1}} />
                                    <stop offset="100%" style={{stopColor:"#047857", stopOpacity:1}} />
                                </linearGradient>
                                <filter id="glow">
                                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                    <feMerge> 
                                        <feMergeNode in="coloredBlur"/>
                                        <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                            </defs>
                            
                            {/* Background geometric pattern */}
                            <rect x="0" y="0" width="200" height="80" fill="url(#unknownGradient)" opacity="0.1" rx="8"/>
                            
                            {/* UNKNOWN text */}
                            <text x="20" y="50" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" 
                                  fill="url(#unknownGradient)" filter="url(#glow)">UNKNOWN</text>
                            
                            {/* TRADERS text */}
                            <text x="130" y="50" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" 
                                  fill="url(#fxGradient)" filter="url(#glow)">TRADERS</text>
                            
                            {/* Decorative elements */}
                            <circle cx="115" cy="25" r="3" fill="#2563eb" opacity="0.6">
                                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="115" cy="55" r="3" fill="#10b981" opacity="0.6">
                                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin="1s"/>
                            </circle>
                            
                            {/* Trading chart line */}
                            <path d="M 15 65 L 30 60 L 45 55 L 60 50 L 75 45 L 90 40 L 105 35 L 120 40 L 135 45 L 150 40 L 165 35 L 180 30" 
                                  stroke="#2563eb" strokeWidth="2" fill="none" opacity="0.7">
                                <animate attributeName="stroke-dasharray" values="0,200;200,0" dur="3s" repeatCount="indefinite"/>
                            </path>
                        </svg>
                    </div>
                    <p className='logo-subtitle'>Professional Trading Platform</p>
                </div>

                {/* Progress Bar and Status */}
                <div className='progress-section'>
                    <div className='progress-bar-container'>
                        <div className='progress-bar-fill' style={{ width: `${progress}%` }}></div>
                        <div className='progress-glow' style={{ left: `${progress}%` }}></div>
                    </div>
                    <p className='loading-status'>{statuses[statusIndex]}</p>
                    <div className='progress-percentage'>{Math.floor(progress)}%</div>
                </div>
            </div>
        </div>
    );
};

export default TradersDenLoader;
