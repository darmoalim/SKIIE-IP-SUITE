"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 md:px-10 py-2 absolute top-0 left-0 z-50 bg-transparent backdrop-blur-sm">
      {/* Left: SKIIE Logo */}
      <div className="flex-shrink-0 flex items-center">
        <Image
          src="/branding/skiie-logo.png"
          alt="SKIIE Logo"
          width={500}
          height={180}
          priority
          className="
            h-[16px]   /* mobile size */
            md:h-[22px]   /* your original desktop size */
            w-auto object-contain translate-y-[1px]
          "
        />
      </div>

      {/* Right: SKIIE Text */}
      <div className="flex-shrink-0 flex items-center">
        <Image
          src="/branding/skiie-text.png"
          alt="SKIIE Text"
          width={1500}
          height={180}
          priority
          className="
            h-[32px]   /* mobile size */
            md:h-[46px]   /* original desktop size */
            w-auto object-contain
          "
        />
      </div>
    </header>
  );
}
