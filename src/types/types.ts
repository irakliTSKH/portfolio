export interface PropsTypes {
  headerRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  projectRef: React.RefObject<HTMLDivElement>;
}

export interface PropsType {
  x: number;
  y: number;
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