export default function iff(validator, func, alter?) {
    // console.log(validator, func, alter);
    return function () {
        // console.log(arguments); 
        return validator.apply(null, arguments)
            ? func.apply(null, arguments)
            : alter && alter.apply(null, arguments)
    }
}
