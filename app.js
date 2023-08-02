


const a=+prompt("enter firs:")
const o=prompt("enter operator:")
const b=+prompt("enter second:")

switch (o)  {
    case "+":
        console.log (a+b);
        break;
        case "-":
            console.log (a-b);
            break;
            case "*":
            console.log (a*b);
        break;
        case "/":
            console.log (a/b);
            break;
            default:
                console.log ("wrong");
}