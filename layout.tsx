import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Green Heaven Nursery | Plants & Greenery in Nagaon, Assam',
  description: 'Green Heaven Nursery — flower, fruit, ornamental, indoor, medicinal and vegetable plants in Kawaimari, Haibargaon, Nagaon, Assam.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
