import styled from "styled-components";

export const ClockStyled = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const HourHand = styled.div<{ rotation: number }>`
  top: 50%;
  left: 50%;
  transform: rotate(${(p) => p.rotation}deg);
  &:after {
    content: "";
    height: 55px;
    width: 6px;
    background-color: black;
    position: absolute;
    bottom: 0;
    transform: translate(-50%);
  }
`;

export const MinuteHand = styled.div<{ rotation: number }>`
  top: 50%;
  left: 50%;
  transform: rotate(${(p) => p.rotation}deg);
  &:after {
    content: "";
    height: 80px;
    width: 3px;
    background-color: black;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
  }
`;

export const SecondeHand = styled.div<{ rotation: number }>`
  top: 50%;
  left: 50%;
  transform: rotate(${(p) => p.rotation}deg);
  &:after {
    content: "";
    height: 100px;
    width: 1px;
    background-color: red;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
  }
`;
