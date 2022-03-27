export function Factorial({counter}) {

    function factoriall(counter) {
        if (counter < 0) return 'opps';
        if (counter == 0) return 1;
        return counter * factoriall(counter - 1)
    }

    return (
        <div>
            <h1>Факториал числа {counter}  = {factoriall(counter)} </h1>
        </div>
    )
}