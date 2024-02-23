import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #222222;
  display: flex;
  justify-content: space-between;
  color: #eee;
  padding: 20px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
`;

export const Logo = styled.div`
  font-size: 1.55rem;
  font-weight: bold;
  font-family: monospace;

  span {
    font-size: 1.3rem;
    color: purple;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  font-size: 37px;
  display: flex;
  position: relative;
  margin-right: 10px;

  cursor: pointer;
`;

export const CartCount = styled.span`
  color: black;
  font-weight: 600;
  font-size: initial;
  background: white;
  padding: 3px 11px;
  border-radius: 50%;
  position: absolute;
  left: 26px;
  top: 24px;
`;
