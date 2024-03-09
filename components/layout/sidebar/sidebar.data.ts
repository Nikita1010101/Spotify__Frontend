import { BookOpen, GalleryVerticalEnd, Home, Users } from 'lucide-vue-next'

export const sidebarLinks = [
  {
    title: 'Home',
    path: '/',
    Icon: Home,
  },
  {
    title: 'Library',
    path: '/library',
    Icon: BookOpen,
  },
  {
    title: 'Artists',
    path: '/artists',
    Icon: Users,
  },
  {
    title: 'Albums',
    path: '/albums',
    Icon: GalleryVerticalEnd,
  },
]
