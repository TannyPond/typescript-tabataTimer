// Import stylesheets
import './style.css';

//let title: string = 'TABATA TIMER';
// Write TypeScript code!
//document.getElementById('app.title').innerHTML = title;
//const appDiv: HTMLElement = document.getElementById('app');

console.log('TABATA TIMER');
let round:number = 0; 
let p:number = 0;
let work: number = 0;

const setIntervalConst: ReturnType<typeof setInterval> = setInterval(() => {

for(let round = 1; round <= 8; round++){
  console.log('ROUND ' + round);
  
  for (let p = 0; p <= 10; p++) {
      console.log(p);
      setInterval(p,1000);
    }

   for(work = 1; work <= 20; work++){
     console.log(work);
   } }
},1000);
