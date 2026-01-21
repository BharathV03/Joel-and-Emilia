import React from 'react';
import { Video, Globe, Users, Play, Camera, Mic, Backpack, VideoIcon } from 'lucide-react';
import { StatItem, GearItem, Partner, Profile } from './types';

export const VISITED_COUNTRIES = [
  "Thailand", "Philippines", "Australia", "Singapore", "Malaysia", "Indonesia", "Turkey",
  "Cambodia", "Vietnam", "Japan", "Maldives", "Sri Lanka", "Iceland", "Panama", "Ecuador",
  "China", "South Korea", "Yemen", "UAE", "United Arab Emirates", "India", "Jordan", "UK", "United Kingdom", "Finland", "Vanuatu",
  "Czechia", "Italy", "Bolivia", "Chile", "Colombia", "Kosovo", "Albania", "Switzerland",
  "Fiji", "France", "Austria", "Hungary", "Hong Kong", "Taiwan", "Bahrain", "Portugal", "Laos"
];

export const STATS: StatItem[] = [
  { label: "Videos Made", value: 321, icon: <Video className="w-6 h-6" /> },
  { label: "Countries Visited", value: 42, icon: <Globe className="w-6 h-6" /> },
  { label: "Subscribers", value: 341000, suffix: "+", icon: <Users className="w-6 h-6" /> },
  { label: "Total Views", value: 38.5, suffix: "M+", icon: <Play className="w-6 h-6" /> },
];

export const GEAR: GearItem[] = [
  {
    id: 1,
    name: "360 Camera",
    description: "Capture everything in every direction with high resolution.",
    image: "/images/360camera.webp",
    link: "https://store.insta360.com/in/product/x5?utm_t=",
    featured: true
  },
  {
    id: 2,
    name: "Compact Drone",
    description: "Aerial views for epic landscape shots.",
    image: "/images/compactdrone.webp",
    link: "https://amzn.to/49tPhH4",
    featured: true
  },
  {
    id: 3,
    name: "Wireless Microphone",
    description: "Crystal clear audio for vlogging on the move.",
    image: "/images/wirelessmic.webp",
    link: "https://amzn.to/3tHwLHH",
    featured: true
  },
  {
    id: 4,
    name: "Vlog Camera",
    description: "Our primary 4K camera for sharp cinematic footage.",
    image: "/images/vlogcamera.webp",
    link: "https://amzn.to/4h9jzAY",
    featured: true
  },
  {
    id: 5,
    name: "Waterproof Bag",
    description: "Protecting our gear in the wildest environments.",
    image: "/images/waterproofbag.webp",
    link: "https://amzn.to/3tE9WVq"
  },
  {
    id: 6,
    name: "Zoom Lens",
    description: "Getting closer to the action and nature.",
    image: "/images/zoomlens.webp",
    link: "https://amzn.to/4js9OAc"
  }
];

export const PROFILES: Profile[] = [
  {
    name: "Joel Friend",
    bio: "UK-based travel filmmaker with a passion for capturing remote destinations and sharing authentic travel experiences from around the globe.",
    image: "/images/joel.webp",
    socials: {
      instagram: "https://instagram.com/joelfriendy",
      tiktok: "https://tiktok.com/@joelfriendy"
    }
  },
  {
    name: "Emilia Beattie",
    bio: "UK-based adventure seeker and content creator documenting life on the road, from hidden gems to breathtaking landscapes across the world.",
    image: "/images/emilia.webp",
    socials: {
      instagram: "https://instagram.com/emiliabeattie",
      tiktok: "https://tiktok.com/@emiliabeattie"
    }
  }
];

export const PARTNERS: Partner[] = [
  { name: "Nomad eSIM", logo: "https://getnomad.app/favicon.ico", url: "https://getnomad.app" },
  { name: "Safety Wing", logo: "https://safetywing.com/favicon.ico", url: "https://bit.ly/4qZv7vx" },
  { name: "Proton VPN", logo: "https://protonvpn.com/favicon.ico", url: "https://protonvpn.com/joelfriend" },
  { name: "Klook", logo: "https://klook.com/favicon.ico", url: "http://bit.ly/49ttzE7" },
];