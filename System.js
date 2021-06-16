class System{

    constructor(){}

    authenticate(acutalCode, enteredCode){
        textSize(50);
        fill("black");
        text(code,300,300)
        if(acutalCode === enteredCode)
        return true
    else
        return false
    }


    

}