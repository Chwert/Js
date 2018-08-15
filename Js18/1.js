var man = {
    "name" : "Alexander",
    "age" : "32",
    "id" : "wert",
    "sex" : "male"
};


//вивести рік народження
var man2 = {
    "name" : "Alexander",
    "age" : "20",
    "id" : "wert",
    "sex" : "male",
    "year" : function() {
        //виведем рік народження
        return 2018 - this.age;
    }
};

//console.log(man);
//console.log(man.name);
console.log(man2.year());

//виввести суму масиву
var m = {
    "mas" : [1, 2, 5, 8, 10],
    "sum" : function() {
        var sum = 0;
        for (i=0; i<this.mas.length; i++) {
            sum += this.mas[i];
        }
        return sum;
    }
    
}

console.log(m.sum());