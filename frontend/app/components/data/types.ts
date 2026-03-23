export type NavItem = {
  label: string;
  to: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type Action = {
  label: string;
  to: string;
  external?: boolean;
};

export type Stat = {
  value: string;
  label: string;
};

export type DoctorProfile = {
  name: string;
  role: string;
  specialties: string[];
  education: string[];
  summary: string;
  image: ImageAsset;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type TreatmentCategory = {
  title: string;
  description: string;
  items: string[];
};

export type FooterLinkGroup = {
  title: string;
  links: NavItem[];
};
