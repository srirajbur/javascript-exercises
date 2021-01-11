const sumAll = function(first, sec) {
  if(((first || sec) < 0) || (typeof(first && sec) !== "number")){
    return "ERROR"
  }
  let large;
  let small;
  if(first > sec){
    large = first
    small = sec
  }
  if(sec > first){
    large = sec
    small = first
  }
  let sum = 0

  for(let i = small; i <= large; i++){
    sum += i
  }
  return sum
}


module.exports = sumAll
