"use strict";

/*
Промисы предзназначены для того, чтобы избежать вложенности при работе с большим объемом
ассинхронных операций.
 */

// Смоделируем ситуацию получения данных с сервера
// Внутри функции содержится 2 callback функции
function asynch() {
    console.log('Request data...');

    setTimeout(() => {
        console.log('Preparing data...');

        const backendData = {
            server: aws,
            port: 2323,
            status: 'working',
        };

        setTimeout(() => {
            backendData.modified = true
            console.log('Data recived', backendData)
        }, 2000);
    }, 2000)
}


// Создаем промис
// Промис принимает два атрибута = resolve и reject
// два этих параметра являются также функциями.
// Resolve вызывается тогда когда успешено закончена ассинхронная операция

const p = new Promise((resolve, reject) => {
    console.log('Request data...');
    setTimeout(() =>{
        console.log('Preparing data...');

        const backendData = {
            server: 'aws',
            port: 2323,
            status: 'working',
        };
        resolve(backendData) // чтобы получить доступ к объекту из then, передадим ее в качестве аргумента
    }, 2000);
})

p.then(data => {
    /*let p2 = */return  new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data) // reject for error (69)
            // console.log('Data recived', backendData)
        }, 2000);
    })
    /*
Зачем нужны промисы если получилась точно такая же вложенность?
Однако, внутри метода then вместо того, чтобы создавать еще один промис и обращаться  новому промису
мы можем упростить эту ситуацию, и вместо того чтобы создавать новую переменную мы можем возвращать из
этого then новый Promise
 */
    // p2.then(clientData => {
    //     console.log('Data recived', clientData)
    // })
})
    .then(clientData => {
    console.log('Data recived', clientData)
})
    .catch(err => console.error('Error. Catch.', err)) // если произошла какая то ошибка
// (например 404, 500 и тд.) можно воспользоваться методом catch.
// Существует еще один метод - finally. Он будет вызываться в люом случае.
    .finally(() => console.log('finally'))

/*
В этом и заключается удобство промисов, у нас всего лишь один уровень вложенности.
Мы не создвем callback внутри callback, мы все время находимся в одном методе then.
Причем читается это гораздо лучше.
*/

// ****************************************************

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}
//
// sleep(2000).then(() => console.log('After 2 sec'))
// sleep(3000).then(() => console.log('After 3 sec'))

// Еще вызвать можно так:

// all - ждет выполнения всех промисов
Promise.all([sleep(2000), sleep(5000)]).then(() => {
        console.log('All promises')
    })

// race - срабатывает после первого сработавшего промиса
Promise.race([sleep(2000), sleep(5000)]).then(() => {
        console.log('Race promises')
    })


