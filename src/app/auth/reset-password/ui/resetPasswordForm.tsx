import Link from "next/link";

export const ResetPasswordForm = () => {


  return (
    <form className="flex flex-col">
      <label htmlFor="email">Correo electrónico</label>
      <input
        className="px-5 py-3 border bg-gray-200 rounded mb-5"
        type="email"
        name="email"
        placeholder="user@gmail.com"
      />

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/new-account" className="btn-primary text-center mb-5">
        <button>Enviar correo electrónico</button>
      </Link>

      <Link href="/auth/login" className="btn-secondary text-center">
        Volver a Login
      </Link>
    </form>
  );
};
