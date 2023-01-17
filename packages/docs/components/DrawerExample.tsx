import { useState } from "react";
import { Drawer } from "@exponentialeducation/betomic/src";

const BasicDrawer = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="mt-5">
      <button
        className="rounded bg-primary-500 text-white px-2 py-3"
        onClick={() => setOpen(true)}>Default drawer</button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        >
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt laboriosam aspernatur velit explicabo adipisci obcaecati porro, qui laudantium facilis eos. Eligendi reiciendis alias deleniti ex corporis quisquam dolor dolorem odit.</p>
      </Drawer>
    </div>
  );
}

const PositionsDrawer = () => {
  const [right, setRight] = useState<boolean>(false);
  const [left, setLeft] = useState<boolean>(false);
  const [bottom, setBottom] = useState<boolean>(false);
  return (
    <div className="mt-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button
          className="rounded bg-primary-500 text-white px-2 py-3"
          onClick={() => setRight(true)}>Right drawer</button>
          <button
          className="rounded bg-primary-500 text-white px-2 py-3"
          onClick={() => setLeft(true)}>Left drawer</button>
          <button
          className="rounded bg-primary-500 text-white px-2 py-3"
          onClick={() => setBottom(true)}>Bottom drawer</button>
      </div>
      <Drawer
        open={right}
        position="right"
        onClose={() => setRight(false)}
        >
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt laboriosam aspernatur velit explicabo adipisci obcaecati porro, qui laudantium facilis eos. Eligendi reiciendis alias deleniti ex corporis quisquam dolor dolorem odit.</p>
      </Drawer>
      <Drawer
        open={left}
        position="left"
        onClose={() => setLeft(false)}
        >
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt laboriosam aspernatur velit explicabo adipisci obcaecati porro, qui laudantium facilis eos. Eligendi reiciendis alias deleniti ex corporis quisquam dolor dolorem odit.</p>
      </Drawer>
      <Drawer
        open={bottom}
        position="bottom"
        onClose={() => setBottom(false)}
        >
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt laboriosam aspernatur velit explicabo adipisci obcaecati porro, qui laudantium facilis eos. Eligendi reiciendis alias deleniti ex corporis quisquam dolor dolorem odit.</p>
      </Drawer>
    </div>
  );
}

export {
  BasicDrawer,
  PositionsDrawer
}