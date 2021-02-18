import { Controller } from "stimulus"

export default class HelloController extends Controller {
  static targets = [ "heading" ]

  connect() {
    this.headingTarget.textContent = "Hello Webpack with Stimulus!"
  }
}
