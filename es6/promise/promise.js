class Promise {
    constructor (executor){        
        this.status = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];
        let resolved = (data)=>{
            if(this.status === 'pending'){
                this.value = data;
                this.status = 'resolved';
                this.onResolvedCallbacks.forEach(fn=>fn());
            }
        }
        let rejected = (reason)=>{
            if(this.status === 'pending'){
                this.reason = reason;
                this.status = 'rejected';
                this.onRejectedCallbacks.forEach(fn=>fn());
            }
        }
        try{
            executor(resolved,rejected);
        }catch(e){
            rejected(e);
        }
    }
    then (onFulFilled,onRejected){
        let promise2
        if(this.status === 'resolved'){
            promise2 = new Promise((resolve,reject)=>{
                onFulFilled(this.value);
            });
            return promise2
        }
        if(this.status === 'rejected'){
            promise2 = new Promise((resolve,reject)=>{
                onFulFilled(this.reason);
            });
            return promise2
        }
        if(this.status === 'pending'){
            promise2 = new Promise((resolve,reject)=>{
                this.onResolvedCallbacks.push(()=>{
                    onFulFilled(this.value);
                });
                this.onRejectedCallbacks.push(()=>{
                    onFulFilled(this.reason);
                });
            });
            return promise2
        }
    }
    catch (){

    }
}

module.exports = Promise