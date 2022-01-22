function SocialIcon({link, imgSrc}) {
  return (
    <a href={link} target="_blank">
      <img src={imgSrc} height="30px" width="auto" alt="" />
    </a>
  );
}

export default SocialIcon;