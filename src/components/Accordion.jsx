"use client";
import { useState } from "react";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="bg-slate-200 p-24  mr-auto w-1/2 flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Frequently Asked Questions</h2>
      <Panel title="Which colors are available?" isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatibus placeat modi autem ut molestiae est, doloribus, alias non porro eligendi rerum quibusdam explicabo ullam totam suscipit, dicta magnam similique.
      </Panel>
      <Panel title="Why chose this product?" isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odit.
      </Panel>
      <Panel title="How many in what are these?" isActive={activeIndex === 2} onShow={() => setActiveIndex(2)}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odit.
      </Panel>
      <Panel title="Why are they like that and this?" isActive={activeIndex === 3} onShow={() => setActiveIndex(3)}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odit.
      </Panel>
      <Panel title="Are there any of this type?" isActive={activeIndex === 4} onShow={() => setActiveIndex(4)}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odit.
      </Panel>
      <Panel title="How many is the amount of this?" isActive={activeIndex === 5} onShow={() => setActiveIndex(5)}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, odit.
      </Panel>
    </section>
  );
}

function Panel({ title, children, isActive, onShow }) {
  return (
    <section onClick={onShow} className="panel bg-slate-300 p-5">
      <h3 className="font-semibold">{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
}
