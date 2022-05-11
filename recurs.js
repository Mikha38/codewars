const asyncFns = [
    () => new Promise((resolve, reject) => setTimeout(()=> resolve(0), Math.random() * 1000)),
    () => new Promise((resolve, reject) => setTimeout(()=> resolve(1), Math.random() * 1000)),
    () => new Promise((resolve, reject) => setTimeout(()=> resolve(2), Math.random() * 1000)),
    () => new Promise((resolve, reject) => setTimeout(()=> resolve(3), Math.random() * 1000)),
    () => new Promise((resolve, reject) => setTimeout(()=> resolve(4), Math.random() * 1000)),
    () => new Promise((resolve, reject) => setTimeout(()=> resolve(5), Math.random() * 1000)),
    () => new Promise((resolve, reject) => setTimeout(()=> resolve(6), Math.random() * 1000)),
    () => new Promise((resolve, reject) => setTimeout(()=> resolve(7), Math.random() * 1000)),
  ]

function allWithLimit(fns, limit){
    let copyFns = [...fns]
    let count = copyFns.length
    let result = []
    return new Promise((resolve, reject) => {
        function helper(){
            if(copyFns.length === 0){
                return;
            }
            let i = fns.length - copyFns.length
            copyFns.shift()().then(el => {
                result[i] = el
                count--
                if(count === 0){
                    resolve(result)
                    return;
                }
                if(count > 0){
                    helper()
                }
            })
        }
        for(let i = 0; i < limit; i++){
            helper()
        }
    })

}

allWithLimit(asyncFns, 3).then(console.log);