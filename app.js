var getPages = document.getElementsByClassName("pages"),
      getDots = document.getElementsByClassName("dot"),
      getForm = document.getElementById("form"),
      getPrevBtn = document.getElementById("prev-btn"),
      getNextBtn = document.getElementById("next-btn"),
      getresultContainer = document.getElementById("result-container");


      var datas = [];
      var objectKeys = ["email", "password", "firstname", "lastname", "dob", "phone", "address"];
var currentIdx = 0;

showPage(currentIdx);

function showPage(num) {
      // console.log(num);

      getPages[num].style.display = "block";

      num === 0 ? getPrevBtn.style.display = "none"  : getPrevBtn.style.display = "inline-block";
      num === (getPages.length -1) ? getNextBtn.textContent = "Submit" : getNextBtn.textContent = "Next";


      dotIndicator(num);
}


function dotIndicator(num){

      // console.log(num);

      for(var x = 0; x < getDots.length; x++){
            getDots[x].classList.remove("active");
      }

      getDots[num].className += " active";
}




function goNow(num){
// console.log(num);


// method 1

// console.log(currentIdx);
// getPages[currentIdx].style.display = "none";

// currentIdx = currentIdx + num;
// console.log(currentIdx);

// if(currentIdx >= getPages.length){
//       getForm.submit();
// }

// showPage(currentIdx);
// formValidation();

// console.log(formValidation());

// if(formValidation()){
      // getPages[currentIdx].style.display = "none";

      // currentIdx = currentIdx + num;
      // console.log(currentIdx);

      // if(currentIdx >= getPages.length){
//       getForm.submit();
// }

// showPage(currentIdx);

// }

// method 2

// if(num ===1 && formValidation()){
      // getPages[currentIdx].style.display = "none";

      // currentIdx = currentIdx + num;
      // console.log(currentIdx);

            // if(currentIdx >= getPages.length){
            // getForm.submit();
            // }

            // showPage(currentIdx);

// }


//  method 3

// if(!formValidation()){
//       return false;
// }

// if(num === 1 && ! formValidation()){
//       return false;
// }

// if(!formValidation()) return false;

if(num === 1 && !formValidation()) return false;

getPages[currentIdx].style.display = "none";

currentIdx = currentIdx + num;

if(currentIdx >= getPages.length){
     /*  getForm.submit();
      return false; */

      getForm.style.display = "none";
      getresultContainer.style.display = "block";

      result(datas);

      return false;
}

// console.log("hoo..go ..next..page");
showPage(currentIdx);


}

function* genFun(){
      var index = 0;

      while(index < objectKeys.length){
            yield index ++;
      }

}

// console.log(genFun().next().value);
let gen = genFun();
// console.log(gen.next().value);
// console.log(gen.next().value);


function formValidation(){
      // return true;

      var valid = true;
      var getCurrentInput = getPages[currentIdx].getElementsByTagName("input");
      // console.log(getCurrentInput[0].value);

      for(var x = 0; x <getCurrentInput.length; x++){
            // console.log(getCurrentInput[x].value);

            if(getCurrentInput[x].value === ''){
                  getCurrentInput[x].classList.add("invalid");
                  valid = false;
            }else {
                  // console.log(getCurrentInput[x].value);

                  // console.log("x value is = ", x);
                  // console.log(objectKeys[x]);
                  // console.log(getCurrentInput[x].value);

                  // console.log("gen value is = ", gen.next().value);

                  // method 1
                  // const keys = objectKeys[gen.next().value];
                  // console.log(keys);
                  // const values = getCurrentInput[x].value;
                  // const obj = {
                        // [keys]:values    // notice here = [keys] = dynamic key syntax
                  // }


                  // method 2
                  // const keys = objectKeys[gen.next().value];
                  // const values = getCurrentInput[x].value;
                  // var obj = {};
                  // obj[keys] = values;

                  // datas.push(getCurrentInput[x].value);
                  // datas.push(obj);


                  // method  3
                  const keys = objectKeys[gen.next().value];
                  const values = getCurrentInput[x].value;
                  datas.push({[keys]:values});

            }
      }

      if(valid){
            getDots[currentIdx].className += " done";
      }

      return valid;
}


function result(data) {
      // console.log(data);

      getresultContainer.innerHTML = `
            <ul>
                  <li>Name : ${data[2].firstname} ${data[3].lastname}</li>
                  <li>Email : ${data[0].email}</li>
                  <li>Date Of Birth : ${data[4].dob}</li>
                  <li>Phone Number : ${data[5].phone}</li>
                  <li>Address : ${data[6].address}</li>
            </ul>

            <button type="submit" class="submit-btn" onclick="submitBtn()">Apply Now</button>
      `;
}


function submitBtn() {
      getForm.submit();
}