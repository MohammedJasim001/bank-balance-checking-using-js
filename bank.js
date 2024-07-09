let balance=0

function deposit(){
    let deposit=document.getElementById("dpAmount").value
    deposit=Number( deposit)
    if ( deposit>0){
        balance += deposit;
     
        
        document.getElementById("dpAmount").value=""
    }else{
        
        document.getElementById("dpAmount").value=""
    }
 
}


function withdraw(){
    let withdraw=document.getElementById("withdraw").value
    withdraw=Number(withdraw)
    if (  withdraw>0 &&  withdraw<=balance){
        balance -= withdraw
        document.getElementById("withdraw").value=""
        

    }else{
        document.getElementById("withdraw").value=""
    }
}

function CheckBalance(){
   console.log(balance)
   document.getElementById("message").innerHTML="Current Balance:"+balance
}