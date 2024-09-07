import Link from 'next/link';
import { Instagram, Youtube, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">&copy; 2024 Me&Mummy. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6 items-center">
        <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
          Terms of Service
        </Link>
        <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
          Privacy Policy
        </Link>
        <div className="flex gap-4 items-center">
          <Link href="https://www.instagram.com/me_and_mummy_diaper?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram" className="text-muted-foreground hover:text-foreground">
            <Instagram size={20} />
          </Link>
          <Link href="https://www.youtube.com/watch?v=6CX1z4hN9zA" aria-label="YouTube" className="text-muted-foreground hover:text-foreground">
            <Youtube size={20} />
          </Link>
          <Link href="https://www.facebook.com/meandmummydiaper?sfnsn=wiwspmo&mibextid=RUbZ1f" aria-label="Facebook" className="text-muted-foreground hover:text-foreground">
            <Facebook size={20} />
          </Link>
        </div>
      </nav>
    </footer>
  );
}