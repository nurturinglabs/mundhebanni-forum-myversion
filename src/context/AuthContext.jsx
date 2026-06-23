import React from "react";
import { isSupabaseConfigured, supabase } from "../lib/supabase";

const AuthContext = React.createContext({
  session: null,
  user: null,
  profile: null,
  loading: true,
  profileLoading: false,
  configured: false
});

export function AuthProvider({ children }) {
  const [session, setSession] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [profile, setProfile] = React.useState(null);
  const [profileLoading, setProfileLoading] = React.useState(false);

  React.useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      setLoading(false);
      return undefined;
    }

    let mounted = true;
    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setSession(data.session ?? null);
      setLoading(false);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setLoading(false);
    });

    return () => {
      mounted = false;
      authListener.subscription.unsubscribe();
    };
  }, []);

  const loadProfile = React.useCallback(async (userId) => {
    if (!supabase || !userId) {
      setProfile(null);
      setProfileLoading(false);
      return null;
    }

    setProfileLoading(true);
    let result = await supabase
      .from("profiles")
      .select("id, username, display_name, role, bio, avatar_url, xp_points, website_url, linkedin_url, created_at, onboarding_completed, cities ( name )")
      .eq("id", userId)
      .single();

    if (result.error && ["PGRST200", "PGRST201"].includes(result.error.code)) {
      result = await supabase
        .from("profiles")
        .select("id, username, display_name, role, bio, avatar_url, xp_points, website_url, linkedin_url, created_at, onboarding_completed")
        .eq("id", userId)
        .single();
    }

    setProfile(result.data || null);
    setProfileLoading(false);
    return result.data || null;
  }, []);

  React.useEffect(() => {
    if (session?.user?.id) loadProfile(session.user.id);
    else {
      setProfile(null);
      setProfileLoading(false);
    }
  }, [session?.user?.id, loadProfile]);

  const signOut = React.useCallback(async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
    setProfile(null);
  }, []);

  const value = React.useMemo(() => ({
    session,
    user: session?.user ?? null,
    profile,
    loading,
    profileLoading,
    refreshProfile: () => loadProfile(session?.user?.id),
    signOut,
    configured: isSupabaseConfigured
  }), [session, profile, loading, profileLoading, loadProfile, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}
