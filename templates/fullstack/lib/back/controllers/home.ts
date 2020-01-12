import { Request } from "express";
import { createActionResult } from ".";

export default class {
  index(state, req: Request, res) {
    return createActionResult({
      data: {
        label: "hello " + (req.query["name"] || "world"),
        color: req.query["color"] || "blue"
      }
    });
  }

  redirect(state, req, res) {
    return createActionResult({
      redirect: {
        url: "https://google.ch"
      }
    });
  }

  postIndex(state, req: Request) {
    return createActionResult({
      data: {
        postLabel: "you sent this with a form POST??? " + req.body.name
      }
    });
  }
}
