import mercedessclass from '../assets/images/mercedessclass.png'
import mercedeseclass from '../assets/images/mercedeseclass.png'
import audiq8 from '../assets/images/audiq8.png'
import audia6 from '../assets/images/audia6.png'
import luxes from '../assets/images/luxes.png'
import luxesrs350 from '../assets/images/luxesrs350.png'
import bmwx5 from '../assets/images/bmwx5.png'
import m from '../assets/images/m.png'
import auqiq7 from '../assets/images/audiq7.png'
import bmwx7 from '../assets/images/bmwx7.png'
import mercedesvclass from '../assets/images/mercedesvclass.png'
import mercedesv300 from '../assets/images/mercedesv300.png'
import mercedesv2 from '../assets/images/mercedesv2.png'



export const tabs = [
  "Airport rides",
  "City transfers",
  "Corporate rides"
];


export const Data = [
  , {
    id: 1,
    category: "General",
    question: "What type of cars do you use?",
    answer: "Commonly used vehicles include a variety of body types chosen for utility, fuel efficiency, and reliability. Popular choices consist of sedans (e.g., Toyota Corolla, Camry) for daily commuting, hatchbacks for urban, fuel-efficient driving, and crossovers/SUVs for versatile space and higher ground clearance."
  },
  {
    id: 2,
    category: "Booking",
    question: "Can I book a ride for someone else?",
    answer: "Yes, you can book a ride for someone else on Uber and Careem. On Uber, set the pickup location to their location, tap , select the rider from your contacts, and confirm. The passenger receives a text with the driver's details, car info, and ETA"
  },
  {
    id: 3,
    category: "Payment",
    question: "What payment method do you accept?",
    answer: "We accept a variety of payment methods to ensure a smooth checkout experience, including major credit/debit cards (Visa, Mastercard, American Express), digital wallets (Apple Pay, Google Pay, PayPal), and bank transfers (ACH, SEPA). Depending on the region, we also supportlocal options like UPI, QR codes, and Buy Now, Pay Later (BNPL) services."
  },
  {
    id: 4,
    category: "Booking",
    question: "What happens if my booking status is not confirmed?",
    answer: "If your booking status is not confirmed, the reservation may not be finalized, potentially due to payment delays, technical errors, or pending provider approval. Usually, the system will either automatically process a refund within a few days or the booking will be confirmed within 24 hours."
  },
  {
    id: 5,
    category: "General",
    question: "How do I contact customer support?",
    answer: "Ask how they are and use their name if they give it. Explain your problem clearly, but don't take too much time, because call center workers are strongly encouraged to deal with calls swiftly. It's smart to try to elicit sympathy and get them on your side. Patiently follow the directions they give you."
  },
  {
    id: 6,
    category: "City Tour",
    question: "Which car do you use?",
    answer: "A car is a wheeled motor vehicle used for transportation. Most definitions of cars say that they run primarily on roads, seat one-to-eight people, have four wheels and mainly transport people rather than goods. Cars came into global use during the 20th century, and developed economies depend on them."
  },
  {
    id: 7,
    category: "Airport Transfer",
    question: "Do you provide airport pickup services?",
    answer: "A car is a wheeled motor vehicle used for transportation. Most definitions of cars say that they run primarily on roads, seat one-to-eight people, have four wheels and mainly transport people rather than goods. Cars came into global use during the 20th century, and developed economies depend on them."
  }

];


export const Airports = [
  { value: "Jinnah International Airport (KHI), Karachi, Pakistan", label: "Jinnah International Airport (KHI) – Karachi" },
  { value: "Allama Iqbal International Airport, Lahore, Pakistan", label: "Allama Iqbal International Airport (LHE) – Lahore" },
  { value: "Islamabad International Airport (ISB), Islamabad, Pakistan", label: "Islamabad International Airport (ISB) – Islamabad" },
  { value: "Bacha Khan International Airport (PEW), Peshawar, Pakistan", label: "Bacha Khan International Airport (PEW) – Peshawar" },
  { value: "Quetta International Airport (UET), Quetta, Pakistan", label: "Quetta International Airport (UET) – Quetta" },
  { value: "Multan International Airport (MUX), Multan, Pakistan", label: "Multan International Airport (MUX) – Multan" },
  { value: "Faisalabad International Airport (LYP), Faisalabad, Pakistan", label: "Faisalabad International Airport (LYP) – Faisalabad" },
  { value: "Sialkot International Airport (SKT), Sialkot, Pakistan", label: "Sialkot International Airport (SKT) – Sialkot" },
  { value: "Skardu International Airport (KDU), Skardu, Pakistan", label: "Skardu International Airport (KDU) – Skardu" }
];

export const TransferRoute = [
  { value: "One Way", label: "One Way" },
  { value: "Two Way (Round Trip)", label: "Two Way (Round Trip)" },
];

export const ExtraStops = [
  { value: 0, label: "No Extra Stop" },
  { value: 1, label: "1 Extra Stop" },
  { value: 2, label: "2 Extra Stops" },
  { value: 3, label: "3 Extra Stops" },
  { value: 4, label: "4 Extra Stops" },
  { value: 5, label: "5 Extra Stops" },
  { value: 6, label: "6 Extra Stops" },
];

export const Seats = [
  { value: "1 Seat", label: "1 Seat" },
  { value: "2 Seats", label: "2 Seats" },
  { value: "3 Seats", label: "3 Seats" },
  { value: "4 Seats", label: "4 Seats" },
  { value: "5 Seats", label: "5 Seats" },
  { value: "6 Seats", label: "6 Seats" },
  { value: "7 Seats", label: "7 Seats" },
  { value: "8 Seats", label: "8 Seats" },
  { value: "9 Seats", label: "9 Seats" },
  { value: "10 Seats", label: "10 Seats" },
  { value: "11 Seats", label: "11 Seats" },
  { value: "12 Seats", label: "12 Seats" },
  { value: "13 Seats", label: "13 Seats" },
  { value: "14 Seats", label: "14 Seats" },
  { value: "15 Seats", label: "15 Seats" },
];

export const Support = [
  { value: "Support", label: "Support" },
  { value: "Partnership", label: "Partnership" },
  { value: "Feedback", label: "Feedback" },
  { value: "Booking Inquiry", label: "Booking Inquiry" },
  { value: "General Question", label: "General Question" },
]

export const cars = [
  {
    image: mercedessclass,
    name: "Mercedes-Benz S-class",
    seats: "4 seats",
    luggage: "4 Luggage Space",
    rateperkm: 15
  },
  {
    image: mercedeseclass,
    name: "Mercedes-Benz-E-Class",
    seats: "4 seats",
    luggage: "3 Luggage Space",
    rateperkm: 15
  },
  {
    image: audiq8,
    name: "Audi Q8",
    seats: "4 seats",
    luggage: "4 Luggage Space",
    rateperkm: 15
  },
  {
    image: audia6,
    name: "Audi A6",
    seats: "4 seats",
    luggage: "3 Luggage Space",
    rateperkm: 15
  },
  {
    image: audiq8,
    name: "Audi A8",
    seats: "4 seats",
    luggage: "3 Luggage Space",
    rateperkm: 15
  },
  {
    image: luxes,
    name: "Lexus 450h",
    seats: "4 seats",
    luggage: "4 Luggage Space",
    rateperkm: 15
  },
  {
    image: luxesrs350,
    name: "Lexus RX350",
    seats: "4 seats",
    luggage: "4 Luggage Space",
    rateperkm: 15
  },
  {
    image: bmwx5,
    name: "BMW X5",
    seats: "4 seats",
    luggage: "5 Luggage Space",
    rateperkm: 15
  },
  {
    image: auqiq7,
    name: "Audi Q7",
    seats: "6 seats",
    luggage: "4 Luggage Space",
    rateperkm: 20
  },
  {
    image: m,
    name: "BMW 8 Series",
    seats: "4 seats",
    luggage: "4 Luggage Space",
    rateperkm: 15
  },
  {
    image: bmwx7,
    name: "BMW X7",
    seats: "6 seats",
    luggage: "4 Luggage Space",
    rateperkm: 20
  },
  {
    image: mercedesvclass,
    name: "Mercedes V-Class 200",
    seats: "7 seats",
    luggage: "5 Luggage Space",
    rateperkm: 20
  },
  {
    image: mercedesv300,
    name: "Mercedes-Benz V 300",
    seats: "8 seats",
    luggage: "6 Luggage Space",
    rateperkm: 25
  },
  {
    image: mercedesv2,
    name: "Mercedes V-Class 250",
    seats: "7 seats",
    luggage: "4 Luggage Space",
    rateperkm: 20
  }
  
  
]
