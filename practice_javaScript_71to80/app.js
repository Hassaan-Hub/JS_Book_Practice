// 71 Objects: Methods

var plan1 = {
    names: {
        name1: "hassaan",
        name2: "ali",
        name3: "JavaScript",
        name4: "Objects",
    }
};

for (var i in plan1) {
    // console.log(plan1[i]);
    for(var j in plan1[i]){
        console.log(plan1[i][j]);
        
    }
}
