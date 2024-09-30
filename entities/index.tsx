import Matter, { Engine, World } from "matter-js";

export default () => {
  let engine = Engine.create({ enableSleeping: false });
  let world = engine.world;

  return { engine, world };
};
