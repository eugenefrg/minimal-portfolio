import { StringLiteralLike } from "typescript";

export interface Person {
  name: string;
  description: string;
  links: Links;
  projects: Project[];
  certifications: Certificates;
}

interface Links {
  github: string;
  linkedin: string;
  gmail: string;
  twitter: string;
}

interface Project {
  name: string;
  imageUrl: string;
  demoUrl: string;
  repoUrl?: string;
  description: string;
}

interface Certificates {
  freeCodeCamp: SubCertificate[];
}

interface SubCertificate {
  name: string;
  url: string;
}
