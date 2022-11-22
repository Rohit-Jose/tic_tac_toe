cnt=0;
flag=0;
function chance(n){
    cnt+=1;
    a=document.getElementsByClassName("box");
    if(cnt%2==1)
        { a[n-1].textContent="X";}
    else 
        {a[n-1].textContent="O";
    }
    b=[];
    for(i=0;i<9;i++)
        b.push(a[i].textContent);
    if((b[0]+b[1]+b[2]=="XXX") ||
       (b[3]+b[4]+b[5]=="XXX") ||
       (b[6]+b[7]+b[8]=="XXX") ||
       (b[0]+b[3]+b[6]=="XXX") ||
       (b[1]+b[4]+b[7]=="XXX") ||
       (b[2]+b[5]+b[8]=="XXX") ||
       (b[0]+b[4]+b[8]=="XXX") ||
       (b[2]+b[4]+b[6]=="XXX"))
       {document.getElementById("head").textContent="X WINS!!!!"}
    if((b[0]+b[1]+b[2]=="OOO") ||
        (b[3]+b[4]+b[5]=="OOO") ||
        (b[6]+b[7]+b[8]=="OOO") ||
        (b[0]+b[3]+b[6]=="OOO") ||
        (b[1]+b[4]+b[7]=="OOO") ||
        (b[2]+b[5]+b[8]=="OOO") ||
        (b[0]+b[4]+b[8]=="OOO") ||
        (b[2]+b[4]+b[6]=="OOO"))
        {document.getElementById("head").textContent="O WINS!!!!"}

}

