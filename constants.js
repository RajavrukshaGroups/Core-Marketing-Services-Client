import { i } from "framer-motion/client";
import gallery1 from "./assets/galler1.jpg";
import gallery2 from "./assets/galler2.jpg";
import gallery3 from "./assets/galler3.jpg";
import gallery4 from "./assets/galler4.jpg";
import gallery5 from "./assets/galler5.jpg";
import gallery6 from "./assets/galler6.jpg";
import gallery7 from "./assets/galler7.jpg";
import gallery8 from "./assets/galler8.jpg";
import gallery9 from "./assets/galler9.jpg";
import gallery10 from "./assets/galler10.jpg";
import gallery11 from "./assets/galler11.jpg";
import gallery12 from "./assets/galler12.jpg";
import gallery13 from "./assets/galler13.jpg";
import gallery14 from "./assets/galler14.jpg";
import gallery15 from "./assets/galler15.jpg";
import gallery16 from "./assets/galler16.jpg";
import gallery17 from "./assets/galler17.jpg";
import gallery18 from "./assets/galler18.jpg";
import gallery19 from "./assets/galler19.jpg";
import gallery20 from "./assets/galler20.jpg";
import gallery21 from "./assets/galler21.jpg";
import gallery22 from "./assets/galler22.jpg";
import gallery23 from "./assets/galler23.jpg";
import gallery24 from "./assets/galler24.jpg";
import ProductLaunch from "./assets/ProductLaunch.png";
import ContactData from "./assets/Contact.png";
import socialMediaMarketing from "./assets/social-media.jpg";






export const COLORS = {
  primary: '#003399',
  sky: '#00AEEF',
  accent: '#ED1C24',
  white: '#FFFFFF',
  text: '#1A1A1A',
};

export const SERVICES = [
  {
    title: "Digital Marketing & Networking",
    description: "In collaboration with Digital Elite Services. High-performance networking and strategic digital ad placements.",
    icon: "Globe",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    collaborator: "Digital Elite Services",
    url: "https://digitaleliteservices.in/"
  },
  {
    title: "Social Media Marketing",
    description: "Partnered with Digital Elite Services. Crafting elite brand presence and viral narratives across platforms.",
    icon: "Share2",
    image: socialMediaMarketing,
    collaborator: "Digital Elite Services",
    url: "https://digitaleliteservices.in/"
  },
  {
    title: "Spot Campaigns",
    description: "On-ground localized activation campaigns designed for immediate visibility and impact.",
    icon: "MapPin",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Van Campaigns",
    description: "Mobile marketing units that take your brand message directly to your target geography.",
    icon: "Truck",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Mechanic Meets",
    description: "Specialized B2B community engagement programs for automotive and industrial sectors.",
    icon: "Settings",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Retailer Meet",
    description: "Strategic networking events to build strong relationships with your distribution channel.",
    icon: "Users",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Event & Exhibitions",
    description: "Comprehensive marketing coverage and stall management for industry-leading events.",
    icon: "Megaphone",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Product Launches",
    description: "End-to-end strategy and execution for introducing new products to the market.",
    icon: "Zap",
    image: ProductLaunch,
  },
  {
    title: "Customer Data & Directory",
    description: "Intelligence-driven data sets and corporate directories for precision targeting.",
    icon: "Database",
    image: ContactData,
  },
  {
    title: "Logo Designing & Launching",
    description: "Visual identity creation that captures the elite essence of your corporate brand.",
    icon: "Palette",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
  }
];

// export const GALLERY_ITEMS = [
//   {
//     id: 1,
//     title: "Tech Summit Expo",
//     category: "Events",
//     image: { gallery1 },
//     description: "Comprehensive stall management and digital integration for Bengaluru's largest tech expo.",
//   },
//   {
//     id: 2,
//     title: "Retailer Connect 2023",
//     category: "Retailer Meets",
//     image: { gallery2 },
//     description: "Strategic networking event fostering strong relationships with key retailers.",
//   },
//   {
//     id: 3,
//     title: "Automotive Mechanic Meet",
//     category: "Mechanic Meets",
//     image: { gallery3 },
//     description: "Engaging B2B community event for automotive industry professionals.",
//   },
//   {
//     id: 4,
//     title: "Product Launch Event",
//     category: "Product Launches",
//     image: { gallery4 },
//     description: "End-to-end execution of a successful product launch in the tech sector.",
//   },
//   {
//     id: 5,
//     title: "Van Campaign in Action",
//     category: "Van Campaigns",
//     image: { gallery5 },
//     description: "Mobile marketing unit delivering brand messages across Bengaluru.",
//   },
//   {
//     id: 6,
//     title: "Brand Awareness Drive",
//     category: "Campaigns",
//     image: { gallery6 },
//     description: "Large-scale awareness drive across multiple urban touchpoints.",
//   },
//   {
//     id: 7,
//     title: "Dealer Conference",
//     category: "Dealer Meets",
//     image: { gallery7 },
//     description: "High-impact conference bringing key dealers under one roof.",
//   },
//   {
//     id: 8,
//     title: "Corporate Expo Booth",
//     category: "Exhibitions",
//     image: { gallery8 },
//     description: "Custom-designed booth for maximum brand visibility.",
//   },
//   {
//     id: 9,
//     title: "Roadshow Activation",
//     category: "Roadshows",
//     image: { gallery9 },
//     description: "Interactive roadshow campaign engaging local audiences.",
//   },
//   {
//     id: 10,
//     title: "Product Demo Day",
//     category: "Demonstrations",
//     image: { gallery10 },
//     description: "Live demonstrations showcasing product features.",
//   },
//   {
//     id: 11,
//     title: "Retail Branding",
//     category: "Branding",
//     image: { gallery11 },
//     description: "In-store branding for enhanced customer experience.",
//   },
//   {
//     id: 12,
//     title: "Customer Engagement Event",
//     category: "Engagement",
//     image: { gallery12 },
//     description: "Interactive sessions building customer loyalty.",
//   },
//   {
//     id: 13,
//     title: "Trade Fair Showcase",
//     category: "Trade Fairs",
//     image: { gallery13 },
//     description: "Professional trade fair presentation and execution.",
//   },
//   {
//     id: 14,
//     title: "Digital Launch Campaign",
//     category: "Digital",
//     image: { gallery14 },
//     description: "Hybrid digital + physical product launch strategy.",
//   },
//   {
//     id: 15,
//     title: "Outdoor Promotion",
//     category: "Outdoor",
//     image: { gallery15 },
//     description: "High-visibility outdoor promotional activities.",
//   },
//   {
//     id: 16,
//     title: "Influencer Event",
//     category: "Influencer Marketing",
//     image: { gallery16 },
//     description: "Strategic influencer engagement program.",
//   },
//   {
//     id: 17,
//     title: "Mall Activation",
//     category: "Activations",
//     image: { gallery17 },
//     description: "High-footfall mall-based activation campaign.",
//   },
//   {
//     id: 18,
//     title: "Press Meet",
//     category: "Media Events",
//     image: { gallery18 },
//     description: "Professional press and media engagement meet.",
//   },
//   {
//     id: 19,
//     title: "Launch Night Gala",
//     category: "Gala Events",
//     image: { gallery19 },
//     description: "Premium night event for brand launches.",
//   },
//   {
//     id: 20,
//     title: "Community Outreach",
//     category: "CSR",
//     image: { gallery20 },
//     description: "Community-focused engagement program.",
//   },
//   {
//     id: 21,
//     title: "Tech Demo Zone",
//     category: "Technology",
//     image: { gallery21 },
//     description: "Hands-on tech experience zone.",
//   },
//   {
//     id: 22,
//     title: "Pop-up Store",
//     category: "Retail Activations",
//     image: { gallery22 },
//     description: "Temporary pop-up retail experience.",
//   },
//   {
//     id: 23,
//     title: "Festival Promotion",
//     category: "Seasonal Campaigns",
//     image: { gallery23 },
//     description: "Festival-based brand promotion drive.",
//   },
//   {
//     id: 24,
//     title: "Mega Brand Launch",
//     category: "Major Events",
//     image: { gallery24 },
//     description: "Large-scale flagship brand launch event.",
//   },
// ];
export const GALLERY_ITEMS = [
  { id: 1, title: "Tech Summit Expo", category: "Events", image: gallery1 },
  { id: 2, title: "Retailer Connect 2023", category: "Retailer Meets", image: gallery2 },
  { id: 3, title: "Automotive Mechanic Meet", category: "Mechanic Meets", image: gallery3 },
  { id: 4, title: "Product Launch Event", category: "Product Launches", image: gallery4 },
  { id: 5, title: "Van Campaign in Action", category: "Van Campaigns", image: gallery5 },
  { id: 6, title: "Brand Awareness Drive", category: "Campaigns", image: gallery6 },
  { id: 7, title: "Dealer Conference", category: "Dealer Meets", image: gallery7 },
  { id: 8, title: "Corporate Expo Booth", category: "Exhibitions", image: gallery8 },
  { id: 9, title: "Roadshow Activation", category: "Roadshows", image: gallery9 },
  { id: 10, title: "Product Demo Day", category: "Demonstrations", image: gallery10 },
  { id: 11, title: "Retail Branding", category: "Branding", image: gallery11 },
  { id: 12, title: "Customer Engagement Event", category: "Engagement", image: gallery12 },
  { id: 13, title: "Trade Fair Showcase", category: "Trade Fairs", image: gallery13 },
  { id: 14, title: "Digital Launch Campaign", category: "Digital", image: gallery14 },
  { id: 15, title: "Outdoor Promotion", category: "Outdoor", image: gallery15 },
  { id: 16, title: "Influencer Event", category: "Influencer Marketing", image: gallery16 },
  { id: 17, title: "Mall Activation", category: "Activations", image: gallery17 },
  { id: 18, title: "Press Meet", category: "Media Events", image: gallery18 },
  { id: 19, title: "Launch Night Gala", category: "Gala Events", image: gallery19 },
  { id: 20, title: "Community Outreach", category: "CSR", image: gallery20 },
  { id: 21, title: "Tech Demo Zone", category: "Technology", image: gallery21 },
  { id: 22, title: "Pop-up Store", category: "Retail Activations", image: gallery22 },
  { id: 23, title: "Festival Promotion", category: "Seasonal Campaigns", image: gallery23 },
  { id: 24, title: "Mega Brand Launch", category: "Major Events", image: gallery24 },
];


export const WHY_CHOOSE_US = [
  {
    year: "2010",
    title: "Foundation",
    description: "Established in Bengaluru with a vision to redefine corporate marketing."
  },
  {
    year: "2015",
    title: "Digital Pivot",
    description: "Transitioned to high-end digital elite services, integrating data analytics."
  },
  {
    year: "2019",
    title: "Elite Network",
    description: "Launched our exclusive digital networking platform for corporate B2B growth."
  },
  {
    year: "2024",
    title: "Global Reach",
    description: "Expanding our footprint beyond borders with state-of-the-art AI-driven solutions."
  }
];
