// NOTE: Structured Case Studies (Réalisations) data architecture for RÉVA Consulting.
// Reusable data model designed to receive real production case studies.
// Uses clearly marked reference template data without inventing unverified client names or metrics.

export interface CaseStudyArchitectureNode {
  readonly label: string;
  readonly role: string;
  readonly status: 'primary' | 'connected' | 'validated';
}

export interface CaseStudy {
  readonly id: string;
  readonly number: string;
  readonly category: string;
  readonly clientProject: string;
  readonly clientType: string;
  readonly industry: string;
  readonly problemTitle: string;
  readonly problem: string;
  readonly solutionTitle: string;
  readonly solution: string;
  readonly outcomeTitle: string;
  readonly outcome: string;
  readonly technologies: readonly string[];
  readonly accent: 'gold' | 'blue' | 'silver';
  readonly referenceBadge: string;
  readonly schematic: {
    readonly title: string;
    readonly type: 'erp' | 'qa' | 'platform';
    readonly nodes: readonly CaseStudyArchitectureNode[];
    readonly metricsOrHighlights: readonly {
      readonly label: string;
      readonly value: string;
    }[];
  };
}

export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    id: 'erp-multi-sites',
    number: '01',
    category: 'Logiciels Métier & ERP',
    clientProject: 'Unification des flux opérationnels & Déploiement ERP centralisé',
    clientType: 'PME Industrielle & Distribution Multi-Dépôts',
    industry: 'Industrie, BTP & Négoce',
    referenceBadge: 'CADRE DE RÉFÉRENCE ARCHITECTURALE',
    problemTitle: 'Fragmentation des données & ruptures d’information',
    problem:
      'Multiplication d’outils disparates, de fichiers tableurs déconnectés et de ressaisies manuelles entre les services commerciaux, achats et dépôts logistiques. Cette absence de source de vérité unique générait des écarts d’inventaire récurrents et des délais excessifs dans l’édition des situations de facturation.',
    solutionTitle: 'Intégration d’un socle unifié basé sur Élancé ERP',
    solution:
      'Déploiement d’un environnement de gestion intégré centralisant l’ensemble des processus opérationnels : gestion des stocks multi-emplacements, suivi des chantiers et affaires, chaînes d’achats et facturation automatisée. Interconnexion des flux via des API sécurisées et interfaces adaptées aux opérateurs terrain.',
    outcomeTitle: 'Continuité opérationnelle & traçabilité de bout en bout',
    outcome:
      'Centralisation intégrale des données d’exploitation au sein d’une base unifiée, élimination des doubles saisies administratives, fiabilisation des niveaux de stocks en temps réel et accélération des cycles de facturation client.',
    technologies: ['Élancé ERP Core', 'PostgreSQL', 'Next.js', 'REST API', 'Redis Cache', 'Docker'],
    accent: 'gold',
    schematic: {
      title: 'TOPOLOGIE DE CENTRALISATION DES FLUX',
      type: 'erp',
      nodes: [
        { label: 'Dépôts & Chantiers', role: 'Saisie terrain & mobilité', status: 'connected' },
        { label: 'Élancé ERP Hub', role: 'Moteur central de gestion', status: 'primary' },
        { label: 'Finance & Facturation', role: 'Synchronisation comptable', status: 'validated' },
      ],
      metricsOrHighlights: [
        { label: 'Base de données', value: 'Source unique' },
        { label: 'Architecture', value: 'Modulaire & Découplée' },
        { label: 'Disponibilité', value: 'Haute résilience' },
      ],
    },
  },
  {
    id: 'qa-ci-automation',
    number: '02',
    category: 'Tests Logiciels & Automatisation QA',
    clientProject: 'Automatisation des tests E2E & Chaîne de qualification continue',
    clientType: 'Plateforme SaaS B2B & Services Numériques',
    industry: 'Fintech & Solutions Cloud',
    referenceBadge: 'CADRE DE RÉFÉRENCE ARCHITECTURALE',
    problemTitle: 'Risques de régression & cycles de recette manuelle lourds',
    problem:
      'Cycles de mise en production ralentis par des phases de tests de non-régression manuelles et répétitives. Difficulté à maintenir une couverture de test exhaustive sur les parcours utilisateurs critiques (authentification multi-facteurs, transactions financières et imports de données volumineux).',
    solutionTitle: 'Framework d’automatisation E2E et intégration continue',
    solution:
      'Conception d’une suite de tests automatisés de bout en bout (Playwright) et de tests de contrats d’API intégrés directement au pipeline CI/CD. Exécution systématique des scénarios critiques à chaque merge request avec génération de rapports de conformité visuels et techniques.',
    outcomeTitle: 'Déploiements maîtrisés & détection préventive des anomalies',
    outcome:
      'Garantie de non-régression systématique avant toute mise en ligne, réduction drastique de la charge de tests manuels répétitifs pour les équipes, et validation automatisée des parcours critiques à chaque version logicielle.',
    technologies: ['Playwright', 'TypeScript', 'GitHub Actions', 'Postman / Newman', 'Docker', 'SonarQube'],
    accent: 'blue',
    schematic: {
      title: 'PIPELINE DE VALIDATION AUTOMATISÉE',
      type: 'qa',
      nodes: [
        { label: 'Code Commit / PR', role: 'Déclencheur CI/CD', status: 'connected' },
        { label: 'Playwright & API Tests', role: 'Exécution parallèle E2E', status: 'primary' },
        { label: 'Rapport & Gate de Prod', role: 'Certification Zéro-Régression', status: 'validated' },
      ],
      metricsOrHighlights: [
        { label: 'Scénarios critiques', value: '100% Automatisés' },
        { label: 'Déclenchement', value: 'Chaque commit / PR' },
        { label: 'Couverture', value: 'E2E & Contrats API' },
      ],
    },
  },
  {
    id: 'web-mobile-field-app',
    number: '03',
    category: 'Applications Web & Mobiles Métier',
    clientProject: 'Application métier de relevé terrain avec fonctionnement hors-ligne',
    clientType: 'Opérateur de Maintenance & Services Techniques',
    industry: 'Énergie & Services Techniques',
    referenceBadge: 'CADRE DE RÉFÉRENCE ARCHITECTURALE',
    problemTitle: 'Perte d’information terrain & zones blanches de connectivité',
    problem:
      'Techniciens confrontés à l’absence fréquente de réseau mobile lors des interventions en sous-sols ou zones isolées. Utilisation de rapports papier nécessitant une ressaisie ultérieure au bureau, induisant des erreurs de retranscription et des délais de transmission aux clients.',
    solutionTitle: 'Application PWA Offline-First & Synchronisation résiliente',
    solution:
      'Développement d’une application web progressive (PWA) conçue selon le paradigme offline-first : stockage local chiffré des fiches d’intervention sur le terminal, signature électronique embarquée et protocole de réconciliation automatique des données dès rétablissement du réseau.',
    outcomeTitle: 'Zéro papier & transmission instantanée des données validées',
    outcome:
      'Élimination complète des bordereaux d’intervention papier, autonomie opérationnelle totale des équipes en zone blanche, et consolidation immédiate des rapports techniques dans le portail de supervision centralisé.',
    technologies: ['React / Next.js', 'TypeScript', 'IndexedDB', 'Tailwind CSS', 'Node.js', 'Service Workers'],
    accent: 'silver',
    schematic: {
      title: 'ARCHITECTURE OFFLINE-FIRST & RÉCONCILIATION',
      type: 'platform',
      nodes: [
        { label: 'Terminal Technicien', role: 'Stockage local IndexedDB', status: 'connected' },
        { label: 'Moteur de Sync', role: 'Réconciliation des conflits', status: 'primary' },
        { label: 'Portail Superviseur', role: 'Visibilité temps réel', status: 'validated' },
      ],
      metricsOrHighlights: [
        { label: 'Mode hors-ligne', value: 'Natif & Résilient' },
        { label: 'Signature', value: 'Électronique sécurisée' },
        { label: 'Synchronisation', value: 'Automatique bidirectionnelle' },
      ],
    },
  },
];
