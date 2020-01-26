import { MangledThesis } from './generator/mangledThesis';
import { TheoremDesc } from './generator/theoremDesc';
import { Integral } from './generator/integral';

export interface QuizQuestion {
    desc: string[]
    options: QuizOption[]
    correctOption: number
}

export interface QuizOption {
    desc: string[]
}

export interface QuestionGenerator {
    generate: () => Promise<QuizQuestion>
}

const generators: QuestionGenerator[] = [
    MangledThesis,
    TheoremDesc,
    Integral,
];

export function generateQuestion(): Promise<QuizQuestion> {
    const generator = generators[Math.floor(Math.random() * generators.length)];
    return generator.generate();
}