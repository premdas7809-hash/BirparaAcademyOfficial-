export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Events' | 'Sports' | 'Academics';
  type: 'image' | 'video';
  url: string;
  thumbnailUrl?: string;
}

export const GALLERY: GalleryItem[] = [
  {
    id: "1",
    title: "[Placeholder] School Building Main Entrance",
    category: "Campus",
    type: "image",
    url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "2",
    title: "[Placeholder] Students in the Library",
    category: "Academics",
    type: "image",
    url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "3",
    title: "[Placeholder] Annual Sports Day 2023",
    category: "Sports",
    type: "image",
    url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "4",
    title: "[Placeholder] Classroom Learning",
    category: "Academics",
    type: "image",
    url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "5",
    title: "[Placeholder] Science Lab Activities",
    category: "Academics",
    type: "image",
    url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "6",
    title: "[Placeholder] Cultural Dance Performance",
    category: "Events",
    type: "image",
    url: "https://images.unsplash.com/photo-1511516171870-5b12daecf701?auto=format&fit=crop&q=80&w=1200",
  }
];
