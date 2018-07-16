class User {
    constructor(name, pwd) {
        this.name = name;
        this.pwd = pwd;
    }

    showName() {
        console.log(this.name);
    }

    showPwd() {
        console.log(this.pwd);
    }
}

let king = new User('king', 'jinxin2828');
king.showName();

class VipUser extends User {
    constructor(name,pass,level){
        super(name, pass);
        this.level = level; 
    }
    showLevel(){
        console.log(this.level);
    }
}
let gyh = new VipUser('gyh', 'jinxin2828',5);
gyh.showLevel();