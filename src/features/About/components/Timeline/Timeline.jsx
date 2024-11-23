import {
  TimelineWrapper,
  TimelineImagesContainer,
  TimelineImage,
  TimelineData,
} from "./TimelineStyles";

import timelineImage from "../../../../assets/images/timeline-image.jpg";
import timelineSecondaryImage from "../../../../assets/images/hero-desktop-background.jpg";

function Timeline() {
  return (
    <TimelineWrapper>
      <h2>
        <b>Contributing</b> to the world of <b>fashion for</b> many{" "}
        <b>years.</b>
      </h2>

      <TimelineImagesContainer>
        <TimelineImage>
          <img src={timelineImage} alt="" />
        </TimelineImage>

        <TimelineImage>
          <img src={timelineSecondaryImage} alt="" />
        </TimelineImage>
      </TimelineImagesContainer>

      <TimelineData>
        <h3>1992</h3>
        <p>
          At Trendsetter Threads, we believe that fashion is not just about
          clothing it's about expressing yourself, embracing individuality, and
          feeling confident in your own skin. Our online fashion boutique offers
          a curated collection of trendy and timeless pieces that cater to every
          style, occasion, and personality.
        </p>
      </TimelineData>

      <TimelineData>
        <h3>2007</h3>
        <p>
          With a passion for quality and an eye for detail, we carefully select
          each item in our inventory, ensuring that every piece reflects the
          latest trends while maintaining a sense of sophistication and
          elegance. From chic streetwear to glamorous evening attire, our
          diverse range of clothing and accessories allows you to explore and
          experiment with your personal style.
        </p>
      </TimelineData>

      <TimelineData>
        <h3>2007</h3>
        <p>
          We understand that shopping for clothes online should be an enjoyable
          and hassle-free experience. That's why we've designed our website to
          be intuitive, user-friendly, and visually appealing, making it easy
          for you to browse, shop, and discover new fashion favorites from the
          comfort of your own home.
        </p>
      </TimelineData>
    </TimelineWrapper>
  );
}

export default Timeline;
