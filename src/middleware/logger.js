export default store => next => action => {
    //code goes here

    console.log('Logger Middleware: ', action);
    return next(action);
}

// Same as above
// export default function(store){
//     return function(next){
//         return function (action){
//             //code goes here
//         }
//     }
// }