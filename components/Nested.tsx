import dynamic from "next/dynamic";

const DynamicTest = dynamic(() => import("../components/Test").then((mod) => mod.DynamicTest));

export const Nested = () => {
  return (
    <section>
      <DynamicTest />
    </section>
  );
};
