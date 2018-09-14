module.exports = function check(str, bracketsConfig) {
  var str_size = str.length;
    var stack = [];
    var flag = true;

    // проверка на корректность введенных данных - ищет цифры
//    var correct = str.match(/\d+/g);
//     var test = bracketsConfig.join();
//     var cor_ar = test.match(/\d+/g);
// if(correct !== null && cor_ar !== null) return true;

//  проверка строки
   for(let i = 0; i < str_size; i++){
       if (find_pair(stack[stack.length-1], str[i])){
            stack.pop();
       }
       else
        stack.push(str[i]);
    }
    // если стек пуст - все парное
    if(stack.length !== 0)
    flag = false;

// проверка массива
    for(let i =0; i < bracketsConfig.length; i++){
       if(!find_pair(bracketsConfig[i][0], bracketsConfig[i][1]))
       flag = false;
       break;
    }
  return flag;

  }

// ищет пару - функция-сваха
  function find_pair(symb, comp){
      if(symb === "(" && comp == ")") return true;
       else if(symb === "[" && comp == "]") return true;
        else if(symb === "{" && comp == "}") return true;
        else  if(symb === "|" && comp == "|") return true;
            else return false;

  }
