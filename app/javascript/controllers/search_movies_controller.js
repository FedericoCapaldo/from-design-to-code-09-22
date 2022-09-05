import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="search-movies"
export default class extends Controller {
  static targets = ["form", "list", "input"]

  connect() {
    console.log(this.formTarget);
    console.log(this.listTarget);
    console.log(this.inputTarget);
  }

  update() {
    const url = `${this.formTarget.action}?query=${this.inputTarget.value}`;
    fetch(url, {
      method: 'GET',
      headers: { "Accept": "text/plain"}
    })
      .then(res => res.text())
      .then((fetchedFilmsHtml) => {
        this.listTarget.outerHTML = fetchedFilmsHtml;
      })
  }
}
