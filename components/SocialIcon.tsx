import Image from "next/image"

interface SocialIconProps {
  link: string
  src: string
}

export const SocialIcon = ({ link, src }: SocialIconProps) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Image src={src} height={30} width={30} alt={""} loading="eager" />
    </a>
  )
}
