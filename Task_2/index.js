// Патерн Abstract Factory.
// Розробити систему Кінопрокат.

// Користувач може обрати певну кінострічку,
// при замовленні кінострічки вказується мова звукової доріжки, який збігається з мовою файлу субтитрів.

// Система повинна поставляти фільм з необхідними характеристиками, причому при зміні мови звукової доріжки
// повинен змінюватися і мову файлу субтитрів і навпаки.

class FilmDistribution {
    constructor() {
        //Date from server
        this.movies = [
            {
                starWars: 'Star Wars',
                tongue: 'EN'
            },
            {
                bigJoe: 'Big Joe',
                tongue: 'RU'
            },
            {
                Godfather: 'Godfather',
                tongue: 'DE'
            },
        ]
    }

    choiceFilm(movie, tongue) {
        //Output date
        let mov = movie
        let ton = tongue
        //Filter
        const filter = this.movies.filter(i => i[0] === `${movie}` && i === `${tongue}`)
        console.log('Mov:', mov, 'Tong: ', ton)
    }
}

const movie = new FilmDistribution()
movie.choiceFilm('Джон','EN')
