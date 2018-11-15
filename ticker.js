function Ticker() {
  this._i = 0;
  this.tick = () => {
    console.log(this._i++);
  }
}

var ticker = new Ticker();
setInterval(ticker.tick, 1000);