export interface PropsTypes {
  headerRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  projectRef: React.RefObject<HTMLDivElement>;
}

export interface PropsType {
  x: number;
  y: number;
  time?: number;
}

export interface ProjectListType {
  key: number;
  title: string;
  img: string;
  url: string;
}[];


export interface ProjectProps {
  key: number;
  title: string;
  img: string;
  url: string;
}

export interface CircleProps {
  top?: number;
  left?: number;
  right?: number;
  width?: number;
  height?: number;
}

export interface CountryInfo {
  name: string;
  capital: string;
  population: number;
  flag: string;
}