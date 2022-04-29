const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  if (!arr){
    return false
    }
    
    if(arr.length == 0){
        return []
        }
        //если нет строк в массиве- false
        let set = new Set()
        for(let i = 0; i<arr.length; i++) {
        if(typeof(arr[i]) == "string"){
        set.add(i)
        }    
        }
        if(set.size<1){
        return false
        }
    ///удаляем null false undefined
    
      let arrNotNull= []
    for(let i = 0; i < arr.length; i++ ){
    if(arr[i]){
    arrNotNull.push(arr[i])
    } 
    }
    
    if(arr.length == 0) {
      return false
      }
      /////////удаляем все кроме строк
      let mas = []
    for(let i =0; i< arrNotNull.length; i++){
        if(typeof(arrNotNull[i]) == "string"){
        mas.push(arrNotNull[i])  
        } 
        }
       /////         
        
      if(mas.length == 0) {
          return false
          }
     //////////имеем массив строк, делаем строки тоже массивами
    let newAr =  mas.map((el)=> Array.from(el))
    let s =[]
    for(let i =0; i< newAr.length; i++){
    let a = newAr[i].filter((e) => e !==" ")
    s.push(a)
    }
    
    if(s[0].length == 0) {
    return false
    }
    
    let p = []
    for(let i =0; i< s.length; i++){
    let g = s[i][0].toUpperCase()
    p.push(g)
    p.sort()
    }
    return p.join("")
}

module.exports = {
  createDreamTeam
};
