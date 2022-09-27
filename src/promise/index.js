const promise = new Promise((resolve, reject) => {
    resolve('Todo bien')
})

const cows = 15

const countCows = new Promise((resolve, reject) => {

    if (cows > 10) {
        resolve(`si hay mas de 10, tenes ${cows}`)
    } else {
        reject('te hacen falta')
    }

})

countCows.then((result) => console.log(`Resultado de la promesa: ${result} \n`))
         .catch(error => console.error(error))
         .finally(() => console.log('Finally'))


function delay(time, message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(message)
        }, time)
    })
}

delay(1000, "Despues de 2s").then((message) => console.log(message))