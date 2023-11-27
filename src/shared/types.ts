export enum SelectedPage {
    Home = "home",
    Projects = "projects",
    CV= "cv",
    Contact = "contact",
  }
  
  export interface ClassType {
    name: string;
    description?: string;
    image: string;
    github?: any;
    link?: any;
  }