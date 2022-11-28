import { Logotype } from "@bedu-tmp/betomic/src";

const LogotypeExample = () => {
  return (
    <>
      <div className="grid gap-5 py-4">
        <div className="bg-surface-50 flex items-center justify-center py-8 rounded-md">
          <Logotype className="text-surface-950" />
        </div>
        <div className="bg-surface-700 flex items-center justify-center py-8 rounded-md">
          <Logotype className="text-white" />
        </div>
      </div>
      <div className="flex justify-between space-x-5">
        <div className="w-full bg-surface-50 flex items-center justify-center p-10 rounded-md">
          <Logotype.Isotype className="text-surface-950" />
        </div>
        <div className="w-full bg-surface-700 flex items-center justify-center p-10 rounded-md">
          <Logotype.Isotype className="text-white" />
        </div>
      </div>
    </>
  );
}

export default LogotypeExample;
