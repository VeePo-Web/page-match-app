import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

export default function Auth() {
  const navigate = useNavigate();
  const { session, loading } = useAuth();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  usePageMeta({
    title: "Sign In — Parker Gawryletz",
    description: "Private sign-in for managing the Parker Gawryletz photo library.",
  });

  useEffect(() => {
    if (!loading && session) navigate("/admin/photos", { replace: true });
  }, [loading, session, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/admin/photos` },
        });
        if (error) throw error;
        if (!data.session) {
          toast.success("Check your email to confirm your account.");
          return;
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
      navigate("/admin/photos", { replace: true });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  };

  const handleGoogle = async () => {
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      toast.error("Google sign-in failed. Please try again.");
      return;
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-fitz-4 bg-background">
      <div className="w-full max-w-sm border border-lines/20 rounded-md p-fitz-6 bg-card/40">
        <p className="overline mb-fitz-3">Private Area</p>
        <h1 className="text-foreground text-2xl mb-fitz-5">
          {mode === "signin" ? "Sign in" : "Create account"}
        </h1>

        <form onSubmit={handleSubmit} className="grid gap-fitz-3">
          <label className="grid gap-1">
            <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border border-lines/30 rounded-sm px-3 py-2 text-foreground focus:outline-none focus:border-gold/50"
            />
          </label>
          <label className="grid gap-1">
            <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Password</span>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent border border-lines/30 rounded-sm px-3 py-2 text-foreground focus:outline-none focus:border-gold/50"
            />
          </label>
          <button
            type="submit"
            disabled={busy}
            className="mt-fitz-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm text-sm uppercase tracking-[0.12em] disabled:opacity-60"
          >
            {busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Sign up"}
          </button>
        </form>

        <button
          type="button"
          onClick={handleGoogle}
          className="mt-fitz-3 w-full px-6 py-3 border border-lines/30 rounded-sm text-sm uppercase tracking-[0.12em] text-foreground hover:border-gold/40 transition-colors"
        >
          Continue with Google
        </button>

        <button
          type="button"
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          className="mt-fitz-4 w-full text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          {mode === "signin" ? "Need an account? Sign up" : "Already have an account? Sign in"}
        </button>
      </div>
    </main>
  );
}
