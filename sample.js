//takes in amount of money as a parameter to determine what car would be afforded by the amount
function firstFun(money){
    var car;
    var cost = money;
    if(cost > 50000){
        car = 'BMW';
    }else
    {
        car = 'Honda';
    };
    document.write('<h2><br>'+car+'<br></h2>')
    
    //for loop
    for( i = 10; i > -1; i--){
        document.write(i+'<br>');
    }
    document.write('blast off!!!!')
};