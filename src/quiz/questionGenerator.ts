import { getRandomTheorem } from '../services/theoremService';

export interface QuizQuestion {
    desc: string[]
    options: QuizOption[],
    correctOption: number,
}

export interface QuizOption {
    desc: string[]
}

const generators: (() => Promise<QuizQuestion>)[] = [
    async () => {
        const theorems = await Promise.all([
            getRandomTheorem(),
            getRandomTheorem(),
            getRandomTheorem(),
            getRandomTheorem(),
        ]);

        const correctOption = Math.floor(Math.random() * theorems.length);

        return {
            desc: [ `Jak brzmi twierdzenie "${theorems[correctOption].name}"?` ],
            options: theorems.map(t => ({
                desc: t.thesis,
            })),
            correctOption: correctOption,
        };
    }
];

export function generateQuestion(): Promise<QuizQuestion> {
    const generator = generators[Math.floor(Math.random() * generators.length)];
    return generator();
}