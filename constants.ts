import { Program, Aircraft, Testimonial, NavItem, GalleryItem, BookingService } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Programs', href: '#programs' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Book Flight', href: '#booking' },
];

export const PROGRAMS: Program[] = [
  {
    title: "Private Pilot License (PPL-H)",
    description: "Your first step into the world of vertical flight. Master the fundamentals of helicopter aerodynamics, hovering, and cross-country navigation.",
    image: "https://picsum.photos/800/600?random=1",
    features: ["FAA Part 141 Approved", "One-on-one instruction", "Flexible scheduling"],
    details: {
      longDescription: "The Private Pilot Certificate is the foundation of your aviation career. At Glacier Aviation, we don't just teach you to pass the test; we teach you to be a safe, competent pilot in real-world environments. Our PPL syllabus covers aerodynamics, weather decision making, airspace navigation, and emergency procedures in both R22 and R44 aircraft.",
      differentiators: [
        "Mountain flying exposure included in primary training",
        "Dedicated ground school facility with full-time tutors",
        "Scenario-based training for real-world decision making",
        "Access to our student mentorship program"
      ],
      pricing: "$18,500 - $22,000 (Based on FAA minimums + national average overage)",
      duration: "3-6 Months (Full Time)",
      prerequisites: ["Be at least 17 years old", "Read, speak, write English", "Hold a valid FAA Medical Certificate"]
    }
  },
  {
    title: "Commercial Pilot License",
    description: "Turn your passion into a career. This rigorous course prepares you for professional operations, including advanced maneuvers and emergency procedures.",
    image: "https://picsum.photos/800/600?random=2",
    features: ["Career mentorship", "Advanced turbine transition", "High-altitude training"],
    details: {
      longDescription: "The Commercial Pilot course is where you refine your skills to a professional standard. We focus on precision, advanced autorotations, confined area operations, and regulatory knowledge required for commercial operators. This is the gateway to being paid to fly.",
      differentiators: [
        "Introduction to Turbine operations (Bell 206)",
        "Vertical Reference / Long-line fundamentals",
        "External load operations workshop",
        "Resume building and carrier interview prep"
      ],
      pricing: "$45,000 - $55,000 (Includes instrument training)",
      duration: "6-9 Months",
      prerequisites: ["Hold a Private Pilot License", "Minimum 150 hours flight time (upon checkride)"]
    }
  },
  {
    title: "Instrument Rating",
    description: "Fly in any weather. The Instrument Rating is essential for professional pilots, teaching you to fly solely by reference to instruments.",
    image: "https://picsum.photos/800/600?random=3",
    features: ["Glass cockpit training", "IFR cross-country", "Safety focused"],
    details: {
      longDescription: "Master the art of flying without visual reference to the ground. Our Instrument Rating course utilizes both aircraft and our advanced flight simulators to teach you precision attitude instrument flying, navigation, and approach procedures. This rating is critical for safety and is a requirement for most career pilot jobs.",
      differentiators: [
        "Training in actual IMC (Instrument Meteorological Conditions) when safe",
        "Modern Glass Cockpit avionics (Garmin G500/GTN750)",
        "Cost-saving simulator integration",
        "Focus on Single-Pilot CRM"
      ],
      pricing: "$12,000 - $15,000",
      duration: "2-3 Months",
      prerequisites: ["Hold a Private Pilot License"]
    }
  },
  {
    title: "Certified Flight Instructor",
    description: "Build hours and share your knowledge. Becoming a CFI is the most common pathway to building flight time for your first turbine job.",
    image: "https://picsum.photos/800/600?random=4",
    features: ["Guaranteed interview", "Teaching methodology", "CFI & CFII available"],
    details: {
      longDescription: "Learn to teach what you love. The CFI Academy transforms you from a pilot into an educator. You will master the Fundamentals of Instruction (FOI), gain deep technical knowledge, and learn how to safely manage a student from the other seat. Glacier Aviation hires the top graduates from this program.",
      differentiators: [
        "Guaranteed job interview with Glacier Aviation upon completion",
        "Standardized teaching handbook provided",
        "Mentorship from the Chief Instructor",
        "High checkride pass rate history"
      ],
      pricing: "$8,500 - $10,000",
      duration: "2 Months",
      prerequisites: ["Hold a Commercial Pilot License", "Instrument Rating"]
    }
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
  {
    name: "Jessica Wong",
    role: "Flight Instructor",
    quote: "Going through the CFI Academy at Glacier was the best decision for my career. The mentorship I received helped me land my first job immediately.",
    image: "https://picsum.photos/100/100?random=22",
  },
  {
    name: "David Miller",
    role: "Private Pilot",
    quote: "I've always wanted to fly. The flexible scheduling allowed me to get my license while keeping my day job. Truly a student-first atmosphere.",
    image: "https://picsum.photos/100/100?random=23",
  },
  {
    name: "Robert Davis",
    role: "Police Air Support",
    quote: "The tactical flight training options gave me the edge I needed for law enforcement. The night vision goggle training was exceptional.",
    image: "https://picsum.photos/100/100?random=24",
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