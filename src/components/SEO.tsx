import React from 'react';
import { Helmet } from 'react-helmet';

export interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string;
  ogType?: 'website' | 'article' | 'product';
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  noindex?: boolean;
  schema?: Record<string, any> | Array<Record<string, any>>;
}

export const defaultSiteMetadata = {
  siteName: 'Intellimark AI',
  siteUrl: 'https://www.intellimark.ai',
  defaultImage: 'https://www.intellimark.ai/src/images/favicon.png',
  defaultDescription:
    'Intellimark AI provides enterprise revenue growth management, AI demand forecasting, and predictive recommendation systems for FMCG, retail, and CPG enterprises.',
};

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl,
  keywords,
  ogType = 'website',
  ogImage = defaultSiteMetadata.defaultImage,
  twitterCard = 'summary_large_image',
  noindex = false,
  schema,
}) => {
  const fullTitle = title.includes('Intellimark')
    ? title
    : `${title} | ${defaultSiteMetadata.siteName}`;
  const canonical = canonicalUrl || defaultSiteMetadata.siteUrl;

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />

      {/* Robots meta */}
      <meta
        name="robots"
        content={noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'}
      />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content={defaultSiteMetadata.siteName} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema.org Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(schema) ? schema : schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
