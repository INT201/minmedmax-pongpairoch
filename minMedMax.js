const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {

    let result = {min:"", mid:"", max:""}
    let arr = [n1,n2,n3]
    
    let min = n1
    let max = n1
    let mid = n1
   
    arr.forEach(index =>{
      index < min ? index:min;
    })//ลองใช้ foreach

    for (let index = 0; index < arr.length; index++) {
      if (arr[index] > max) {
        max = arr[index]
      }
    }
  
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] < max && arr[index] > min) {
        mid = arr[index]
      }
    }
  
      

    result.min = min
    result.mid = mid
    result.max = max
  
    return result
  }
module.exports = minMedMax
