// Патерн Strategy.
// Розробити модель ігрової системи.
// Передбачити наявність фентезійних персонажів: орки, тролі, пегаси, ельфи, вампіри, гарпії і ін.
// Врахувати, що деякі персонажі ходять, інші літають, треті і ходять і літають.
// Літати також може група персонажів за допомогою магії.

class GameSystem {

    Fly(name) {
        return new Flying().FlyingM(name)
    }

    NotFly(name) {
        return new NotFlying().NotFlyingP(name)
    }

}

class NotFlying {
    constructor() {
        this.namePers = ['Троль','Орк']
    }


    NotFlyingP(name) {
        const findP = this.namePers.filter(i => i === name).join()

        if (findP.length === 0) {
            console.log('Таких персонажей нет')
        } else {
            console.log(findP, 'уже идет')
        }
    }

}

class Flying {
    constructor() {
        this.namePers = ['Гарпии','Вампир','Ельф','Пегаси']
    }

    FlyingM(name) {
        const findP = this.namePers.filter(i => i === name).join()

        if (findP.length === 0) {
            console.log('Таких персонажей нет')
        } else {
            console.log(findP, 'уже летит')
        }
    }
}

const init = new GameSystem()
init.NotFly('Троль')
init.Fly('Вампир')


