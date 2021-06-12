var con = document.getElementById("container");
var maxN = document.getElementById("maxNum");
var minN = document.getElementById("minNum");



function createTables(maxNum, minNum) {
    maxNum = parseInt(maxN.value);
    minNum = parseInt(minN.value);
    var table = document.createElement("table");
	
    for (var i = 0; i <= maxNum; i++){
        var row = document.createElement("tr");
        
        for (var j = 0; j <= minNum; j++){
            
            var td = document.createElement("td");
            
           
			
    
            if (i === 0 && j === 0) {
                td.innerHTML = "";
            } 
            else if (i === 0)
            {
                td.innerHTML = j;
            }
            else if (j === 0) {
                td.innerHTML = i;
            }
                
            else td.innerHTML = i * j;
            
            td.onclick = function ()
            {
                check(this);
                
            };
			row.appendChild(td);
		}
        table.appendChild(row);
	}
    con.appendChild(table);
}


function check(el) {

    el.style.borderRadius= "50%";
    var result = prompt("result");
    
    
    if (result == el.innerHTML ) {
        
        el.style.backgroundColor = "green";
        el.style.color="rgb(48, 46, 46)";
    }
    else {
        el.style.backgroundColor = "red";
        el.style.color="rgb(48, 46, 46)";
    }
    
}