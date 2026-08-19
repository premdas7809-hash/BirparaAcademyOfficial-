export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl?: string;
}

export const EVENTS: EventItem[] = [
  {
    id: "1",
    title: "[Placeholder] Annual Cultural Fest",
    date: "December 15, 2024",
    location: "School Auditorium",
    description: "Join us for a spectacular evening of music, dance, and drama performed by our talented students.",
    imageUrl: "https://images.unsplash.com/photo-1511516171870-5b12daecf701?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "2",
    title: "[Placeholder] Science Exhibition 2024",
    date: "November 10, 2024",
    location: "Science Labs & Main Hall",
    description: "Explore innovative science projects and models created by students from Class 6 to 12.",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "3",
    title: "[Placeholder] Inter-School Debate Competition",
    date: "October 20, 2024",
    location: "School Library",
    description: "Birpara Academy hosts the annual regional inter-school debate. Come support our speakers!",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
  }
];
