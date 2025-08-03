export interface HeroSectionData {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  imageUrlMobile?: string;
}

export interface AboutSectionData {
  heading: string;
  subheading?: string;
  description?: string[];
  targets?: string[];
  cost: string;
  details: string[];
  perks: string[];
}

export interface LearningSectionData {
  block: { heading: string; items: string[]; bgColour: string }[];
}

export interface CTASectionData {
  heading?: string;
  text?: string;
  buttonLabel?: string;
  link?: string;
  formType?: string;
}

export interface CoursePageProps {
  hero: HeroSectionData;
  about: AboutSectionData;
  cta: CTASectionData;
  learning: LearningSectionData;
}
