import { toast } from "react-toastify";

class Toast {
  success = (message) => {
    toast.success(message);
  };
  error = (message) => {
    toast.error(message);
  };
}

const toastService = new Toast();
export default toastService;
