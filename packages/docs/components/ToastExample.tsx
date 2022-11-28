import { toast } from "@bedu-tmp/toast/src";
const ToastBasic = () => {
  return (
    <div className="mt-5">
      <button
        className="px-2 py-3 bg-success-300 text-white rounded font-bold font-montserrat"
        onClick={() => toast("Success are to notify the user about a process that already happens well done.", {
          variant: "success"
        })}>
        Success toast
      </button>
    </div>
  );
}

const ToastPosition = () => {
  return (
    <div className="mt-5 grid grid-cols-2 gap-6">
      <button
        className="px-2 py-3 bg-success-300 text-white rounded font-bold font-montserrat"
        onClick={() => toast("Success are to notify the user about a process that already happens well done.", {
          variant: "success",
          position: "top-center"
        })}>
        Success top-center
      </button>
      <button
        className="px-2 py-3 bg-success-300 text-white rounded font-bold font-montserrat"
        onClick={() => toast("Success are to notify the user about a process that already happens well done.", {
          variant: "success",
          position: "top-right"
        })}>
        Success top-right
      </button>
      <button
        className="px-2 py-3 bg-success-300 text-white rounded font-bold font-montserrat"
        onClick={() => toast("Success are to notify the user about a process that already happens well done.", {
          variant: "success",
          position: "top-left"
        })}>
        Success top-left
      </button>
      <button
        className="px-2 py-3 bg-success-300 text-white rounded font-bold font-montserrat"
        onClick={() => toast("Success are to notify the user about a process that already happens well done.", {
          variant: "success",
          position: "bottom-center"
        })}>
        Success bottom-center
      </button>
      <button
        className="px-2 py-3 bg-success-300 text-white rounded font-bold font-montserrat"
        onClick={() => toast("Success are to notify the user about a process that already happens well done.", {
          variant: "success",
          position: "bottom-right"
        })}>
        Success bottom-right
      </button>
      <button
        className="px-2 py-3 bg-success-300 text-white rounded font-bold font-montserrat"
        onClick={() => toast("Success are to notify the user about a process that already happens well done.", {
          variant: "success",
          position: "bottom-left"
        })}>
        Success bottom-left
      </button>
    </div>
  );
}

const ToastVariant = () => {
  return (
    <div className="mt-5 grid grid-cols-2 gap-6">
      <button
        className="px-2 py-3 bg-success-300 text-white rounded font-bold font-montserrat"
        onClick={() => toast("Success are to notify the user about a process that already happens well done.", {
          variant: "success",
          position: "top-center"
        })}>
        Success
      </button>
      <button
        className="px-2 py-3 bg-warning-300 text-white rounded font-bold font-montserrat"
        onClick={() => toast("Success are to notify the user about a process that already happens well done.", {
          variant: "warning",
          position: "top-center"
        })}>
        Warning
      </button>
      <button
        className="px-2 py-3 bg-error-300 text-white rounded font-bold font-montserrat"
        onClick={() => toast("Success are to notify the user about a process that already happens well done.", {
          variant: "error",
          position: "top-center"
        })}>
        Error
      </button>
      <button
        className="px-2 py-3 bg-info-300 text-white rounded font-bold font-montserrat"
        onClick={() => toast("Success are to notify the user about a process that already happens well done.", {
          variant: "info",
          position: "top-center"
        })}>
        Info
      </button>
    </div>
  );
}

export {
  ToastBasic,
  ToastPosition,
  ToastVariant
}