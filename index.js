function receivesAFunction (playerPosition){
        playerPosition();
}
function returnsANamedFunction() {
    return function namedFunction(){
        console.log("Function working")
    }

}
function returnsAnAnonymousFunction(){
    return function(){

    }
}
