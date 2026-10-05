// NOTE: Motion primitives providing subtle entry animations adhering to RÉVA Consulting design rules.
// Avoids excessive glow, rainbow gradients, and jarring continuous loops.
'use client';

import * as React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FadeInProps extends HTMLMotionProps<'div'> {
  /** Delay in seconds */
  delay?: number;
  /** Direction from which the element slides in */
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  /** Distance in pixels */
  distance?: number;
  /** Duration in seconds */
  duration?: number;
}

/**
 * FadeIn animates child elements into view smoothly when scrolling.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  direction = 'up',
  distance = 20,
  duration = 0.5,
  ...props
}: FadeInProps) {
  const getOffset = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Smooth custom ease curve
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  /** Delay between consecutive children in seconds */
  staggerChildren?: number;
  /** Initial delay before first child starts */
  delayChildren?: number;
}

/**
 * StaggerContainer coordinates staggered reveals for grids, feature lists, and metrics.
 */
export function StaggerContainer({
  children,
  className,
  staggerChildren = 0.1,
  delayChildren = 0.05,
  ...props
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
