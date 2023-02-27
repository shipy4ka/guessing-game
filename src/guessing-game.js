class GuessingGame {
    constructor() {
        
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        const sumOfNum = this.min + this.max;
        this.midNum = Math.ceil(sumOfNum / 2);
		return this.midNum;
    }

    lower() {
        this.max = this.guess();
    }

    greater() {
        this.min = this.guess();
    }
}

module.exports = GuessingGame;
