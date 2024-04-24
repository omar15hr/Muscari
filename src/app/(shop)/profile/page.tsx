import { auth } from "@/auth.config";
import { Title } from "@/components";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    // redirect('/auth/login?returnTo=/perfil');
    redirect("/");
  }

  return (
    <div>
      <Title title="Perfil" className="mx-5" />

      <div className="mx-auto right-0 mt-2 w-60 mb-10">
        <div className="bg-white rounded overflow-hidden shadow-lg">
          <div className="text-center p-6 bg-gray-800 border-b">
            
            <p className="pt-2 text-lg font-semibold text-gray-50">{session.user.name}</p>
            <p className="text-sm text-gray-100">{session.user.email}</p>
            <div className="mt-5">
              <a
                className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
              >
                Gestionar cuenta
              </a>
            </div>
          </div>
          <div className="border-b">
            
          </div>

        </div>
      </div>
    </div>
  );
}
