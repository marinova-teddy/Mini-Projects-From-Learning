function calculateExpression(string) {
  let value;
  let start=1;
  let len=1;
  let sign;
  for (let i=1;i<string.length;i++) {
    if (string.charAt(i)>='0' && string.charAt(i)<='9') {len++;}
    else {
      if (start==1) {
        value=Number(string.substring(start,start+len));
        console.log("first time value");
        console.log(value);
        start=i+1;
        len=1;
        sign = string.charAt(i+1);
        i++;
      }
      else {
        console.log(start, len)
        sign = string.charAt(i);
        start=i+1;
        len=1;
        switch (sign) {
          case '+': value+=Number(string.substring(start,start+len)); break;
          case '-': value-=Number(string.substring(start,start+len)); break;
          case '*': value*=Number(string.substring(start,start+len)); break;
          case '/': value/=Number(string.substring(start,start+len)); break;
        }
      }
    }
  }
  return value;
}

let div = document.getElementById("placeholder");
let table = document.createElement("table");
table.appendChild(document.createElement("tbody"));

for (let i=0;i<100;i++) {
  table.children[0].appendChild(document.createElement("tr"));
  for (let j=0;j<100;j++) {
    let td = document.createElement("td");
    table.children[0].children[i].appendChild(td);
    table.children[0].children[i].children[j].innerHTML=0;

    td.addEventListener("click", function(){
      if (td.children.length==0) {
        let initialValue = td.innerHTML;
        td.innerHTML = "";
        let form = document.createElement("form");
        form.appendChild(document.createElement("input"));
        form.children[0].type="text";
        form.children[0].value=initialValue;
        form.children[0].focus();
        td.appendChild(form);
        
        form.addEventListener("submit", function(e){
          e.preventDefault();
          let value = form.children[0].value;
          if (value.startsWith("=")) {
            value=calculateExpression(value);
          }
          form.parentElement.innerHTML = value;
        })
      }
    })
  }
}
div.appendChild(table);