import { Integral } from '../types/integral';
import { generateUniqueIndices } from '../helpers/randomHelper';

const integrals: Integral[] = [
    [ '0', 'C' ],
    [ '1', 'x + C' ],
    [ 'k', 'kx + C' ],
    [ 'x^n', '(x^(n+1))/(n+1) + C, (n != -1)' ],
    [ '1/x', 'ln|x| + C' ],
    [ '1/(ax + b)', '1/aln|ax + b| + C' ],

    [ 'lnx', 'xlnx - x + C' ],
    [ 'log_a x', '(x(lnx - 1))/lna + C, (a > 0, a != 1, x > 0)' ],

    [ 'e^x', 'e^x + C' ],
    [ 'e^-x', '-e^-x + C' ],
    [ 'e^(kx)', '1/k e^(kx) + C' ],
    [ 'a^x', 'a^x/(ln|a|) + C' ],
    
    [ 'cosx', 'sinx + C' ],
    [ 'sinx', '-cosx + C' ],
    [ 'tgx', '-ln|cosx| + C' ],
    [ 'ctgx', 'ln|sinx| + C' ],
    [ 'cosax', '1/asinax + C' ],
    [ 'sinax', '-1/acosax + C' ],
    [ '1/(cos^2x)', 'tgx + C' ],
    [ '1/(sin^2x)', '-ctgx + C' ],
    [ '1/(x^2 + a^2)', '1/a arctgx/a + C' ],
    [ '1/(x^2 - a^2)', '1/(2a)ln|(x-a)/(x+a)| + C' ],
    [ '1/sqrt(a^2 - x^2)', 'arcsin(x/a) + C' ],
    [ '1/sqrt(x^2 + q)', 'ln|x + sqrt(x^2 + q)| + C' ],
];

export function getIntegrals(): Promise<Integral[]> {
    return Promise.resolve(integrals);
}

export function getRandomIntegrals(amount: number): Promise<Integral[]> {
    return Promise.all(generateUniqueIndices(amount, integrals.length).map(i => integrals[i]));
}