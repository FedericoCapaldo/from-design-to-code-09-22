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
    console.log(this.inputTarget.value);
  }
}
