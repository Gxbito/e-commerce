import {
  HeroIntroductionContainer,
  HeroTitleTextContainer,
  HeroStatsBanner,
  HeroStatsWrapper,
  BannerDataContainer,
  BannerData
} from "./HeroStatsStyles";

function HeroStats() {
  return (
    <>
      <HeroStatsWrapper>
        <HeroIntroductionContainer>
          <HeroTitleTextContainer>
            <h3>Learn About</h3>
            <h2>Trendsetter Threads</h2>
          </HeroTitleTextContainer>

          <p>
            At Trendsetter Threads, we believe that fashion is not just about
            clothing it's about expressing yourself, embracing individuality,
            and feeling confident in your own skin. Our online fashion boutique
            offers a curated collection of trendy and timeless pieces that cater
            to every style, occasion, and personality.
          </p>
        </HeroIntroductionContainer>
        <HeroStatsBanner>
          <BannerDataContainer>

            <BannerData>
              <h2>8M+</h2>
              <h3>Users wearing beautiful</h3>
            </BannerData>

            <BannerData>
              <h2>2M+</h2>
              <h3>Users buying clothes</h3>
            </BannerData>

            <BannerData>
              <h2>450</h2>
              <h3>Products in stock</h3>
            </BannerData>

            <BannerData>
              <h2>95%</h2>
              <h3>Satisfied customers</h3>
            </BannerData>

          </BannerDataContainer>
        </HeroStatsBanner>
      </HeroStatsWrapper>
    </>
  );
}

export default HeroStats;
