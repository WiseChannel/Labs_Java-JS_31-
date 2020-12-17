// Патерн Prototype.
// Існує набір статей в вікіпедії.
// Реалізувати процес роздачі статей за вимогою для зміни,
// зберігаючи вихідний варіант для можливого відновлення статті початковому вигляді.

class Article {
    constructor() {
        //Init articles
        this.articles = [
            {
                id: Date.now().toString(),
                heading: 'Staring Down Deadline, Congress Nears $900 Billion Stimulus Deal',
                art: 'The emerging compromise would provide emergency stimulus payments, ' +
                    'jobless aid and rental assistance, extending help to businesses and funding the distribution' +
                    ' of a vaccine. But more is likely to be needed.\n'
            },
            {
                id: Date.now().toString(),
                heading: 'Hospitals Discover a Surprise in Their Vaccine Deliveries: Extra Doses',
                art: 'Pharmacists have found that they can squeeze an additional dose from some' +
                    ' of the glass vials that were supposed to contain five doses of the Pfizer vaccine.\n'
            },
            {
                id: Date.now().toString(),
                heading: 'Nor’easter Live Updates: Messy Snowstorm Moves Up the East Coast',
                art: 'At a critical moment in the pandemic, a major winter storm is bringing heavy snow and freezing rain from the Mid-Atlantic to the Northeast'
            },
        ]
    }

    IssuOfAnArticle(art) {
        //Find article
        const findAt = this.articles.filter(i => i.heading === `${art}`)
        //Save article after find
        const mus = []
        mus.push(findAt)
        //Date output
        console.log(mus)
    }

}

const init = new Article()
init.IssuOfAnArticle('Staring Down Deadline, Congress Nears $900 Billion Stimulus Deal') //Data entered by the user
