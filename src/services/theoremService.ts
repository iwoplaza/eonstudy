import { Theorem } from '../types/theorem';

const theorems: Theorem[] = [
    {
        key: 0,
        category: [ 'integrals' ],
        prereqs: [
            '$$ f in C(<<a,b>>) $$',
            'F jest funkcją pierwotną funkcji f na <a,b>'
        ],
        name: 'Newtona-Leibniza',
        symbolic: 'int_a^b f(x)dx = F(b)-F(a)',
        thesis: [
            'Całka Riemanna funkcji f na przedziale [a,b] jest równa całce oznaczonej (w sensie Newtona) na [a,b].',
            '$$ int_a^b f(x)dx = F(b)-F(a) $$',
        ],
        important: true,
    },
    {
        key: 1,
        category: [ 'integrals' ],
        prereqs: [
            '$$P$$ - przedział',
            '$$ f,g: P |-> RR $$',
            '$$ vvv_(x in P) 0 <= f(x) <= g(x) $$'
        ],
        name: 'O zbieżności całek',
        thesis: [
            'Jeśli istnieje całka $$ int_P g(x)dx $$, to istnieje również $$ int_P f(x)dx $$',
        ],
        important: true,
    },
    {
        key: 2,
        category: [ 'integrals' ],
        name: 'O całkowaniu przez podstawienie dla całek oznaczonych',
        prereqs: [
            '$$ f: C(<<a,b>>) $$',
            '$$ varphi: <<alpha,beta>> |-> <<a,b>> $$, $$varphi$$ - bijekcja, $$ varphi in C^1(<<alpha,beta>>) $$',
            '$$ varphi(alpha)=a, varphi(beta)=b $$',
        ],
        thesis: [
            '$$ int_a^b f(x)dx = int_(alpha)^(beta) f(varphi(t)) * varphi\'(t)dt $$'
        ],
        important: true,
    },
    {
        key: 3,
        category: [ 'integrals' ],
        name: 'Wzór na pole obszaru ograniczonego dwoma funkcjami',
        prereqs: [
            '$$ D={(x,y) in RR^2: x in <<a,b>>, f(x)<=y<=g(x)}',
            '$$ f,g: <<a,b>> |-> RR $$ (ciągłe)',
        ],
        thesis: [
            'Pole obszaru D jest równe ',
            '$$ |D|=int_a^b(g(x)-f(x))dx $$',
        ],
    },
    {
        key: 4,
        name: 'Wzór na pole obszaru określonego biegunowo',
        category: [ 'integrals' ],
        prereqs: [
            '$$ D={(x,y) in RR^2: x=rcosvarphi, y=rsinvarphi, alpha<=varphi<=beta, 0<=r<=r(varphi)} $$',
            '$$ r(varphi) in C(<<alpha,beta>>) $$',
        ],
        thesis: [
            'Pole obszaru D jest równe:',
            '$$ |D| = 1/2 int_(alpha)^(beta)r^2(varphi)dvarphi $$',
        ],
    },
    {
        key: 5,
        name: 'Wzór na pole obszaru określonego parametrycznie',
        category: [ 'integrals' ],
        prereqs: [
            '$$ L: x=x(t), y=y(t), t in <<alpha,beta>> $$',
            '$$ x(t) in C^1(<<alpha,beta>>) $$',
            '$$ y(t) in C(<<alpha,beta>>) $$',
            '$$ vvv_(t in <<alpha,beta>>) x\'(t)>0 $$',
        ],
        thesis: [
            'Pole obszaru D jest równe:',
            '$$ |D|=int_alpha^beta y(t)*x\'(t)dt $$',
        ],
    },
    {
        key: 6,
        name: 'Wzór na długość łuku określonego parametrycznie',
        category: [ 'integrals' ],
        prereqs: [
            'L - łuk gładki',
        ],
        thesis: [
            'Długość łuku L jest równa',
            '$$ |L| = int_alpha^beta sqrt((x\'(t))^2 + (y\'(t))^2)dt$$',
        ],
    },
    {
        key: 7,
        name: 'Wzór na długość łuku określonego przez funkcję',
        category: [ 'integrals' ],
        prereqs: [
            '$$ y=f(x), x in <<a,b>> $$',
            '$$ f in C^1(<<a,b>>) $$',
        ],
        thesis: [
            '$$ |L| = int_a^b sqrt(1 + (f\'(x))^2)dx $$'
        ],
    },
    {
        key: 8,
        name: 'Wzór na długość łuku określonego biegunowo',
        category: [ 'integrals' ],
        prereqs: [
            '$$ L: r=r(varphi), varphi in <<alpha, beta>> $$',
            '$$ r(varphi) in C^1(<<alpha, beta>>) $$',
        ],
        thesis: [
            '$$ |L| = int_alpha^beta sqrt((r(varphi))^2 + (r\'(varphi))^2)dvarphi $$'
        ],
    },
    {
        key: 9,
        name: 'Wzór na objętość bryły obrotowej określonej przez funkcję',
        category: [ 'integrals', 'solids-of-revolution', 'volume' ],
        prereqs: [
            '$$ L: y=f(x), x in <<a,b>> $$',
            '$$ f in C(<<a,b>>) $$',
        ],
        thesis: [
            'Objętość bryły powstałej przez obrót krzywej L dookoła osi X wynosi:',
            '$$ |V| = pi * int_a^b f^2(x)dx $$',
        ],
    },
    {
        key: 10,
        name: 'Wzór na objętość bryły obrotowej określonej parametrycznie',
        category: [ 'integrals', 'solids-of-revolution', 'volume' ],
        prereqs: [
            '$$ L:{(x,=,x(t)),(y,=,y(t)):},t in <<alpha,beta>> $$',
            '$$L$$ - łuk gładki',
        ],
        thesis: [
            'Objętość bryły powstałej przez obrót krzywej L dookoła osi X wynosi:',
            '$$ |V|=pi * int_alpha^beta y^2(t)x\'(t)dt $$',
        ],
    },
    {
        key: 11,
        name: 'Wzór na pole powierzchni bryły obrotowej określonej przez funkcję',
        category: [ 'integrals', 'solids-of-revolution', 'area' ],
        prereqs: [
            '$$ L: y=f(x), x in <<a,b>> $$',
            '$$ f in C^1(<<a,b>>) $$',
            '$$ vvv_(x in <<a,b>>) f(x) >= 0 $$',
        ],
        thesis: [
            'Pole powierzchni bocznej powstałej przez obrót krzywej L dookoła osi OX wynosi:',
            '$$ |S| = 2pi * int_a^b f(x)sqrt(1 + (f\'(x))^2)dx $$',
        ],
    },
    {
        key: 12,
        name: 'Wzór na pole powierzchni bryły obrotowej określonej parametrycznie',
        category: [ 'integrals' ],
        prereqs: [
            '$$ L:{(x,=,x(t)),(y,=,y(t)):},t in <<alpha,beta>> $$',
            '$$L$$ - łuk gładki, $$ vvv_(t in <<alpha,beta>>) y(t)>=0 $$',
        ],
        thesis: [
            '$$ |S| = 2pi * int_alpha^beta y(t)sqrt((x\'(t))^2 + (y\'(t))^2)dt $$',
        ],
    }
];



export function getTheorems(): Promise<Theorem[]> {
    return Promise.resolve(theorems);
}