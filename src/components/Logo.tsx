import logoSrc from "@/assets/rekha-logo.jpg";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoSrc}
      alt="Rekha Graphics"
      width={180}
      height={48}
      className={`h-10 md:h-11 w-auto object-contain ${className}`}
    />
  );
}
