
function startup() {
        
        $("shufflebutton").observe("click", mixup);
        
		var pArea = document.getElementById("puzzlearea");  
        

		var piecesArray = pArea.getElementsByTagName("div");
		pArea.cleanWhitespace(); 
		
        var divContent = null;
		for (var i = 0; i < piecesArray.length; i++) {
		    divContent = piecesArray[i].innerHTML;
		    piecesArray[i].className = "puzzlepiece"; 
		    piecesArray[i].style.display = "inline-block";
		    piecesArray[i].style.position = "relative";
		    piecesArray[i].style.backgroundImage="url('backimage.jpg')";

            switch(divContent) {
            case '1':
                piecesArray[i].style.backgroundPosition = "0px 0px";
                break;
            case '2':
                piecesArray[i].style.backgroundPosition = "-100px 0px";
                break;	
            case '3':
                piecesArray[i].style.backgroundPosition = "-200px 0px";
                break;
            case '4':
                piecesArray[i].style.backgroundPosition = "-300px 0px";
                break;	
            case '5':
                piecesArray[i].style.backgroundPosition = "0px -100px";
                break;
            case '6':
                piecesArray[i].style.backgroundPosition = "-100px -100px";
                break;	
            case '7':
                piecesArray[i].style.backgroundPosition = "-200px -100px";
                break;
            case '8':
                piecesArray[i].style.backgroundPosition = "-300px -100px";
                break;	
            case '9':
                piecesArray[i].style.backgroundPosition = "0px -200px";
                break;
            case '10':
                piecesArray[i].style.backgroundPosition = "-100px -200px";
                break;	
            case '11':
                piecesArray[i].style.backgroundPosition = "-200px -200px";
                break;
            case '12':
                piecesArray[i].style.backgroundPosition = "-300px -200px";
                break;	
            case '13':
                piecesArray[i].style.backgroundPosition = "0px -300px";
                break;
            case '14':
                piecesArray[i].style.backgroundPosition = "-100px -300px";
                break;	
            case '15':
                piecesArray[i].style.backgroundPosition = "-200px -300px";
                break;                
            }                      
		}
		var dv = document.createElement('div');
	    dv.className = "puzzlepiece"; 
	    dv.style.display = "inline-block";
	    dv.style.position = "relative";		
		pArea.appendChild(dv);
		     
}

 function mixup() {
    var piecesArray = document.getElementById("puzzlearea").getElementsByTagName("div");  
    var pArea = document.getElementById("puzzlearea");  

    var $d = null;
    var g = null;
    for (var n = 0; n < 25; n++)  {
        g = Math.floor(Math.random() * 15);
        $d = piecesArray[g];
        piecesArray[g].remove();
        pArea.appendChild($d);
        }
 }


window.onload = startup; 

