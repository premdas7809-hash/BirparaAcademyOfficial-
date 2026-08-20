export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department?: string;
  bio?: string;
  imageUrl?: string;
}

export const FACULTY: FacultyMember[] = [
  {
    id: "1",
    name: "[Placeholder Principal Name]",
    designation: "Principal",
    department: "Administration",
    bio: "With over 10 years of experience in education, [Name] leads Birpara Academy with a vision of holistic development and academic excellence.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "2",
    name: "[Placeholder Teacher Name]",
    designation: "Senior Teacher",
    department: "English",
    bio: "A dedicated educator passionate about literature and language arts.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "3",
    name: "[Placeholder Teacher Name]",
    designation: "Head of Department",
    department: "Mathematics",
    bio: "Making numbers fun and accessible for students across all grades.",
    imageUrl: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "4",
    name: "[Placeholder Teacher Name]",
    designation: "Teacher",
    department: "Science",
    bio: "Encouraging curiosity and scientific thinking through hands-on experiments.",
    imageUrl: "https://images.unsplash.com/photo-1594824432252-167812ea2c1d?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "5",
    name: "[Placeholder Teacher Name]",
    designation: "Teacher",
    department: "Commerce",
    bio: "Guiding the next generation of business leaders and economists.",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "6",
    name: "[Placeholder Teacher Name]",
    designation: "Sports Instructor",
    department: "Physical Education",
    bio: "Promoting physical fitness, teamwork, and sportsmanship.",
    imageUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=400",
  }
];
