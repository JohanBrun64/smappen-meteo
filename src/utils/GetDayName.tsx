export const getDayName = (dayPositon: number): string => {

    switch(dayPositon) {
        case 0:
            return "Dimanche"
        case 1:
            return "Lundi"
        case 2:
            return "Mardi"
        case 3:
            return "Mercredi"
        case 4:
            return "Jeudi"
        case 5:
            return "Vendredi"
        case 6: 
            return "Samedi"
        default:
            return "not a day"
    }
}