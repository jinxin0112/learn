function resolvePromise (promise2, x, resolve, reject){
    if(promise2 === x){
        return new TypeError('循环引用');
    }
    if(x !== null && (typeof x === 'object' || typeof x === 'function')){
        let then = x.then;
        try {
            if(typeof then === 'function'){
                then.call(x, y=>{
                    resolvePromise(promise2, y, resolve, reject);
                },err=>{
                    reject(err);
                });
            }else{
                resolve(x);
            }
        } catch (err) {
            reject(err);
        }
    }else{
        resolve(x);
    }
}
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
                let x = onFulFilled(this.value);
                resolvePromise(promise2, x, resolve, reject);
            });
        }
        if(this.status === 'rejected'){
            promise2 = new Promise((resolve,reject)=>{
                let x = onFulFilled(this.reason);
            });
        }
        if(this.status === 'pending'){
            promise2 = new Promise((resolve,reject)=>{
                this.onResolvedCallbacks.push(()=>{
                    let x =  onFulFilled(this.value);
                });
                this.onRejectedCallbacks.push(()=>{
                    let x = onFulFilled(this.reason);
                });
            });
        }
        return promise2
    }
    catch (){

    }
}

module.exports = Promise