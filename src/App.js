import { useState } from "react";
import Toast from "./components/Toast";

function App() {
  const [toastMessages, setToastMessages] = useState([]);
  const [delay, setDelay] = useState(0);
  const [timers, setTimers] = useState([]);

  const closeHandler = (_toast) => {
    setToastMessages((prev) => prev.filter((toast) => toast.id !== _toast.id));
    setDelay((prevDelay) => prevDelay - _toast.duration);
    setTimers((timers) => {
      const clearTimer = timers?.find((timer) => timer.id === _toast.id);

      console.log(clearTimer);
      if (clearTimer) clearTimeout(clearTimer?.timer);
      return timers?.filter((timer) => timer.id !== _toast.id);
    });
  };

  const createToast = () => {
    const newToast = {
      id: Date.now(), // Unique ID
      message: `New - ${Date.now()}`,
      duration: 3000,
    };

    setToastMessages((prev) => [...prev, newToast]);
    const _delay = delay + newToast.duration;
    setDelay(_delay);
    const timer = setTimeout(() => {
      closeHandler(newToast);
    }, _delay);
    setTimers((prev) => [...prev, { id: newToast.id, timer: timer }]);
  };
  return (
    <>
      <button onClick={createToast}>Create Toast</button>
      {toastMessages?.map((msg) => (
        <Toast
          key={msg.id}
          msg={msg.message}
          onClose={() => closeHandler(msg)}
        />
      ))}
    </>
  );
}

export default App;
