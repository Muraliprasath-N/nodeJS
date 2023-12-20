function x() {
    let a = 'alive';
    function y() {
        console.log(a);
    }
    return y;
}

var z = x();
z();