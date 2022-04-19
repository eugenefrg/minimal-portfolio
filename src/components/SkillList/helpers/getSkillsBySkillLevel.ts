import { Skill, SkillLevel } from "../../../assets/data/types";

/**
 * Organizes the list of skills by skill level.
 * @param skills The list of skills to be organized.
 * @returns The list of skills organized by skill level.
 */
export function getSkillsBySkillLevel(skills: Skill[]) {
  const skillLevels: { [key: string]: Skill[] } = {
    advanced: skills.filter((skill) => skill.level === SkillLevel.advanced),
    intermediate: skills.filter(
      (skill) => skill.level === SkillLevel.intermediate
    ),
    beginner: skills.filter((skill) => skill.level === SkillLevel.beginner),
  };
  return skillLevels;
}
