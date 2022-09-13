let form = document.querySelector("form");
let input_prime_number = form.querySelector("#prime_input_num");


form.addEventListener("submit", primeNumber);


function primeNumber(e){

    let num = parseInt(input_prime_number.value);
    let input_field_one = document.querySelector("#prime_num_one");
    let input_field_two = document.querySelector("#prime_num_two");


    e.preventDefault();
  
    
        if(num == 1){
            input_field_one.innerHTML = "This number is a Natural number";
        }
        else if(num < 1){
            input_field_one.innerHTML = "This number is a Negative number";
        }
        else{
            for (var i = 2; i<=num; i++){
                 if(num % 2 == 0){
                    input_field_one.innerHTML = "This number is not a Prime number";
                    break;
                }
                else if(num % 3 == 0){
                    input_field_one.innerHTML = "This number is not a Prime number";
                    break;
                }
                else if(num % 5 == 0){
                    input_field_one.innerHTML = "This number is not a Prime number";
                    break;
                }
                else if(num % 7 == 0){
                    input_field_one.innerHTML = "This number is not a Prime number";
                    break;
                }
                else{
                    input_field_one.innerHTML = "This is a Prime number";
                }
            }

        }
      

}
    