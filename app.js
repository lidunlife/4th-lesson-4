let Num = Math.round(Math.random()*30)
alert(Num)
if (Num % 3==0 && Num % 5==0) {
    alert(Num + ` is fizzbuzz `)
} else if (Num % 3==0){
    alert(Num + ` is fizz `)
} else if (Num % 5==0){
    alert(Num + ` is buzz `)
} else{
    alert(Num + ` is not fizz and is not buzz`)
}