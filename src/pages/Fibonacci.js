export function Fibonacci({counter}) {

    function fibonacci(num) {
    if (!num || num < 1) {
        return 'must be higher than 0'
    }
    const arr = []
    let pastNumber = 0; let currentNumber = 1;
    for (let i = 1; i <= num; i++) {
        const nextNumber = currentNumber + pastNumber
        arr.push(currentNumber)
        pastNumber = currentNumber
        currentNumber = nextNumber
    }
    return arr.join(', ')
    }

    return (
        <div>
            <h1>число Фибоначи {counter} = {fibonacci(counter)} </h1>
        </div>
    )
}