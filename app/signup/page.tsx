import SignupForm from '@/components/auth/SignupForm';

export const metadata = {
  title: 'Sign Up - Keplor AI Platform',
  description: 'Create your Keplor account and start building with AI today.',
};

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <SignupForm />
    </main>
  );
}