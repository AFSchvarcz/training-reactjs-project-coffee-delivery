import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background-color: ${(props) => `${props.theme.colors.background}DD`};
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 70rem;
    margin: 0 auto;
    padding: 2rem 0;

    img {
      cursor: pointer;
    }

    nav {
      display: flex;
      gap: 1rem;

      a {
        height: 2.375rem;
        border-radius: 6px;
        padding: 0 0.5rem;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        text-decoration: none;

        &:first-child {
          background-color: ${(props) => props.theme.colors["purple-light"]};
          color: ${(props) => props.theme.colors["purple-dark"]};
          font-size: ${(props) => props.theme.fontSize["text-sm"]};

          &:hover {
            background-color: ${(props) => props.theme.colors.purple};
            color: ${(props) => props.theme.colors["purple-light"]};
          }
        }

        &:nth-child(2) {
          position: relative;
          background-color: ${(props) => props.theme.colors["yellow-light"]};
          color: ${(props) => props.theme.colors["yellow-dark"]};

          &:hover {
            background-color: ${(props) => props.theme.colors.yellow};
            color: ${(props) => props.theme.colors["yellow-light"]};
          }

          span {
            position: absolute;
            top: 0;
            right: 0;
            display: flex;
            justify-content: center;
            width: 1.25rem;
            height: 1.25rem;
            border-radius: 9999px;
            background-color: ${(props) => props.theme.colors["yellow-dark"]};
            color: ${(props) => props.theme.colors.white};
            font-size: ${(props) => props.theme.fontSize["text-sm"]};
            font-weight: bold;
            transform: translate(50%, -50%);
          }
        }
      }
    }
  }
`;
