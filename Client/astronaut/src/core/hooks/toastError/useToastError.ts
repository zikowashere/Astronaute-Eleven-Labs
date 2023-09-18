import { toast } from "react-toastify";

const useToastError = (message: string) => {
  const showToastMessage = () => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return { showToastMessage };
};
export default useToastError;
