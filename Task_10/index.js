// Патерн Flyweight.
// Розробити систему обліку та звітів процесів розмноження колонії бактерій.

class VisibilityAndReportingSystem {
    constructor(name) {
        this.name = name
    }
}

class BacterialColonies {
    constructor(name) {
        this.bacterium = {};
    }
    create(name) {
        let bacterium = this.bacterium[name];
        if (bacterium) return bacterium;
        this.bacterium[name] = new VisibilityAndReportingSystem(name);
        return this.bacterium[name];
    }
}

export {
    BacterialColonies
};
