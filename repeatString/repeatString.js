const repeatString = function(string, num) {
  if(num < 0) return "ERROR"
  let final = ""
  for(let i = 1; i <= num; i++){
    final += string
  }
  return final
}

module.exports = repeatString
