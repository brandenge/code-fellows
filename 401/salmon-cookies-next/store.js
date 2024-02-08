function randNumCust(min, max, i){
  return Math.floor((((max - min) * (i + 1) * 283) % 128) / 2);
}

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

class Store {
  constructor(name, minCust, maxCust, avgCookie) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookie = avgCookie;
    this.cookieSoldPerHour = this.salesPerHour();
    this.totalCookiesSold = this.calcTotalCookies();
  }

  salesPerHour() {
    let cookieSoldPerHour = {};
    for (let i = 0; i < hours.length; i++) {
      cookieSoldPerHour[hours[i]] = Math.round(randNumCust(this.minCust, this.maxCust, i) * this.avgCookie);
    }
    return cookieSoldPerHour;
  }

  calcTotalCookies() {
    let total = 0;
    for (let hour of hours) {
      total += this.cookieSoldPerHour[hour];
    }
    return total;
  }

  // render() {
  //   this.salesPerHour();
  //   let tableElem = document.getElementById('table');
  //   let tableRow = document.createElement('tr');
  //   tableElem.appendChild(tableRow);

  //   // let articleElem = document.createElement('article');
  //   // salesSection.appendChild(articleElem);
  //   let tableTh = document.createElement('th');
  //   tableTh.textContent = `${this.name}`;
  //   tableRow.appendChild(tableTh);

  //   let inc = 0;
  //   for (let i = 0; i < hours.length; i++){
  //     const tCell = document.createElement('td');
  //     if ( i === hours.length - 1) {
  //       // for ( let j = 0; j < hours.length - 1; j++) {
  //       //   inc += tableRow[j];
  //       //   console.log(tableRow[j]);
  //       // }
  //       tCell.textContent = inc;
  //       inc = 0;
  //     } else {
  //       inc += this.cookieSoldPerHour[i];
  //       tCell.textContent = this.cookieSoldPerHour[i];
  //     }
  //     tableRow.appendChild(tCell);
  //   }
}

export default Store;
