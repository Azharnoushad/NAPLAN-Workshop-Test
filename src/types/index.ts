export type SkillType = {
  id: string;
  name: string;
  description: string;
  questions: {
    id: number;
    text: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
};
