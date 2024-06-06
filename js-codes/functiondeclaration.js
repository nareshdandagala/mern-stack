const calVoteAge = function(year){
    return 2024 - year;
}
const eligiableVote = function(year,name){
const age = calVoteAge(year);

if(age>=18)
console.log(${name} ur eligiable to vote and age ${age});
else
console.log(${name} ur not eligiable to vote and age ${age});
}
eligiableVote(2009,'naresh');

console.log(Math.trunc(Math.random()*6)+1);
