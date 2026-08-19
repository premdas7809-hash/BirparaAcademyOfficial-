export interface Achievement {
  id: string;
  year: string;
  title: string;
  description: string;
  category: 'Academic' | 'Sports' | 'Extracurricular';
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "1",
    year: "2023",
    title: "[Placeholder] District Level Football Champions",
    description: "The senior boys football team secured the first position in the inter-school district championship with 7 goals.",
    category: "Sports",
  },
  {
    id: "2",
    year: "2023",
    title: "[Placeholder] 100% Pass Rate in Class 12 Boards",
    description: "Our Commerce and Arts streams achieved a 100% pass rate with over 30% students scoring above 90%.",
    category: "Academic",
  },
  {
    id: "3",
    year: "2022",
    title: "[Placeholder] State Science Fair Gold Medal",
    description: "Two of our Class 10 students won the gold medal for their innovative renewable energy model.",
    category: "Academic",
  },
  {
    id: "4",
    year: "2022",
    title: "[Placeholder] Best Eco-Club Award",
    description: "Birpara Academy was recognized by the local municipality for outstanding environmental awareness campaigns.",
    category: "Extracurricular",
  }
];
