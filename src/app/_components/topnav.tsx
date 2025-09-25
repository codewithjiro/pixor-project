import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Github, KeyRound } from "lucide-react";

export function TopNav() {
  return (
    <nav className="flex items-center justify-between border-b border-white/10 p-4">
      <div className="text-lg font-semibold justify-between flex"><Github />Pixor</div>
        <div className="font-semibold text-lg text-center">
          <SignedOut>
            <SignInButton mode="modal">
                <button className="flex items-center gap-2">
                    <KeyRound size={16} /> Log In
                </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton showName />
          </SignedIn>
        </div>
    </nav>
  );
}
