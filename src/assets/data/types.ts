/**
 * The information about a certain person.
 *  */
export interface Person {
  /**
   * The name of the person.
   *  */
  name: string;

  /**
   * The description of the person. This is used to display a brief description of the person.
   */
  description: string;

  /**
   * The social media links of the person.
   */
  links: Links[];

  /**
   * The projects of the person.
   */
  projects: Project[];

  /**
   * The certifications of the person.
   */
  certifications: Certificate[];

  /**
   * The educations of the person.
   */
  educations: Education[];

  /**
   * The skills of the person.
   */
  skills: Skill[];
}

/**
 * Contains the information about a social media link.
 */
export interface Links {
  /**
   * The name of the social media.
   * */
  name: string;

  /**
   * The link for the person's account in the current social media platform.
   * */
  url: string;
}

/**
 * Contains the details of a project.
 */
export interface Project {
  /**
   * The name of the project.
   */
  name: string;

  /**
   * A url for a image preview of the project.
   */
  imageUrl: string;

  /**
   * A url for the project's demo.
   */
  demoUrl: string;

  /**
   * A url for the project's repository.
   */
  repoUrl?: string;

  /**
   * The description of the project.
   */
  description: string;
}

/**
 * Contains the details of a certificate.
 */
export interface Certificate {
  /**
   * The name of the certificate.
   */
  name: string;

  /**
   * The url for the certificate.
   */
  url: string;

  /**
   * The source of the certificate.
   */
  source: string;
}

/**
 * Contains the details of education that the person has taken or achieved.
 */
export interface Education {
  /**
   * The name of the school.
   */
  name: string;

  /**
   *  The url for the school website.
   */
  url: string;

  /**
   * The Degree taken at the school.
   */
  description: string;

  /**
   * The year the person started studying at the school.
   */
  yearStart: number;

  /**
   * The year the person finished studying at the school.
   */
  yearEnd?: number;

  /**
   * Whether the person has finished studying at the school.
   */
  finished?: boolean;
}

/**
 * Contains the details of a skill that the person has.
 * In this case it is usually a programming language, framework, etc.
 */
export interface Skill {
  /**
   * The name of the skill.
   */
  name: string;

  /**
   * The level of proficiency the person has with the skill.
   */
  level: SkillLevel;

  /**
   * A url for an icon of the skill.
   */
  iconUrl: string;
}

/**
 * The level of proficiency the person has with the skill.
 */
export enum SkillLevel {
  beginner,
  intermediate,
  advanced,
}
