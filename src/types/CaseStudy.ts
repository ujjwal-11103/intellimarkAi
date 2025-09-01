export type Industry = 'all' | 'healthcare' | 'finance' | 'ecommerce' | 'manufacturing';

export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: Exclude<Industry, 'all'>;
  description: string;
  image: string;
  readTime: number;
  results: {
    improvement: string;
    metric: string;
    timeframe: string;
  };
  tags: string[];
}