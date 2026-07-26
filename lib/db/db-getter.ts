import skills from "./skills.json"
import experiences from "./experiences.json"
import projects from "./projects.json"
import { experience, experienceType, project, projectType, skill, skillType } from "./db-types";

export function GetExperiences(type: experienceType): experience[] {
    return experiences.filter(item => item.type == type);
}

export function GetProjects(type: projectType): project[] {
    return projects.filter(item => item.type == type);
}

export function GetSkills(type: skillType): skill[] {
    return skills.filter(item => item.type == type);
}

export function GetSkillById(id: string): skill {
    return skills.find(item => item.id == id)!
}