// Placeholder data for easy management.
// The school administration can easily update this file to reflect real notices.

export interface Notice {
  id: string;
  title: string;
  date: string;
  category: 'Academic' | 'Administrative' | 'Event' | 'General';
  shortDescription: string;
  content?: string;
  attachmentUrl?: string;
}

export const NOTICES: Notice[] = [
  {
    id: "1",
    title: "[Placeholder] Admission Open for Session 2024-2025",
    date: "2024-03-01",
    category: "Administrative",
    shortDescription: "Admissions are now open for Nursery to Class 12. Please visit the school office for forms.",
    content: "Detailed admission guidelines and fee structures are available at the school office. Office hours are 9:00 AM to 2:00 PM, Monday to Friday. Please bring the necessary documents: birth certificate, previous school transfer certificate, and passport-size photographs.",
  },
  {
    id: "2",
    title: "[Placeholder] Upcoming Parent-Teacher Meeting",
    date: "2024-03-15",
    category: "Academic",
    shortDescription: "A mandatory parent-teacher meeting will be held for all classes next week.",
    content: "The schedule for the PTM is as follows: Classes Nursery to 5 (10:00 AM - 12:00 PM), Classes 6 to 12 (1:00 PM - 3:00 PM). Parents are requested to adhere to the timings.",
  },
  {
    id: "3",
    title: "[Placeholder] Annual Sports Day Announcement",
    date: "2024-04-05",
    category: "Event",
    shortDescription: "Get ready for the Birpara Academy Annual Sports Day! Registrations for events are open.",
    content: "Students interested in participating in track and field events must submit their names to their respective class teachers by the end of this week.",
  }
];
