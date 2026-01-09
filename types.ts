
// Add React import to fix the "Cannot find namespace 'React'" error when using React.ReactNode
import React from 'react';

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  icon: React.ReactNode;
}

export interface GearItem {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
  featured?: boolean;
}

export interface Partner {
  name: string;
  logo: string;
  url: string;
}

export interface SocialLinks {
  instagram?: string;
  tiktok?: string;
  youtube?: string;
  twitter?: string;
}

export interface Profile {
  name: string;
  bio: string;
  image: string;
  socials: SocialLinks;
}