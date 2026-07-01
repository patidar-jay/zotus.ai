import { FolderKanban, Users, Code2, Calendar } from 'lucide-react';
import type { Stat } from '../types';

export const stats: Stat[] = [
  {
    icon: FolderKanban,
    value: 150,
    suffix: '+',
    label: 'Projects Delivered',
  },
  {
    icon: Users,
    value: 50,
    suffix: '+',
    label: 'Happy Clients',
  },
  {
    icon: Code2,
    value: 30,
    suffix: '+',
    label: 'Engineers',
  },
  {
    icon: Calendar,
    value: 5,
    suffix: '+',
    label: 'Years Experience',
  },
];
