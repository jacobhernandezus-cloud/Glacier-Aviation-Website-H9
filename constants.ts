import { Program, Aircraft, Testimonial, NavItem, GalleryItem, BookingService } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'The Experience', href: '#home' },
  { label: 'Programs', href: '#programs' },
  { label: 'The Fleet', href: '#fleet' },
  { label: 'Atelier', href: '#gallery' },
  { label: 'Philosophy', href: '#about' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Concierge', href: '#booking' },
];

export const PROGRAMS: Program[] = [
  {
    title: "The Privateer (PPL-H)",
    description: "Begin your journey into vertical mastery. A bespoke curriculum designed for the discerning individual seeking foundational excellence.",
    image: "https://images.unsplash.com/photo-1509130298739-651801c76e96?q=80&w=2070&auto=format&fit=crop",
    features: ["Personalized Mentorship", "Bespoke Scheduling", "Concierge Ground Support"],
    details: {
      longDescription: "The Vesper Private Pilot program is an immersion into the art of flight. We move beyond standard checklists to cultivate an intuitive understanding of aerodynamics and decision-making. Every lesson is conducted in a tranquil, focused environment where the student's progress is our only metric.",
      differentiators: [
        "One-on-one sessions with senior instructors only",
        "Executive ground lounge access during theory training",
        "Custom mission planning for private travel",
        "Exclusive alumni networking events"
      ],
      pricing: "Tiered Investment - Consultation Required",
      duration: "Adaptive Mastery (Standard: 3-5 Months)",
      prerequisites: ["English Proficiency", "Valid FAA Medical", "Admissions Interview"]
    }
  },
  {
    title: "Executive Professional (CPL)",
    description: "Transformation into a professional aviator. Precision-focused training for careers in corporate aviation and high-end charter.",
    image: "https://images.unsplash.com/photo-1464039397811-476f652a343b?q=80&w=2068&auto=format&fit=crop",
    features: ["Career Path Integration", "Turbine Transition Prep", "Advanced CRM"],
    details: {
      longDescription: "Our Commercial program is the gold standard for future professional pilots. We focus on the nuance of high-end operations, ensuring our graduates possess not just the skill to fly, but the presence to represent elite organizations.",
      differentiators: [
        "Simulated VIP mission profiles",
        "Introduction to Vesper's global network",
        "Advanced mountain and coastal operations",
        "Professional presence coaching"
      ],
      pricing: "Corporate Rates Available",
      duration: "Intensive (6-8 Months)",
      prerequisites: ["Vesper PPL or Equivalent", "150 Hours Logged"]
    }
  },
  {
    title: "Instrument Mastery",
    description: "Precision navigation in all environments. Master the tranquil complexity of flying solely by reference to high-fidelity instrumentation.",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop",
    features: ["Glass Cockpit Standards", "Real-World IFR Routing", "IFR Safety Focus"],
    details: {
      longDescription: "Silence the noise. Our Instrument Mastery course utilizes state-of-the-art simulators and G500 equipped aircraft to teach you the true meaning of 'all-weather' capability. We focus on the pilot's internal landscape as much as the external horizon.",
      differentiators: [
        "Scenario-based training in complex Pacific NW weather",
        "Advanced G500/GTN750 glass cockpit training",
        "Focus on single-pilot workload management",
        "Precision approach perfection workshops"
      ],
      pricing: "$14,000 - $16,000",
      duration: "8-12 Weeks",
      prerequisites: ["Private Pilot License"]
    }
  },
  {
    title: "Instruction Academy (CFI)",
    description: "The apex of aviation knowledge. Learn to translate complex concepts into seamless experiences for the next generation of pilots.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2017&auto=format&fit=crop",
    features: ["Pedagogical Excellence", "High Pass Rate History", "Immediate Hiring Priority"],
    details: {
      longDescription: "The Vesper CFI Academy is where masters are made. We teach the philosophy of education, ensuring our instructors can adapt to any student's learning style while maintaining the Vesper standard of excellence.",
      differentiators: [
        "Guaranteed interview with Vesper Aviation",
        "Mentorship from our Chief Flight Officer",
        "Proprietary Vesper instructional handbook",
        "Community leadership training"
      ],
      pricing: "Professional Grant Options Available",
      duration: "6-8 Weeks",
      prerequisites: ["Commercial License", "Instrument Rating"]
    }
  },
];

export const FLEET: Aircraft[] = [
  {
    model: "Robinson R22 Beta II",
    type: "Precision Trainer",
    description: "An agile and responsive platform for mastering the fundamentals of hover and control. The pure essence of helicopter flight.",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop",
    specs: { speed: "110 mph", range: "200 nm", seats: 2 },
  },
  {
    model: "Robinson R44 Raven II",
    type: "Advanced Touring",
    description: "Equipped with air conditioning and hydraulic controls, the R44 offers a smoother, more refined training and transport experience.",
    image: "https://images.unsplash.com/photo-1509130298739-651801c76e96?q=80&w=2070&auto=format&fit=crop",
    specs: { speed: "130 mph", range: "300 nm", seats: 4 },
  },
  {
    model: "Bell 206 JetRanger",
    type: "Turbine Executive",
    description: "The legendary turbine workhorse. Step into the world of jet power with an aircraft that defines reliability and comfort.",
    image: "https://images.unsplash.com/photo-1464039397811-476f652a343b?q=80&w=2068&auto=format&fit=crop",
    specs: { speed: "130 kts", range: "374 nm", seats: 5 },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Elena Rossi",
    role: "Global Citizen",
    quote: "Vesper is not just a flight school; it's a sanctuary of excellence. The attention to detail in my private pilot training was simply impeccable.",
    image: "https://i.pravatar.cc/150?u=elena",
  },
  {
    name: "Julian Thorne",
    role: "Corporate Pilot",
    quote: "The Vesper standard is recognized globally. My transition into corporate jet operations was vastly improved by their focus on professional presence.",
    image: "https://i.pravatar.cc/150?u=julian",
  },
  {
    name: "Aria Chen",
    role: "Lead Instructor",
    quote: "Instructing here allows me to focus on true pedagogical quality. We aren't building hours; we are building legacies.",
    image: "https://i.pravatar.cc/150?u=aria",
  },
  {
    name: "Marcus Vanderbilt",
    role: "Entrepreneur",
    quote: "Finding a bespoke flight program that respects my schedule was difficult until I found Vesper. Their concierge service is unmatched.",
    image: "https://i.pravatar.cc/150?u=marcus",
  },
  {
    name: "Sophia Sinclair",
    role: "Aerial Photographer",
    quote: "The view from a Vesper aircraft is beautiful, but the peace of mind knowing the maintenance is top-tier is what truly matters.",
    image: "https://i.pravatar.cc/150?u=sophia",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, category: 'aerial', image: 'https://images.unsplash.com/photo-1473968512647-3e44a224fe8f?q=80&w=2070&auto=format&fit=crop', caption: 'The Horizon at Vesper' },
  { id: 2, category: 'training', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?q=80&w=2070&auto=format&fit=crop', caption: 'Focused Mastery' },
  { id: 3, category: 'fleet', image: 'https://images.unsplash.com/photo-1509130298739-651801c76e96?q=80&w=2070&auto=format&fit=crop', caption: 'R44 Executive' },
  { id: 4, category: 'aerial', image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=2070&auto=format&fit=crop', caption: 'Pacific Coastal Route' },
  { id: 5, category: 'training', image: 'https://images.unsplash.com/photo-1483381719024-746df219020d?q=80&w=2070&auto=format&fit=crop', caption: 'Theory Session' },
  { id: 6, category: 'fleet', image: 'https://images.unsplash.com/photo-1464039397811-476f652a343b?q=80&w=2068&auto=format&fit=crop', caption: 'The Bell 206' },
];

export const BOOKING_SERVICES: BookingService[] = [
  { id: 'discovery', title: 'The Vesper Discovery', duration: '90 Minutes', price: '$495' },
  { id: 'intro_lesson', title: 'Curated First Lesson', duration: '3 Hours', price: '$750' },
  { id: 'scenic_tour', title: 'Champagne Coastal Tour', duration: '1 Hour', price: '$850' },
  { id: 'photo_flight', title: 'Atelier Aerial Session', duration: '2 Hours', price: '$1,200' },
];