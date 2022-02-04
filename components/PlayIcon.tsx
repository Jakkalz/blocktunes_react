import { FC } from "react"
import { IconColour } from "../apptypes"
import { iconColours } from "../data/colours"

interface PlayIconProps {
  fill: IconColour
}

export const PlayIcon: FC<PlayIconProps> = ({ fill }) => {
  const fillHex = iconColours[fill]

  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_101_4)">
        <path
          d="M11.4326 99.4304C12.1193 99.811 12.8781 100 13.6363 100C14.4735 100 15.3096 99.7689 16.0454 99.3092L88.7726 53.855C90.1017 53.0244 90.909 51.5677 90.909 50.0004C90.909 48.4332 90.1017 46.9765 88.7726 46.1459L16.0454 0.691034C14.6439 -0.185027 12.8778 -0.231088 11.4326 0.569822C9.98749 1.37103 9.09082 2.89316 9.09082 4.54558V95.4547C9.09082 97.1071 9.98749 98.6292 11.4326 99.4304Z"
          fill={fillHex}
        />
      </g>
      <defs>
        <clipPath id="clip0_101_4">
          <rect width="100" height="100" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
