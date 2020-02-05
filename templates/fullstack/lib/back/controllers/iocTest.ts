import { createBlueprint } from "wald";
import { createActionResult } from ".";

export default createBlueprint({
  create: () => ({
    index() {
      return createActionResult({
        data: {
          label: "ioc success",
          color: "pink"
        }
      });
    }
  })
});
