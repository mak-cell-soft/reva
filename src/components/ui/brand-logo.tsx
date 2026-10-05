// NOTE: Official Primary Brand Logo component for RÉVA Consulting.
// Strictly uses /images/logos/logo-reva.jpeg without approximation, distortion or text recreation.
import * as React from 'react';
import Image from 'next/image';
import { brandConfig } from '@/lib/brand.config';
import { cn } from '@/lib/utils';

interface BrandLogoProps {
  /** Sizing scale */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Additional CSS classes */
  className?: string;
  /** Whether to prioritize loading */
  priority?: boolean;
  /** Legacy variant prop preserved for compatibility */
  variant?: 'default' | 'vector' | 'emblem' | string;
  /** Legacy tagline flag preserved for compatibility */
  showTagline?: boolean;
}

const SIZES = {
  sm: 'h-8 sm:h-9',
  md: 'h-10 sm:h-11',
  lg: 'h-12 sm:h-14',
  xl: 'h-16 sm:h-20',
};

export function BrandLogo({
  size = 'md',
  className,
  priority = false,
}: BrandLogoProps) {
  return (
    <div
      className={cn(
        'relative inline-flex items-center shrink-0 select-none overflow-hidden rounded-[8px]',
        className
      )}
    >
      <Image
        src="/images/logos/logo-reva.jpeg"
        alt={brandConfig.name}
        width={1599}
        height={1076}
        className={cn('w-auto object-contain', SIZES[size])}
        priority={priority}
      />
    </div>
  );
}
