const obj = {
    name: 'Murali',
    getName: function () {
        console.log(this.name);
    }
}

obj.getName();