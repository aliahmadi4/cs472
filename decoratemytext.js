var fontSize;

window.onload = function(){

    let btn = document.getElementById('biggerdecoration');
    btn.onclick = show;

    document.getElementById('chkbox').onchange = changed;

    document.getElementById('convert').onclick = convert;
    
}


    function show(){
        setInterval(increasefontsize,500);
    }

    function increasefontsize(){
        fontSize = document.getElementById('textarea').style.fontSize;
        document.getElementById('textarea').style.fontSize = parseInt(fontSize)+2 +'pt';
    }


function changed(){
    let chkvalue=document.getElementById('chkbox').checked;
    if(chkvalue == true){
        document.getElementById('textarea').style.fontWeight = 'bold';
        document.getElementById('textarea').style.color = 'green';
        document.getElementById('textarea').style.textDecoration = 'underline';
        document.getElementById('container').style.backgroundImage="url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
    }else{
        document.getElementById('textarea').style.fontWeight = 'normal';
        document.getElementById('textarea').style.color = 'black';
        document.getElementById('textarea').style.textDecoration = 'none';
        document.getElementById('container').style.backgroundImage='none';
    }
 }

 function convert(){
   let valueString = document.getElementById('textarea').value;
   
   let pre = '';
   let size = 0;
//    for(let i=0; i<valueString.size; i++){
//         if(valueString.charAt(i)!=='a' || valueString.charAt(i)!=='e'|| valueString.charAt(i)!=='i' || valueString.charAt(i)!=='o' || valueString.charAt(i)!=='u'){
//             pre += valueString.charAt(i);
//             size ++;
//         }else{
//             break;
//         }
//    }
//    alert();

    document.getElementById('latin').innerHTML = valueString + '-ay';
 }
