let sex = "männlich"
let weight = 90
let height = 190
let age = 28
let PAS = 3

let result = (sex, weight, height, PAS) => {
    let BMR = null
    switch (sex){
        case "männlich":
            BMR = 66.47 + (13.7 * weight) + (5*height) -(6.8*age)
        case "weiblich":
            BMR = 66.47 + (9.6 * weight) + (1.8*height) -(4.7*age)
    }
    switch (PAS){
        case 1 :
            return BMR * 1.2
        case 2 :
            return BMR * 1.375
        case 3 :
            return BMR * 1.55
        case 4 :
            return BMR * 1.725
        case 5 :
            return BMR * 1.9
    }
}

console.log(result(sex, weight, height,PAS))