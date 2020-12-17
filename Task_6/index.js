// Патерн Observer.
// Розробити систему Поштове відділення.
// З видавництв в поштове відділення надходять газети і журнали.
// Поштове відділення відправляє отримані друковані видання передплатникам

class PostOfficeSystem {
    constructor() {
        new Publisher()
        new PostOffice()
    }


    sendSub() {
        new Subscribers().happySub()
    }
}

class Publisher{ //Издательство
    constructor() {
        this.newspapers = ['USA Today','The Wall Street Journal','The New York Times','Los Angeles Times']
        this.magazines = ['T-Magazine','Cosmopolitan','Marie Claire','Vogue ']
    }
}

class PostOffice extends Publisher { //Почтовое отделение
    constructor() {
        super()
    }
}

class Subscribers extends PostOffice{
    constructor() {
        super();
    }

    happySub() {
        const newsP = this.newspapers.map(i => i).join()
        const magaz = this.magazines.map(i => i).join()
        console.log('Sub: 🥰')
        console.log('Newspapers: ',newsP)
        console.log( 'Magazines:', magaz)
    }
}

const init = new PostOfficeSystem()
init.sendSub()
