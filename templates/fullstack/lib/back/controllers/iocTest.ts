import { createBlueprint } from "wald";

export default createBlueprint({
  create: () => ({
    index() {
      return {
        label: "ioc success",
        color: "pink"
      };
    }
  })
});
