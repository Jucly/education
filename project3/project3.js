let name= ['Друг', 'Вы'];
let text= [
    'Пойдем гулять в парк?',
    'Кажется, дождь собирается. Лучше пойдем в кино!',
    'Давай, сегодня как раз вышел новый фильм.',
    'Встречаемся через час у кинотеатра.'
];

let t = 0;
let n = 0;
while(t <= 3){
    console.log (`${name[n]}: ${text[t]}`);
    n++;
    if (n == 2){
        n = 0;
    }
    t++;
}







