import dynamic from "next/dynamic";

const DynamicTest = dynamic(() => import("../components/DynamicTest").then((mod) => mod.DynamicTest), {
  loading: () => <div>Loading</div>,
});

export default function Page() {
  return (
    <main>
      <DynamicTest />
    </main>
  );
}
