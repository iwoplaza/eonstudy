import { getRandomTheorem } from '../services/theoremService';
import { deflateSync } from 'zlib';

export interface QuizQuestion {
    desc: string[]
    options: QuizOption[],
    correctOption: number,
}

export interface QuizOption {
    desc: string[]
}

function mangleThesis(source: string): string {
    let dest = source.slice();

    const dict = [
        ['^2', ''],
        ['\'', ''],
        ['sqrt', ''],
        ['pi', ''],
        ['<<a,b>>', '(a,b)'],
        ['<<alpha,beta>>', '(alpha,beta)'],
        ['f(x)', 'f\'(x)'],
        ['g(x)', 'g\'(x)'],
        ['f(x)', 'f(x^2)'],
        ['f(x)', 'f^2(x)'],
        ['x(t)', 'x\'(t)'],
        ['x(t)', 'y(t)'],
    ];

    let it = 0;
    while (dest === source || Math.random() < 0.2) {
        const s = dict[Math.floor(Math.random() * dict.length)];
        dest = dest.replace(s[0], s[1]);
        console.log(`Replacing "${s[0]}" with "${s[1]}"`);
        
        it++;
        if (it > 500) {
            dest = "pi * " + dest;
            break;
        }
    }

    const addDict = [
        'pi',
        '2'
    ];

    if (Math.random() >= 0.5) {
        let equalsPos = dest.indexOf('=');
        
        dest = dest.substring(0, equalsPos + 1) + addDict[Math.floor(Math.random() * addDict.length)] + dest.substr(equalsPos + 1);
    }

    return dest;
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
    },

    async () => {
        const theorem = await getRandomTheorem(t => !!t.symbolic);

        const correctOption = Math.floor(Math.random() * 4);

        const mangled = [
            mangleThesis(theorem.symbolic as string),
            mangleThesis(theorem.symbolic as string),
            mangleThesis(theorem.symbolic as string),
        ];

        mangled.splice(correctOption, 0, theorem.symbolic as string);

        return {
            desc: [ `Jak wygląda twierdzenie "${theorem.name}"?` ],
            options: mangled.map(t => ({
                desc: [  `$$ ${t} $$` ],
            })),
            correctOption: correctOption,
        };
    }
];

export function generateQuestion(): Promise<QuizQuestion> {
    const generator = generators[Math.floor(Math.random() * generators.length)];
    return generator();
}