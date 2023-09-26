window.onload= function(){
    console.log(compare(3,5))
    console.log(compare_three(3,5,9))
    console.log(compare_all(3,4,6,9,1))
    console.log(compare_all(55,46,99,105,20,78,11,6,48))
}

function compare(a, b){
    console.log(""+a+","+b)
    if (a > b){
        console.log("bigger number:"+a)
        return a 
    } else {
        console.log("bigger number:"+b)
        return b 
    } 
}

function compare_three(a,b,c){
    let temp = compare(a,b)
    let result = compare(temp,c)
    return result
}

function compare_all(...numbers){
    console.log(numbers)
    let temp = numbers[0]
    for (let i = 0; i < numbers.length-1; i++) {
        temp = compare(temp,numbers[i+1])
      }
      return temp
}