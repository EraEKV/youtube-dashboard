// мок данные типы и тд

export interface Video {
  id: number
  title: string
  channel: string
  views: number
  thumbnail: string
  duration: string
  uploadedAt: string
  channelAvatar: string
}

// сразу скажу тут полный рандом потому что ии сделал мок хз как он взял фотки но работает
export const mockVideos: Video[] = [
  {
    id: 1,
    title: 'Building a Full-Stack App with Vue 3 and TypeScript',
    channel: 'Tech Academy',
    views: 1250000,
    thumbnail: 'https://picsum.photos/seed/1/640/360',
    duration: '24:15',
    uploadedAt: '2 days ago',
    channelAvatar: 'https://picsum.photos/seed/avatar1/48/48',
  },
  {
    id: 2,
    title: 'Complete Tailwind CSS Tutorial for Beginners',
    channel: 'CSS Mastery',
    views: 850000,
    thumbnail: 'https://picsum.photos/seed/2/640/360',
    duration: '18:42',
    uploadedAt: '5 days ago',
    channelAvatar: 'https://picsum.photos/seed/avatar2/48/48',
  },
  {
    id: 3,
    title: 'JavaScript ES2024 New Features Explained',
    channel: 'Code with John',
    views: 2100000,
    thumbnail: 'https://picsum.photos/seed/3/640/360',
    duration: '31:28',
    uploadedAt: '1 week ago',
    channelAvatar: 'https://picsum.photos/seed/avatar3/48/48',
  },
  {
    id: 4,
    title: 'Mastering Vue Composition API in 2024',
    channel: 'Vue Wizards',
    views: 670000,
    thumbnail: 'https://picsum.photos/seed/4/640/360',
    duration: '45:12',
    uploadedAt: '3 days ago',
    channelAvatar: 'https://picsum.photos/seed/avatar4/48/48',
  },
  {
    id: 5,
    title: 'Top 10 VS Code Extensions for Web Developers',
    channel: 'Dev Tools Daily',
    views: 3200000,
    thumbnail: 'https://picsum.photos/seed/5/640/360',
    duration: '15:33',
    uploadedAt: '1 day ago',
    channelAvatar: 'https://picsum.photos/seed/avatar5/48/48',
  },
  {
    id: 6,
    title: 'Understanding TypeScript Generics',
    channel: 'TypeScript Pro',
    views: 420000,
    thumbnail: 'https://picsum.photos/seed/6/640/360',
    duration: '28:47',
    uploadedAt: '4 days ago',
    channelAvatar: 'https://picsum.photos/seed/avatar6/48/48',
  },
  {
    id: 7,
    title: 'Building RESTful APIs with Node.js',
    channel: 'Backend Basics',
    views: 1800000,
    thumbnail: 'https://picsum.photos/seed/7/640/360',
    duration: '52:19',
    uploadedAt: '6 days ago',
    channelAvatar: 'https://picsum.photos/seed/avatar7/48/48',
  },
  {
    id: 8,
    title: 'CSS Grid vs Flexbox: When to Use Each',
    channel: 'Layout Legends',
    views: 950000,
    thumbnail: 'https://picsum.photos/seed/8/640/360',
    duration: '22:08',
    uploadedAt: '2 weeks ago',
    channelAvatar: 'https://picsum.photos/seed/avatar8/48/48',
  },
  {
    id: 9,
    title: 'Git and GitHub Complete Guide for Teams',
    channel: 'Version Control Hub',
    views: 1420000,
    thumbnail: 'https://picsum.photos/seed/9/640/360',
    duration: '1:02:34',
    uploadedAt: '3 weeks ago',
    channelAvatar: 'https://picsum.photos/seed/avatar9/48/48',
  },
  {
    id: 10,
    title: 'React vs Vue: Which Should You Learn in 2024?',
    channel: 'Framework Wars',
    views: 2850000,
    thumbnail: 'https://picsum.photos/seed/10/640/360',
    duration: '19:55',
    uploadedAt: '5 days ago',
    channelAvatar: 'https://picsum.photos/seed/avatar10/48/48',
  },
  {
    id: 11,
    title: 'Web Performance Optimization Techniques',
    channel: 'Speed Matters',
    views: 780000,
    thumbnail: 'https://picsum.photos/seed/11/640/360',
    duration: '36:21',
    uploadedAt: '1 week ago',
    channelAvatar: 'https://picsum.photos/seed/avatar11/48/48',
  },
  {
    id: 12,
    title: 'Docker Containers Explained for Beginners',
    channel: 'DevOps Journey',
    views: 1650000,
    thumbnail: 'https://picsum.photos/seed/12/640/360',
    duration: '41:15',
    uploadedAt: '4 days ago',
    channelAvatar: 'https://picsum.photos/seed/avatar12/48/48',
  },
]
