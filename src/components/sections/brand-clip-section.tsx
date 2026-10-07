// NOTE: Official Brand Video Storytelling Section for RÉVA Consulting.
// Integrates public/images/pub/reva-clip.mp4 as an executive cinematic presentation.
// Features calibrated aspect-ratio (416/368) for zero layout shift, muted autoplay,
// IntersectionObserver lazy playback management, graceful autoplay fallback,
// reduced-motion support, accessible glassmorphic controls, and atmospheric brand lighting.
'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, Minimize2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getDictionary } from '@/lib/i18n/dictionaries';

interface BrandClipSectionProps {
  /** Optional active locale segment */
  locale?: string;
  /** Optional container class overrides */
  className?: string;
}

export function BrandClipSection({ locale = 'fr', className }: BrandClipSectionProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Localized dictionary for active locale
  const dict = getDictionary(locale);

  // Playback & Audio States
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(true);
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const [isAutoplayBlocked, setIsAutoplayBlocked] = React.useState(false);
  const [hasInteracted, setHasInteracted] = React.useState(false);

  // Transition parameters aligned with RÉVA design tokens
  const transitionSmooth = { duration: 0.5, ease: [0.16, 1, 0.3, 1] };

  // Strategic pillars grounding the video in the firm's advisory & engineering doctrine
  const pillars = dict.brandClip.pillars;

  // IntersectionObserver: Load and play when visible, pause when scrolled away
  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // If user prefers reduced motion, do not autoplay automatically
    if (shouldReduceMotion) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Visible: attempt smooth muted playback
            video.muted = true;
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  setIsPlaying(true);
                  setIsAutoplayBlocked(false);
                })
                .catch(() => {
                  // Browser policy blocked autoplay
                  setIsAutoplayBlocked(true);
                  setIsPlaying(false);
                });
            }
          } else {
            // Scrolled out of view: pause to preserve client CPU/GPU resources
            if (!video.paused) {
              video.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [shouldReduceMotion]);

  // Fullscreen change listener
  React.useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Play / Pause toggle handler
  const handleTogglePlay = React.useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    setHasInteracted(true);
    if (video.paused) {
      video
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsAutoplayBlocked(false);
        })
        .catch(() => {
          setIsAutoplayBlocked(true);
        });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  // Mute / Unmute toggle handler
  const handleToggleMute = React.useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      const video = videoRef.current;
      if (!video) return;

      setHasInteracted(true);
      const nextMuted = !video.muted;
      video.muted = nextMuted;
      setIsMuted(nextMuted);

      // If user un-mutes and video was paused, start playback
      if (!nextMuted && video.paused) {
        video.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    },
    []
  );

  // Fullscreen toggle handler
  const handleToggleFullscreen = React.useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      const container = containerRef.current;
      if (!container) return;

      if (!document.fullscreenElement) {
        container.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    },
    []
  );

  return (
    <section
      id="vitrine-marque"
      aria-label="Présentation audiovisuelle RÉVA Consulting"
      className={cn(
        'relative bg-[#08090C] py-20 sm:py-24 lg:py-32 border-t border-white/[0.06] overflow-hidden',
        className
      )}
    >
      {/* 1. Precision Ambient Brand Glow (Gold & Blue reflecting the illuminated plaque) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Soft champagne gold glow on the upper-left */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[450px] sm:h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(197,155,69,0.08)_0%,_rgba(29,104,242,0.06)_40%,_transparent_70%)] blur-3xl" />
        
        {/* Architectural coordinate grid matching the Hero */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, #CAD0DB 1px, transparent 1px), linear-gradient(to bottom, #CAD0DB 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* 2. Editorial Header: Confident, Authoritative & Concise */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={transitionSmooth}
          >
            <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-[0.2em] uppercase text-[#DFC489]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C59B45] shadow-[0_0_8px_rgba(197,155,69,0.8)]" />
              {dict.brandClip.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ ...transitionSmooth, delay: 0.08 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.15]"
          >
            {dict.brandClip.titlePrefix}
            <span className="text-[#C59B45]">{dict.brandClip.titleHighlight}</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ ...transitionSmooth, delay: 0.16 }}
            className="font-sans text-sm sm:text-base text-[#9CA6B8] leading-relaxed font-light max-w-2xl mx-auto"
          >
            {dict.brandClip.description}
          </motion.p>
        </div>

        {/* 3. Cinematic Video Theater Showcase */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ ...transitionSmooth, delay: 0.2 }}
          className="w-full max-w-3xl mx-auto"
        >
          {/* Executive Outer Chassis: Chamfered Double-Border Glass Card */}
          <div
            ref={containerRef}
            className={cn(
              'group relative rounded-[22px] sm:rounded-[26px] p-2.5 sm:p-4 md:p-5',
              'bg-gradient-to-b from-[#151922] via-[#0E1118] to-[#0A0C10]',
              'border border-white/[0.08] hover:border-white/[0.16]',
              'shadow-[0_24px_70px_-20px_rgba(0,0,0,0.85)] hover:shadow-[0_28px_80px_-15px_rgba(197,155,69,0.12)]',
              'transition-all duration-300'
            )}
          >
            {/* Top Bar Indicators (Discreet Brand Header inside Chassis) */}
            <div className="flex items-center justify-between px-2 pb-2.5 sm:pb-3 text-xs text-[#758195]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1D68F2] shadow-[0_0_8px_rgba(29,104,242,0.8)]" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#CAD0DB]">
                  {dict.brandClip.tagHeader}
                </span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#758195] hidden sm:inline-block">
                {dict.brandClip.resolutionTag}
              </span>
            </div>

            {/* Inner Video Container: Aspect ratio strictly locked to 416/368 for ZERO layout shift */}
            <div
              onClick={handleTogglePlay}
              className={cn(
                'relative w-full aspect-[416/368] overflow-hidden rounded-[16px] sm:rounded-[20px] bg-[#060709]',
                'border border-white/[0.06] cursor-pointer select-none'
              )}
              role="region"
              aria-label={dict.brandClip.ariaRegion}
            >
              {/* Native Video Element */}
              <video
                ref={videoRef}
                src="/images/pub/reva-clip.mp4"
                poster="/images/pub/reva-clip-poster.jpg"
                autoPlay
                muted={isMuted}
                loop
                playsInline
                preload="metadata"
                aria-label={dict.brandClip.ariaVideo}
                className="size-full object-cover select-none"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Pause / Autoplay Blocked Overlay: Centered Minimalist Glass Trigger */}
              {(!isPlaying || isAutoplayBlocked) && (
                <div
                  className="absolute inset-0 bg-[#08090C]/40 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-300"
                  aria-hidden="true"
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTogglePlay();
                    }}
                    aria-label={dict.brandClip.playAria}
                    className="relative group/btn flex items-center justify-center size-16 sm:size-20 rounded-full bg-[#0E1118]/90 hover:bg-[#141822] border border-[#C59B45]/50 hover:border-[#C59B45] text-[#DFC489] hover:text-[#F8FAFC] shadow-[0_8px_32px_rgba(197,155,69,0.3)] transition-all duration-200 transform group-hover/btn:scale-105 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B45]"
                  >
                    <Play className="size-6 sm:size-8 fill-current ml-1 rtl:ml-0 rtl:mr-1 rtl:rotate-180" />
                    <span className="sr-only">{dict.brandClip.playText}</span>
                  </button>
                </div>
              )}

              {/* Interactive Floating Glass Control Dock */}
              <div
                onClick={(e) => e.stopPropagation()}
                className={cn(
                  'absolute bottom-3 sm:bottom-4 inset-x-3 sm:inset-x-4 flex items-center justify-between',
                  'px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-[#08090C]/80 backdrop-blur-md',
                  'border border-white/[0.1] shadow-[0_8px_24px_rgba(0,0,0,0.6)]',
                  'transition-opacity duration-200',
                  !isPlaying && !hasInteracted ? 'opacity-90' : 'opacity-80 group-hover:opacity-100'
                )}
              >
                {/* Left: Play/Pause button */}
                <button
                  type="button"
                  onClick={handleTogglePlay}
                  aria-label={isPlaying ? dict.brandClip.pauseAria : dict.brandClip.resumeAria}
                  className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#CAD0DB] hover:text-[#F8FAFC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B45] rounded-[4px] px-1.5 py-0.5 cursor-pointer"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="size-4 text-[#C59B45]" />
                      <span className="hidden sm:inline">{dict.brandClip.pauseText}</span>
                    </>
                  ) : (
                    <>
                      <Play className="size-4 text-[#C59B45] fill-current rtl:rotate-180" />
                      <span className="hidden sm:inline">{dict.brandClip.playText}</span>
                    </>
                  )}
                </button>

                {/* Center: Brand Sub-indicator */}
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#9CA6B8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59B45] animate-pulse" />
                  <span className="tracking-wider uppercase">{dict.brandClip.subIndicator}</span>
                </div>

                {/* Right: Sound & Fullscreen controls */}
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Sound Toggle */}
                  <button
                    type="button"
                    onClick={handleToggleMute}
                    aria-label={isMuted ? dict.brandClip.unmuteAria : dict.brandClip.muteAria}
                    title={isMuted ? dict.brandClip.unmuteAria : dict.brandClip.muteAria}
                    className="p-1.5 rounded-full text-[#CAD0DB] hover:text-[#F8FAFC] hover:bg-white/[0.08] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B45] cursor-pointer"
                  >
                    {isMuted ? (
                      <VolumeX className="size-4 text-[#9CA6B8]" />
                    ) : (
                      <Volume2 className="size-4 text-[#C59B45]" />
                    )}
                  </button>

                  {/* Fullscreen Toggle */}
                  <button
                    type="button"
                    onClick={handleToggleFullscreen}
                    aria-label={isFullscreen ? dict.brandClip.exitFullscreenAria : dict.brandClip.fullscreenAria}
                    title={isFullscreen ? dict.brandClip.exitFullscreenAria : dict.brandClip.fullscreenAria}
                    className="p-1.5 rounded-full text-[#CAD0DB] hover:text-[#F8FAFC] hover:bg-white/[0.08] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B45] cursor-pointer"
                  >
                    {isFullscreen ? (
                      <Minimize2 className="size-4" />
                    ) : (
                      <Maximize2 className="size-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4. Strategic Supporting Pillar Badges (Directly under the Video) */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ ...transitionSmooth, delay: 0.28 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-4xl mx-auto mt-12 sm:mt-16"
        >
          {pillars.map((pillar) => (
            <div
              key={pillar.index}
              className="p-5 sm:p-6 rounded-[16px] bg-[#0E1118] border border-white/[0.06] hover:border-white/[0.12] transition-colors duration-200 space-y-2 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-[#DFC489] tracking-wider">
                  {pillar.index}
                </span>
                <span className="size-1.5 rounded-full bg-[#1D68F2]/60 group-hover:bg-[#1D68F2] transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-base text-[#F8FAFC]">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-[#8E9AA8] font-light leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
