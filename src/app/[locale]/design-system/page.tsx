// NOTE: RÉVA Consulting Design System & UI Tokens Showcase.
// Preserved as an internal/developer reference showcase.
import * as React from 'react';
import { brandConfig } from '@/lib/brand.config';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { BrandLogo } from '@/components/ui/brand-logo';
import { FadeIn } from '@/components/motion/fade-in';
import {
  Code2,
  CheckCircle2,
  Cpu,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Terminal,
  ExternalLink,
} from 'lucide-react';

export default function DesignSystemPage() {
  return (
    <div className="relative min-h-screen bg-[#08090C] text-[#CAD0DB] selection:bg-[#C59B45]/20 selection:text-[#DFC489]">
      <main id="system" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-24">
        {/* Hero Introduction */}
        <section className="max-w-4xl space-y-6">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#111318] border border-white/[0.08] text-xs font-mono text-[#DFC489]">
              <Terminal className="size-3.5 text-[#C59B45]" />
              <span>@reva/design-system // Core Foundation</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8FAFC]">
              Identité Visuelle &{' '}
              <span className="text-[#C59B45]">Système de Composants</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-base sm:text-lg text-[#9CA6B8] leading-relaxed max-w-3xl">
              Fondation visuelle de <strong className="text-[#F8FAFC]">{brandConfig.name}</strong>,
              éditeur de logiciels et spécialiste de l&apos;ingénierie du test. Ce système repose sur
              une dominance de noir profond rehaussée de l&apos;or champagne pour l&apos;expertise et du bleu
              électrique pour la précision technologique.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Badge variant="gold">Or Champagne = Expertise & Élancé ERP</Badge>
              <Badge variant="blue">Bleu Électrique = Technologie & Test</Badge>
              <Badge variant="silver">Argent Métallique = Ingénierie & Rigueur</Badge>
            </div>
          </FadeIn>
        </section>

        {/* Section 1: Brandmark & Emblem Assets */}
        <section className="space-y-8">
          <div className="border-b border-white/[0.06] pb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
              1. Identité de Marque & Emblèmes
            </h2>
            <p className="text-sm text-[#758195] mt-1">
              Rendu vectoriel haute précision et intégration de l&apos;emblème officiel 3D.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card elevation="charcoal" accent="gold">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="gold" indicator="gold">
                    Vector SVG
                  </Badge>
                  <span className="text-xs font-mono text-[#758195]">BrandLogo variant=&quot;vector&quot;</span>
                </div>
                <CardTitle className="mt-4">Lockup Vectoriel Scalable</CardTitle>
                <CardDescription>
                  Génération SVG pure respectant les pixels dorés, l&apos;arc laser bleu et la typographie.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 border-t border-white/[0.04] bg-[#0B0D11]/60 flex items-center justify-center p-12">
                <BrandLogo size="lg" variant="vector" showTagline={true} />
              </CardContent>
            </Card>

            <Card elevation="charcoal" accent="blue">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="blue" indicator="blue">
                    Emblem 3D
                  </Badge>
                  <span className="text-xs font-mono text-[#758195]">BrandLogo variant=&quot;emblem&quot;</span>
                </div>
                <CardTitle className="mt-4">Emblème Studio Officiel</CardTitle>
                <CardDescription>
                  Intégration optimisée du badge physique avec cadre chanfreiné et reflets studio.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 border-t border-white/[0.04] bg-[#0B0D11]/60 flex items-center justify-center p-12">
                <BrandLogo size="lg" variant="emblem" showTagline={true} />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 2: Color Palette Tokens */}
        <section id="tokens" className="space-y-8">
          <div className="border-b border-white/[0.06] pb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
              2. Palette Chromatique
            </h2>
            <p className="text-sm text-[#758195] mt-1">
              Nuancier rigoureusement restreint inspiré de la charte RÉVA.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-[16px] bg-[#111318] border border-white/[0.06] space-y-4">
              <div className="h-20 rounded-[10px] bg-[#08090C] border border-white/[0.1] shadow-inner" />
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#F8FAFC]">Near Black</span>
                  <span className="font-mono text-xs text-[#758195]">#08090C</span>
                </div>
                <p className="text-xs text-[#758195] mt-1">Fondation dominante et fond d&apos;écran racine</p>
              </div>
            </div>

            <div className="p-5 rounded-[16px] bg-[#111318] border border-white/[0.06] space-y-4">
              <div className="h-20 rounded-[10px] bg-[#171A20] border border-white/[0.1] shadow-inner" />
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#F8FAFC]">Dark Surface</span>
                  <span className="font-mono text-xs text-[#758195]">#171A20</span>
                </div>
                <p className="text-xs text-[#758195] mt-1">Surfaces surélevées, cartes et conteneurs</p>
              </div>
            </div>

            <div className="p-5 rounded-[16px] bg-[#111318] border border-white/[0.06] space-y-4">
              <div className="h-20 rounded-[10px] bg-[#C59B45] shadow-[0_4px_16px_rgba(197,155,69,0.3)]" />
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#F8FAFC]">Champagne Gold</span>
                  <span className="font-mono text-xs text-[#C59B45]">#C59B45</span>
                </div>
                <p className="text-xs text-[#758195] mt-1">Expertise, Élancé ERP et actions de leadership</p>
              </div>
            </div>

            <div className="p-5 rounded-[16px] bg-[#111318] border border-white/[0.06] space-y-4">
              <div className="h-20 rounded-[10px] bg-[#1D68F2] shadow-[0_4px_16px_rgba(29,104,242,0.3)]" />
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#F8FAFC]">Electric Blue</span>
                  <span className="font-mono text-xs text-[#3B82F6]">#1D68F2</span>
                </div>
                <p className="text-xs text-[#758195] mt-1">Technologie, test logiciel et systèmes digitaux</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Typography System */}
        <section className="space-y-8">
          <div className="border-b border-white/[0.06] pb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
              3. Système Typographique
            </h2>
            <p className="text-sm text-[#758195] mt-1">
              Hiérarchie claire associant Plus Jakarta Sans, Outfit et JetBrains Mono.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 sm:p-8 rounded-[16px] bg-[#111318] border border-white/[0.06] space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C59B45]">
                Display Typography // Plus Jakarta Sans (Extrabold / Bold)
              </span>
              <div className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
                RÉVA Consulting — Développer. Tester. Optimiser.
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-[16px] bg-[#111318] border border-white/[0.06] space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#CAD0DB]">
                Body Typography // Outfit (Light / Regular / Medium)
              </span>
              <p className="text-base sm:text-lg text-[#CAD0DB] leading-relaxed max-w-4xl">
                Ingénierie logicielle avancée et édition de solutions modulaires. Nous concevons
                des architectures pérennes et déployons des cadres d&apos;assurance qualité rigoureux.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-[16px] bg-[#111318] border border-white/[0.06] space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#3B82F6]">
                Technical Monospace // JetBrains Mono
              </span>
              <p className="font-mono text-sm text-[#CAD0DB] leading-relaxed">
                QA_BENCHMARK_STATUS: SUCCESS [Coverage: 98.4% | Latency: 14ms | Conformance: ISO/IEC 29119]
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Interactive Button Primitives */}
        <section className="space-y-8">
          <div className="border-b border-white/[0.06] pb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
              4. Primitives de Boutons
            </h2>
            <p className="text-sm text-[#758195] mt-1">
              Actions sémantiques basées sur Radix Slot et CVA.
            </p>
          </div>

          <div className="p-8 rounded-[16px] bg-[#111318] border border-white/[0.06] space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#758195] block mb-4">
                Variantes Sémantiques (Default Size)
              </span>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="gold">
                  <Sparkles className="size-4" />
                  Découvrir Élancé ERP
                </Button>
                <Button variant="blue">
                  <Cpu className="size-4" />
                  Audit QA & Test
                </Button>
                <Button variant="outlineGold">Bordure Or</Button>
                <Button variant="outlineBlue">Bordure Bleue</Button>
                <Button variant="outlineSilver">Bordure Argent</Button>
                <Button variant="secondary">Surface Neutre</Button>
                <Button variant="ghost">Bouton Fantôme</Button>
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.04]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#758195] block mb-4">
                Échelle de Tailles (sm / default / lg / icon)
              </span>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="gold" size="sm">Small (36px)</Button>
                <Button variant="gold" size="default">Default (44px)</Button>
                <Button variant="gold" size="lg">Large (52px) <ArrowRight className="size-4 ml-1" /></Button>
                <Button variant="outlineGold" size="icon" aria-label="Icon action">
                  <CheckCircle2 className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Badges & Tags */}
        <section className="space-y-8">
          <div className="border-b border-white/[0.06] pb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
              5. Badges & Balises Précises
            </h2>
            <p className="text-sm text-[#758195] mt-1">
              Puces compactes, sobres et sans fioritures pour la catégorisation technique.
            </p>
          </div>

          <div className="p-8 rounded-[16px] bg-[#111318] border border-white/[0.06] flex flex-wrap gap-4 items-center">
            <Badge variant="gold" indicator="gold">Éditeur de Logiciels</Badge>
            <Badge variant="gold">Élancé ERP v4.2</Badge>
            <Badge variant="blue" indicator="blue">Test Automation</Badge>
            <Badge variant="blue">Systèmes Critiques</Badge>
            <Badge variant="silver" indicator="silver">ISO/IEC 29119</Badge>
            <Badge variant="silver">Next.js 16 + React 19</Badge>
            <Badge variant="subtle">Architecture Server-First</Badge>
            <Badge variant="outline">Non-Regression QA</Badge>
          </div>
        </section>

        {/* Section 6: Cards & Surface Containers */}
        <section className="space-y-8">
          <div className="border-b border-white/[0.06] pb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
              6. Conteneurs & Cartes Modulaires
            </h2>
            <p className="text-sm text-[#758195] mt-1">
              Structures pour la présentation des expertises et des modules Élancé ERP.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card accent="gold">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="gold" indicator="gold">Pôle Édition</Badge>
                  <Sparkles className="size-4 text-[#C59B45]" />
                </div>
                <CardTitle className="mt-4">Élancé ERP</CardTitle>
                <CardDescription>
                  Solution intégrée d&apos;entreprise pour le pilotage opérationnel et la comptabilité.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-xs text-[#CAD0DB]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-[#C59B45]" />
                    Architecture modulaire découplée
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-[#C59B45]" />
                    Déploiement On-Premise ou Cloud
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="justify-between">
                <span className="text-xs text-[#758195] font-mono">Module Core</span>
                <Button variant="link" size="sm">Fiche Produit →</Button>
              </CardFooter>
            </Card>

            <Card accent="blue">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="blue" indicator="blue">Pôle QA</Badge>
                  <ShieldCheck className="size-4 text-[#1D68F2]" />
                </div>
                <CardTitle className="mt-4">Automatisation des Tests</CardTitle>
                <CardDescription>
                  Pipelines de tests continus garantissant zéro régression.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-xs text-[#CAD0DB]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-[#1D68F2]" />
                    Tests fonctionnels & de charge
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-[#1D68F2]" />
                    Intégration CI/CD certifiée
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="justify-between">
                <span className="text-xs text-[#758195] font-mono">Service 06</span>
                <Button variant="link" size="sm" className="text-[#60A5FA]">Méthodologie QA →</Button>
              </CardFooter>
            </Card>

            <Card elevation="surface">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="silver" indicator="silver">Développement</Badge>
                  <Code2 className="size-4 text-[#CAD0DB]" />
                </div>
                <CardTitle className="mt-4">Logiciels Sur-Mesure</CardTitle>
                <CardDescription>
                  Conception et ingénierie de plateformes métiers adaptées à vos règles d&apos;affaires.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-xs text-[#CAD0DB]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-[#CAD0DB]" />
                    Web apps & backends résilients
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-3.5 text-[#CAD0DB]" />
                    Interopérabilité des API
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="justify-between">
                <span className="text-xs text-[#758195] font-mono">Service 01</span>
                <Button variant="link" size="sm" className="text-[#CAD0DB]">En savoir plus →</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Section 7: Form Controls */}
        <section className="space-y-8">
          <div className="border-b border-white/[0.06] pb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
              7. Contrôles de Formulaire
            </h2>
            <p className="text-sm text-[#758195] mt-1">
              Champs de saisie sobres avec focus champagne gold ou bleu électrique.
            </p>
          </div>

          <div className="p-8 rounded-[16px] bg-[#111318] border border-white/[0.06] max-w-2xl space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-medium text-[#CAD0DB] block">Nom & Prénom</label>
                <Input placeholder="ex. Jean Dupont" accent="gold" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-[#CAD0DB] block">Entreprise / Organisation</label>
                <Input placeholder="ex. Société Industrielle SA" accent="gold" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-[#CAD0DB] block">Adresse Email Professionnelle</label>
              <Input type="email" placeholder="contact@entreprise.com" accent="blue" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-[#CAD0DB] block">Périmètre du Projet ou Démo Élancé</label>
              <Textarea placeholder="Décrivez votre besoin technique..." accent="gold" />
            </div>

            <div className="pt-2 flex justify-end">
              <Button variant="gold">
                Transmettre la Demande
                <ArrowRight className="size-4 ml-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* Brand System Notice */}
        <div className="pt-12 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#758195]">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#F8FAFC]">{brandConfig.name}</span>
            <span>—</span>
            <span className="text-[#C59B45] italic">&ldquo;{brandConfig.tagline}&rdquo;</span>
          </div>

          <div>
            <span>Domaine officiel : </span>
            <a
              href={`https://${brandConfig.domain}`}
              target="_blank"
              rel="noreferrer"
              className="text-[#CAD0DB] hover:text-[#DFC489] transition-colors inline-flex items-center gap-1"
            >
              {brandConfig.domain}
              <ExternalLink className="size-3" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
