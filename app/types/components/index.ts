export interface BenefitsCardType {
  icon: any;
  title: string;
  desc: string;
}
export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export interface ExperiensCardType {
  image: any;
  title: string;
  desc: string;
}

export interface TodolistType {
  id: string;
  Todos: string;
  created_at: string;
  UpdatedAt: string;
  Status: string;
}
