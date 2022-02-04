import { useState, FC, useEffect, useRef } from "react"
import { Clip, IconColour } from "../apptypes"
import { music } from "../data/music"
import { PauseIcon } from "./PauseIcon"
import { PlayIcon } from "./PlayIcon"

interface ClipPlayerProps {
  file: string
  colour: IconColour
  active: boolean
  onClick: () => void
}

const ClipPlayer: FC<ClipPlayerProps> = ({ file, active, colour, onClick }) => {
  const audioRef = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio(file) : undefined
  )

  useEffect(() => {
    if (active) {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause()
    }
  }, [active])

  // toggle off when the track ends
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onended = onClick
    }
  }, [onClick])

  return (
    <button onClick={onClick}>
      {active ? <PauseIcon fill={colour} /> : <PlayIcon fill={colour} />}
    </button>
  )
}

export const Examples = () => {
  const [active, setActive] = useState<Clip | false>(false)

  const toggle = (c: Clip) => {
    if (c === active) {
      // pause
      setActive(false)
    } else {
      // play
      setActive(c)
    }
  }

  return (
    <section className="examples">
      <h2>example blocks</h2>

      <div className="audio">
        {music.map((c) => (
          <ClipPlayer
            key={c.file}
            onClick={() => toggle(c)}
            file={c.file}
            colour={c.colour}
            active={active === c}
          />
        ))}
      </div>
    </section>
  )
}
