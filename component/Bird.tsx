import Matter, { Engine, World } from "matter-js";

const Bird = (world: any, color: any, pos: any, size: any) => {
  const initialBird = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label: "Bird" }
  );
  Matter.World.add(world, initialBird);
};

export default Bird;
