import './globals.css';
import { Poppins } from 'next/font/google';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ToasterContext from './context/ToasterContext';
import AuthContext from './context/AuthContext';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Mini Messenger',
  description: 'A Web-based application.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <AuthContext>
          <Navbar />
          <ToasterContext />
          {children}
          <Footer />
        </AuthContext>
      </body>
    </html>
  );
}
