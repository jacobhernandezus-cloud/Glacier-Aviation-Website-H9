import { Program, Aircraft, Testimonial, NavItem, GalleryItem, BookingService } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Programs', href: '#programs' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Book Flight', href: '#booking' },
];

export const PROGRAMS: Program[] = [
  {
    title: "Private Pilot License (PPL-H)",
    description: "Your first step into the world of vertical flight. Master the fundamentals of helicopter aerodynamics, hovering, and cross-country navigation.",
    image: "https://picsum.photos/800/600?random=1",
    features: ["FAA Part 141 Approved", "One-on-one instruction", "Flexible scheduling"],
  },
  {
    title: "Commercial Pilot License",
    description: "Turn your passion into a career. This rigorous course prepares you for professional operations, including advanced maneuvers and emergency procedures.",
    image: "https://picsum.photos/800/600?random=2",
    features: ["Career mentorship", "Advanced turbine transition", "High-altitude training"],
  },
  {
    title: "Instrument Rating",
    description: "Fly in any weather. The Instrument Rating is essential for professional pilots, teaching you to fly solely by reference to instruments.",
    image: "https://picsum.photos/800/600?random=3",
    features: ["Glass cockpit training", "IFR cross-country", "Safety focused"],
  },
  {
    title: "Certified Flight Instructor",
    description: "Build hours and share your knowledge. Becoming a CFI is the most common pathway to building flight time for your first turbine job.",
    image: "https://picsum.photos/800/600?random=4",
    features: ["Guaranteed interview", "Teaching methodology", "CFI & CFII available"],
  },
];

export const FLEET: Aircraft[] = [
  {
    model: "Robinson R22 Beta II",
    type: "Piston Trainer",
    description: "The world's most popular training helicopter. Responsive, reliable, and cost-effective for building your initial hours.",
    image: "https://picsum.photos/800/500?random=10",
    specs: { speed: "110 mph", range: "200 nm", seats: 2 },
  },
  {
    model: "Robinson R44 Raven II",
    type: "Advanced Trainer",
    description: "A four-seat workhorse used for instrument training and commercial operations. Experience the hydraulic controls and increased power.",
    image: "https://picsum.photos/800/500?random=11",
    specs: { speed: "130 mph", range: "300 nm", seats: 4 },
  },
  {
    model: "Bell 206 JetRanger",
    type: "Turbine",
    description: "Step up to turbine power. The JetRanger is the industry standard for charter and tour operations.",
    image: "https://picsum.photos/800/500?random=12",
    specs: { speed: "130 kts", range: "374 nm", seats: 5 },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    role: "EMS Pilot",
    quote: "The training environment here is unmatched. The transition from the R22 to turbine aircraft was seamless thanks to the experienced instructors.",
    image: "https://picsum.photos/100/100?random=20",
  },
  {
    name: "Michael Chen",
    role: "Tour Pilot",
    quote: "I finished my Commercial rating in record time. The maintenance team keeps the fleet in top shape, meaning no cancelled flights.",
    image: "https://picsum.photos/100/100?random=21",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, category: 'aerial', image: 'https://picsum.photos/800/600?random=30', caption: 'Sunset over the Pacific' },
  { id: 2, category: 'training', image: 'https://picsum.photos/800/600?random=31', caption: 'Pre-flight Inspection' },
  { id: 3, category: 'fleet', image: 'https://picsum.photos/800/600?random=32', caption: 'R44 Ready for Takeoff' },
  { id: 4, category: 'aerial', image: 'https://picsum.photos/800/600?random=33', caption: 'Mountain Flying' },
  { id: 5, category: 'training', image: 'https://picsum.photos/800/600?random=34', caption: 'Classroom Instruction' },
  { id: 6, category: 'fleet', image: 'https://picsum.photos/800/600?random=35', caption: 'Bell 206 Turbine' },
  { id: 7, category: 'aerial', image: 'https://picsum.photos/800/600?random=36', caption: 'City Skyline Tour' },
  { id: 8, category: 'training', image: 'https://picsum.photos/800/600?random=37', caption: 'First Solo Flight' },
];

export const BOOKING_SERVICES: BookingService[] = [
  { id: 'discovery', title: 'Discovery Flight', duration: '1 Hour', price: '$299' },
  { id: 'intro_lesson', title: 'Introductory Lesson', duration: '2 Hours', price: '$499' },
  { id: 'scenic_tour', title: 'Scenic Coastal Tour', duration: '45 Minutes', price: '$249' },
  { id: 'photo_flight', title: 'Photography Flight', duration: '1 Hour', price: '$399' },
];