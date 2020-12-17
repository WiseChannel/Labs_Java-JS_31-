// Патерн Factory Method. Фігури гри «тетріс».
// Реалізувати процес випадкового вибору фігури з фіксованого набору фігур.
// Передбачити появу супер-фігур із збільшеним числом клітин, ніж звичайні.

class GameTetris {
    constructor() {
        this.figurines = [
            {
                id: 1,
                figure: 'Square',
                size: 10
            },
            {
                id: 2,
                figure: 'Triangle',
                size: 7
            },
            {
                id: 3,
                figure: 'Rectangle',
                size: 12
            },
        ]
        this.randomF = []
    }

    RandomSelection() {
        //Random selection
        const randomIndex = Math.floor(Math.random() * 4);
        const mus = this.figurines[randomIndex]
        this.randomF.push(mus)
        console.log(mus)

        // Init create super figure
        setTimeout(() => {
            this.SuperFigure(mus)
        }, 1000)
    }

    SuperFigure() {
        //Find random selection and create supFigure
        const findFig = this.randomF.map(i => i.size).join()
        const superF = findFig * 2

        console.log('Create Super Figure:', superF)
    }

}

const init = new GameTetris()
init.RandomSelection()
