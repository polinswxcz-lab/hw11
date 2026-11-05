
// let drink = Number(prompt("Введіть номер напою: 1 — Кава, 2 — Чай, 3 — Сік"));
// let money = Number(prompt("Введіть кількість грошей:"));
// let price;

// switch (drink) {
//     case 1:
//         price = 30;
//         break;
//     case 2:
//         price = 20;
//         break;
//     case 3:
//         price = 25;
//         break;
//     default:
//         console.log("Помилка: такого напою немає");
//         price = 0;
// }

// if (price > 0) {
//     if (money >= price) {
//         console.log("Решта:", money - price, "грн");
//         console.log("Напій готується");
//     } else {
//         console.log("Недостатньо коштів");
//     }
// }



// let age = Number(prompt("Введіть свій вік:"));

// if (age < 0 || age > 120) {
//     console.log("Помилка: нереальний вік");
// } else {
//     let result = age >= 16 ? "Доступ дозволено" : "Доступ заборонено";
//     console.log(result);
// }



let grade = prompt("Введіть оцінку (A, B, C, D, F):").toUpperCase();

switch (grade) {
    case "A":
        console.log("Відмінно");
        break;
    case "B":
    case "C":
        console.log("Добре");
        break;
    case "D":
        console.log("Задовільно");
        break;
    case "F":
        console.log("Незадовільно");
        break;
    default:
        console.log("Помилка: неправильна оцінка");
}

if (["A", "B", "C", "D", "F"].includes(grade)) {
    let scholarship = grade !== "F"
        ? "Призначено стипендію"
        : "Стипендія відсутня";

    console.log(scholarship);
}
