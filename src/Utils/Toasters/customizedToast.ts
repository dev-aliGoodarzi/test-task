// Toasters
import { toast } from "react-toastify";
// Toasters

export const customizedToast = (
  msg: string,
  type?: "info" | "success" | "warning" | "error" | "default"
) => {
  toast(msg, {
    type: type ? type : "default",
    style: {
      background: "rgba(0 ,0,0, 0.5)",
      borderRadius: "8px",
      textAlign: "center",
      color: "#fff",
    },
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    position: "top-center",
    hideProgressBar: true,
  });
};
