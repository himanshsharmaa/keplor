import LoginForm from '@/components/auth/LoginForm';

export const metadata = {
  title: 'Sign In - Keplor AI Platform',
  description: 'Sign in to your Keplor account and access your AI tools and projects.',
};

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <LoginForm />
    </main>
  );
}