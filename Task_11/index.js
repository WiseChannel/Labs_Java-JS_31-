// Існує модель системи Рецепт.
// Модель дозволяє в незмінному вигляді зберігати призначення лікаря і термін дії рецепта.
// Написати код додатка, що дозволяє продовжувати термін дії вже існуючого рецепта.
// Виберіть відповідний патерн для реалізації цього завдання

class DrugAccountingSystem {
    constructor() {
        this.docAppointment = {
            date: Date.now(),
            nameDoc: 'Влади́мир Влади́мирович Пу́тин',
            drugName: 'Novichok',
            prolongation: false
        }
    }

    status() {
        console.log(this.docAppointment)
    }

    extendThePeriod() {
        this.docAppointment.date = Date.now()
        this.docAppointment.prolongation = true
        console.log(this.docAppointment)
    }
}

const init = new DrugAccountingSystem()
init.extendThePeriod()
