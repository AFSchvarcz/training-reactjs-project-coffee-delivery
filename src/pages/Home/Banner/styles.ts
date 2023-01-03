import styled from "styled-components";
import bannerBg from "../../../assets/banner-bg.svg";

export const BannerContainer = styled.div`
  background-image: url(${bannerBg});
  background-repeat: no-repeat;
  background-size: auto auto;

  > div {
    max-width: 70rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
`;

export const BannerImage = styled.img`
  margin: 4rem 0;
`;

export const BannerContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
  > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
      font-size: ${(props) => props.theme.fontSize["title-xl"]};
      color: ${(props) => props.theme.colors["base-title"]};
    }

    p {
      font-size: ${(props) => props.theme.fontSize["text-lg"]};
      color: ${(props) => props.theme.colors["base-subtitle"]};
    }
  }
`;

export const BannerIconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  > div {
    flex: 0 auto;
  }
`;
