class CountDown {
  constructor(expiredDate, onRender, onComplate) {
    this.setExpiredDate(expiredDate);
    this.onRender = onRender;
    this.onComplate = onComplate;
  }

  setExpiredDate(expiredDate) {
    const currentTime = new Date().getTime();
    this.timeRemaining = expiredDate.getTime() - currentTime;
    this.timeRemaining > 0 ? this.start() : this.complate();
  }

  complate() {
    if (typeof this.onComplate === "function") {
      onComplate();
    }
  }

  getTime() {
    return {
      days: Math.floor(this.timeRemaining / 1000 / 60 / 60 / 24),
      hours: Math.floor(this.timeRemaining / 1000 / 60 / 60) % 24,
      minutes: Math.floor(this.timeRemaining / 1000 / 60) % 60,
      seconds: Math.floor(this.timeRemaining / 1000) % 60,
    };
  }

  update() {
    if (typeof this.onRender === "function") {
      this.onRender(this.getTime());
    }
  }

  start() {
    // update the countdown
    this.update();

    //  setup a timer
    const intervalId = setInterval(() => {
      // update the timer
      this.timeRemaining -= 1000;

      if (this.timeRemaining < 0) {
        // call the callback
        complete();

        // clear the interval if expired
        clearInterval(intervalId);
      } else {
        this.update();
      }
    }, 1000);
  }
}
