// NOTE: Structured Data (JSON-LD) Component for SEO.
// Embeds Schema.org Organization and SoftwareApplication entities.
// Validated for rich search snippets and semantic crawler understanding.
import * as React from 'react';
import {
  getOrganizationStructuredData,
  getElanceErpStructuredData,
} from '@/lib/seo/metadata';

export function StructuredData() {
  const organizationData = getOrganizationStructuredData();
  const elanceData = getElanceErpStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(elanceData),
        }}
      />
    </>
  );
}
