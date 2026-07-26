export type multiLanguageText = {
    "en-us": string;
    "pt-br": string;
}
 
export type experienceType = "job" | "education"
export type experience = {
    title: string;
    type: string;
    location: string;
    started_at: string;
    ended_at: string | null;
    logo: string;
    skills: string[];
    role_description: multiLanguageText;
    achievements: multiLanguageText[]
};

export type skillType = "language" | "frontend" | "backend" | "other"
export type skill = {
    name: string;
    id: string;
    type: string;
    logo: string;
    bg_color: string;
}

export type projectType = "web" | "game" | "other"
export type project = {
    title: multiLanguageText;
    date: string;
    type: string;
    external_link: string;
    banner: string;
    skills: string[]
    description: multiLanguageText;
}