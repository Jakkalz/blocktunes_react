import Image from "next/image"
import useInView from "react-cool-inview"

interface ImgFigureProps {
  src: string
  caption: string
  subCaption: string
  grayscale?: boolean
}

export const ImgFigure = ({
  src,
  caption,
  subCaption,
  grayscale,
}: ImgFigureProps) => {
  const { observe, inView } = useInView({
    // Stop observe when the target enters the viewport, so the "inView" only triggered once
    unobserveOnEnter: true,
    // For better UX, we can grow the root margin so the image will be loaded before it comes to the viewport
    rootMargin: "1500px",
  })

  const cls: string[] = []
  if (grayscale) {
    cls.push("is-grayscale")
  }
  return (
    <figure className={`figure ${cls.join(" ")}`} ref={observe}>
      <span className="figure-spacer">
        {inView && (
          <Image
            src={src}
            alt={caption}
            width={250}
            height={250}
            loading={"eager"}
            objectFit="contain"
          />
        )}
      </span>
      <figcaption className="figcaption">
        {caption}
        <br /> <span className="job-title">{subCaption}</span>
      </figcaption>
    </figure>
  )
}
