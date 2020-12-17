// Патерн State.
// Замовлення на отримання гранту для навчання може перебувати в декількох станах:
// створено, розглядається, відкладено, відхилено, підтверджено, відкликано і т. д. Визначити логіку зміни станів і розробити конструкцію моделі системи.

//EducationGrant
class EducationGrant {
    constructor(name, nextStatus) {
        this.name = name;
        this.nextStatus = nextStatus;
    }

    next() {
        return new this.nextStatus();
    }
}

class WaitingForCreated extends EducationGrant {
    constructor() {
        super('waitingForCreated', Considered);
    }
}

class Considered extends EducationGrant {
    constructor() {
        super('Considered', Postponed);
    }
}

class Postponed extends EducationGrant {
    constructor() {
        super('Postponed', Rejected);
    }
}

class Rejected extends EducationGrant {
    constructor() {
        super('Rejected', Confirmed);
    }
}

class Confirmed extends EducationGrant {
    constructor() {
        super('Confirmed', Rejected);
    }
}

class InitEducationGrant {
    constructor() {
        this.state = new WaitingForCreated();
    }

    nextState() {
        this.state = this.state.next();
    };
}

