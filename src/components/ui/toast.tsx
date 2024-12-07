type ToastProps = {
  title: string;
  description: string;
  variant?: "success" | "error" | "info" | "warning";
};

const Toast = ({ title, description, variant = "info" }: ToastProps) => {
  // Classes base e variantes
  const baseClasses = "flex items-start p-4 border-l-4 rounded shadow-md max-w-md";
  const variantClasses =
    variant === "success"
      ? "bg-green-100 text-green-800 border-green-400"
      : variant === "error"
      ? "bg-red-100 text-red-800 border-red-400"
      : variant === "warning"
      ? "bg-yellow-100 text-yellow-800 border-yellow-400"
      : "bg-blue-100 text-blue-800 border-blue-400"; // Default: info

  return (
    <div className={`${baseClasses} ${variantClasses}`}>
      <div className="flex flex-col">
        <strong className="text-lg font-semibold">{title}</strong>
        <p className="text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}

export { Toast };
