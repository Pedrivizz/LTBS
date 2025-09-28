import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';
import { TiktokIcon } from '../icons/tiktok';

const socialLinks = [
  { name: 'Facebook', icon: <Facebook className="h-6 w-6" />, href: '#' },
  { name: 'Instagram', icon: <Instagram className="h-6 w-6" />, href: '#' },
  { name: 'X', icon: <Twitter className="h-6 w-6" />, href: '#' },
  { name: 'TikTok', icon: <TiktokIcon className="h-6 w-6" />, href: '#' },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              Copyright © 2024 Little Tummies, Big Smiles, inc. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Developed by Nexa Assistant
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {social.icon}
              </Link>
            ))}
          </div>

          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
