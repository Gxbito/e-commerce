import { BannerContainer, BannerTextContainer } from "./BannerStyles";

function Banner({bgImage}) {
  return (
    <BannerContainer bgImage={bgImage}>
      <BannerTextContainer>
        <h3>Transform your wardrobe with</h3>
        <h2>Trendsetter Threads</h2>
      </BannerTextContainer>
    </BannerContainer>
  );
}

export default Banner;
