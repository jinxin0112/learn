var name = "windowsName";

function fn() {
    var name = 'Cherry';
    innerFunction();
    console.log(this);
    function innerFunction() {
        console.log(this.name);      // windowsName
    }
}

fn();
