import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  padding-top: 4rem;

  h1 {
    color: ${(props) => props.theme.colors["yellow-dark"]};
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 7rem;
    margin-top: 2rem;
  }
`;

export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 2.5rem;
  border: 1px solid black;
  border-radius: 6px 36px 6px 36px;
`;

interface InfoItemProps {
  bgColor: string;
}

export const InfoItem = styled.div<InfoItemProps>`
  display: flex;
  gap: 0.75rem;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 9999px;
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
