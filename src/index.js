import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import "./main.css"

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/)
application.load(definitionsFromContext(context))


