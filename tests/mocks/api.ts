import MockAdapter from "axios-mock-adapter";
import instance from "../../src/utils/api";

const mock = new MockAdapter(instance, { onNoMatch: "throwException" });

export { mock };
