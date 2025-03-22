import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  size?: "sm" | "md" | "lg"
}

export function Logo({ size = "md" }: LogoProps) {
  const sizes = {
    sm: { width: 24, height: 24, textSize: "text-lg" },
    md: { width: 32, height: 32, textSize: "text-xl" },
    lg: { width: 48, height: 48, textSize: "text-2xl" },
  }

  const { width, height, textSize } = sizes[size]

  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative">
        <Image
          src="/logo.png"
          alt="ElevateGrad Logo"
          width={width}
          height={height}
          className={`h-${height / 4} w-${width / 4}`}
        />
      </div>
      <span className={`${textSize} font-bold`}>ElevateGrad</span>
    </Link>
  )
}

