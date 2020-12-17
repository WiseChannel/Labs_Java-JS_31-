// Патерн Chain of responsibility.
// Проходження платежу через банківську систему супроводжується цілою низкою дій:
// фіксація, контроль, такі що знімають відсоток банку та інші вирахування і дії.
// Побудувати ланцюжок для різного виду платежів (звичайних, пільгових, державних,
// внутрішньобанківських) відповідно до предметної області і розробити конструкцію моделі системи.


class BankingSystem {

    constructor() {
        this.products = [];
    }

    addProduct(p) {
        this.products.push(p);
    };
}

class Discount {

    calc(products) {
        let ndiscount = new NumberDiscount();
        let pdiscount = new PriceDiscount();
        let none = new NoneDiscount();
        ndiscount.setNext(pdiscount);
        pdiscount.setNext(none);
        return ndiscount.exec(products);
    };
}

class NumberDiscount {

    constructor() {
        this.next = null;
    }

    setNext(fn) {
        this.next = fn;
    };

    exec(products) {
        let result = 0;
        if (products.length > 3)
            result = 0.05;

        return result + this.next.exec(products);
    };
}

class PriceDiscount {

    constructor() {
        this.next = null;
    }

    setNext(fn) {
        this.next = fn;
    };

    exec(products) {
        let result = 0;
        let total = products.reduce((a, b) => a + b);

        if (total >= 500)
            result = 0.1;

        return result + this.next.exec(products);
    };
}

class NoneDiscount {
    exec() {
        return 0;
    };
}

export {
    BankingSystem,
    Discount
};
