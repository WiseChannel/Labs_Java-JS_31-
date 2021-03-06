// Табло на станції метро

// Розробити модель програмного забезпечення
// Табло для інформаційної служби метрополітену.
// Табло розташовані на кожній станції метро. Вони працюють під управлінням єдиного
// пункту управління (ПУ) інформаційної служби метро. Табло відображає поточний час (години, хвилини, секунди) і час,
// що минув з моменту відправлення останнього поїзда (хвилини, секунди).
// Момент прибуття і відправлення поїзда визначається за допомогою датчиків, що встановлюються на шляхах.
// Все табло метро синхронізовані, поточний час відраховується і встановлюється з центральної служби часу, що знаходиться на ПУ.
// На табло висвічується кінцева станція призначення поїзда,що прибуває.
// Ці дані містяться в розкладі руху поїздів, яке зберігається в пам'яті табло і періодично оновлюється з ПУ.
// У «рухомому рядку» табло відображається рекламна інформація.
// Пам'ять табло зберігає до 10 рекламних повідомлень. Повідомлення відображаються один за одним з невеликими паузами,
// циклічно. Зміст рекламних повідомлень надходить з ПУ.
// Додаткова функція табло – за запитом з ПУ воно пересилає дані про порушення розкладу (передчасних відправленнях
// поїздів або запізнення).
// Також потрібно створити схему бази даних для зберігання рекламних повідомлень, розкладу і відомостей про порушення розкладів.
// В завданні потрібно розробити модель ПО тільки для табло, але не для пункту управління інформаційної служби.

//not completed
class SubwayStationBoard {
    constructor() {
        this.date = {
            time: new Date(),
            info: `Прибуття в 12:30`
        }
    }

    log() {
        console.log(this.date.info)
    }
}

class MetroStationOne extends SubwayStationBoard{
    constructor() {
        super();
    }

    trainLeft() {
        const timeLeft = this.date.time
        console.log('Поезд уехал в ', timeLeft)
        setInterval(() => {
            console.log('рекламна інформація')
        }, 5000)
    }
}

class MetroStationTwo extends SubwayStationBoard{
    constructor() {
        super();
    }

    trainLeft() {
        const timeLeft = this.date.time
        console.log('Поезд уехал в ', timeLeft)
        setInterval(() => {
            console.log('рекламна інформація')
        }, 5000)
    }
}

class MetroStationThere extends SubwayStationBoard{
    constructor() {
        super();
    }

    trainLeft() {
        const timeLeft = this.date.time
        console.log('Поезд уехал в ', timeLeft)
        setInterval(() => {
            console.log('рекламна інформація')
        }, 5000)
    }
}
