import { QuestionGenerator } from '../questionGenerator';
import { getRandomTheorems } from '../../services/theoremService';

/**
 * Which thesis matches the theorem?
 */
export const TheoremDesc: QuestionGenerator = {
    generate: async () => {
        const theorems = await getRandomTheorems(4);
        const correctOption = Math.floor(Math.random() * theorems.length);

        return {
            desc: [ `Jak brzmi twierdzenie "${theorems[correctOption].name}"?` ],
            options: theorems.map(t => ({
                desc: t.thesis,
            })),
            correctOption: correctOption,
        };
    },
};