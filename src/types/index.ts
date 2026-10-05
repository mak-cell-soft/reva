/**
 * RÉVA Consulting — Domain TypeScript Definitions
 */

export type ServiceDomain = 'development' | 'testing' | 'integration' | 'optimization';

export interface ServiceItem {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly summary: string;
  readonly description: string;
  readonly domain: ServiceDomain;
  readonly capabilities: readonly string[];
  readonly deliverables: readonly string[];
  readonly iconName: string;
}

export interface ElanceModule {
  readonly id: string;
  readonly code: string;
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly benefits: readonly string[];
  readonly techHighlights: readonly string[];
}

export interface PartnerLogo {
  readonly id: string;
  readonly name: string;
  readonly src: string;
  readonly width: number;
  readonly height: number;
}
