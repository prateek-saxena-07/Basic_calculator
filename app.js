function dis(val)
{
    if (document.getElementById("res").value === '0')
    {
        document.getElementById("res").value = val
        
    }
    else {
       document.getElementById("res").value += val; 
    }
    

}

function Solve()
{
    let Num1 = document.getElementById('res').value;
    let Num2 = eval(Num1);
    document.getElementById('res').value = Num2;
}


function Clear()
{
    document.getElementById('res').value="";
    
}

function Back()
{
    let ev = document.getElementById('res');
    ev.value = ev.value.slice(0, -1);

}