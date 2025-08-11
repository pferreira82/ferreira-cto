import Link from "next/link";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link 
      href="/" 
      className={`inline-flex items-center gap-3 transition-transform hover:scale-105 ${className}`}
      aria-label="Ferreira CTO Inc. Home"
    >
      {/*<img */}
      {/*  src="/logo.svg" */}
      {/*  alt="Ferreira CTO Inc." */}
      {/*  width="40" */}
      {/*  height="40" */}
      {/*  className="drop-shadow-sm"*/}
      {/*/>*/}
      <span className="text-xl font-semibold tracking-tight">
        Ferreira CTO
      </span>
    </Link>
  );
}