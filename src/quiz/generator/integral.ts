import { getRandomIntegrals } from '../../services/integralService';
import { QuestionGenerator } from '../questionGenerator';

/**
 * What's this integral's result?
 */
export const Integral: QuestionGenerator = {
    generate: async () => {
        const integrals = await getRandomIntegrals(4);
        const correctOption = Math.floor(Math.random() * 4);

        return {
            desc: [ `Ile równa się $$ int${integrals[correctOption][0]}dx $$?` ],
            options: integrals.map(i => ({
                desc: [  `$$ ${i[1]} $$` ],
            })),
            correctOption: correctOption,
        };
    },
};