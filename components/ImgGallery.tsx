import Marquee from "react-easy-marquee"
import { ImgFigure } from "./ImgFigure"

export const ImgGallery = () => {
  const contributors = [
    {
      name: "ike",
      tag: "bass",
      imgSrc: "/images/team/36.jpg",
      grayscale: true,
    },
    {
      name: "nikita",
      tag: "vocals",
      imgSrc: "/images/team/24.png",
    },
    {
      name: "dylan-s",
      tag: "producer",
      imgSrc: "/images/team/16.jpg",
    },
    {
      name: "garry",
      tag: "vocals/producer",
      imgSrc: "/images/team/30.jpg",
    },
    {
      name: "de taranto",
      tag: "guitar/producer",
      imgSrc: "/images/team/5.jpg",
    },

    {
      name: "chris",
      tag: "trombone",
      imgSrc: "/images/team/22.jpg",
    },
    {
      name: "rich",
      tag: "producer",
      imgSrc: "/images/team/41.png",
    },

    {
      name: "marco",
      tag: "founder/lead developer",
      imgSrc: "/images/team/43.jpg",
      grayscale: true,
    },
    {
      name: "hopkin",
      tag: "vocals",
      imgSrc: "/images/team/25.jpg",
    },
    {
      name: "beddiss",
      tag: "drums",
      imgSrc: "/images/team/11.png",
    },

    {
      name: "charlie",
      tag: "rap",
      imgSrc: "/images/team/charlie.jpg",
    },
    {
      name: "women in love",
      tag: "vocals",
      imgSrc: "/images/team/9.jpg",
    },
    {
      name: "justin",
      tag: "instrumentalist",
      imgSrc: "/images/team/21.jpg",
    },
    {
      name: "phoebe garratt",
      tag: "founder/lead composer",
      imgSrc: "/images/team/3.png",
    },
    {
      name: "mandy groves",
      tag: "vocals",
      imgSrc: "/images/team/12.jpg",
    },
    {
      name: "ben babik",
      tag: "music logic developer",
      imgSrc: "/images/team/38.png",
    },
    {
      name: "al",
      tag: "lead producer/master mixer",
      imgSrc: "/images/team/1.jpg",
    },
    {
      name: "0171",
      tag: "vocals",
      imgSrc: "/images/team/0171.jpg",
    },
    {
      name: "dimi",
      tag: "producer",
      imgSrc: "/images/team/23.png",
    },
    {
      name: "harry",
      tag: "guitar",
      imgSrc: "/images/team/8.png",
    },
    {
      name: "matthew (the molotovs)",
      tag: "vocals/guitar",
      imgSrc: "/images/team/mathew-from-the-molotovs.jpg",
    },
    {
      name: "myth",
      tag: "producer",
      imgSrc: "/images/team/37.jpg",
    },
    {
      name: "gambo",
      tag: "founder/creator",
      imgSrc: "/images/team/20.png",
    },
    {
      name: "T.O.L.D.",
      tag: "band",
      imgSrc: "/images/team/34.jpg",
    },
    {
      name: "damon oliver",
      tag: "sax",
      imgSrc: "/images/team/damon-oliver.jpg",
    },
    {
      name: "alexmikethemic",
      tag: "rap",
      imgSrc: "/images/team/29.jpg",
    },
    {
      name: "ally mcdougal",
      tag: "drums",
      imgSrc: "/images/team/13.png",
    },
    {
      name: "ghostchant",
      tag: "producer",
      imgSrc: "/images/team/10.jpg",
    },
    {
      name: "the modern world",
      tag: "vocals/producer",
      imgSrc: "/images/team/35.jpg",
    },
    {
      name: "DXSH KXNE",
      tag: "rap",
      imgSrc: "/images/team/28.jpg",
    },
    {
      name: "schlechte",
      tag: "producer",
      imgSrc: "/images/team/31.png",
    },
    {
      name: "monnette",
      tag: "vocals",
      imgSrc: "/images/team/2.png",
    },

    {
      name: "phbs",
      tag: "keys",
      imgSrc: "/images/team/27.jpg",
    },
    {
      name: "CH",
      tag: "guitar",
      imgSrc: "/images/team/4.jpg",
      grayscale: true,
    },
    {
      name: "eugenius musica",
      tag: "rap/producer",
      imgSrc: "/images/team/33.jpg",
    },
    {
      name: "calyssa davidson",
      tag: "violin",
      imgSrc: "/images/team/calyssa-davidson.jpg",
      grayscale: true,
    },

    {
      name: "anin rose",
      tag: "vocals/producer",
      imgSrc: "/images/team/19.jpg",
      grayscale: true,
    },

    {
      name: "jak",
      tag: "the gutter butter",
      imgSrc: "/images/team/42.jpg",
    },
    {
      name: "kenny mitchell",
      tag: "producer/dj",
      imgSrc: "/images/team/kenny-mitchell.jpg",
    },

    {
      name: "dansson rana",
      tag: "vocals/producer",
      imgSrc: "/images/team/dansson-rana.jpg",
    },
    {
      name: "michael",
      tag: "website developer",
      imgSrc: "/images/team/17.png",
    },
  ]

  const row1 = contributors.slice(0, 10)
  const row2 = contributors.slice(10, 20)
  const row3 = contributors.slice(20, 30)
  const row4 = contributors.slice(30, 40)

  const rows = [row1, row2, row3, row4]

  return (
    <section className="image-galleries">
      {rows.map((r, i) => {
        const reverse = i % 2 == 1
        return (
          <>
            <div className="marquee">
              <Marquee
                duration={25000}
                height="37vw"
                width="100%"
                axis="X"
                align="center"
                pauseOnHover={false}
                reverse={reverse}
              >
                {r.map(({ name, tag, imgSrc, grayscale }) => {
                  return (
                    <ImgFigure
                      key={name}
                      caption={name}
                      subCaption={tag}
                      src={imgSrc}
                      grayscale={grayscale}
                    />
                  )
                })}
              </Marquee>
            </div>
            <div className="image-gallery">
              {r.map(({ name, tag, imgSrc, grayscale }) => {
                return (
                  <ImgFigure
                    key={name}
                    caption={name}
                    subCaption={tag}
                    src={imgSrc}
                    grayscale={grayscale}
                  />
                )
              })}
            </div>
          </>
        )
      })}
    </section>
  )
}
