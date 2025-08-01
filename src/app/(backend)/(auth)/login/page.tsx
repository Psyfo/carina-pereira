'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

// Simple spinner component
function Spinner() {
  return (
    <svg
      className='animate-spin h-5 w-5 text-white mx-auto'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
    >
      <circle
        className='opacity-25'
        cx='12'
        cy='12'
        r='10'
        stroke='currentColor'
        strokeWidth='4'
      ></circle>
      <path
        className='opacity-75'
        fill='currentColor'
        d='M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z'
      ></path>
    </svg>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate 2 second server/client connection delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });
    setLoading(false);

    if (res?.error) {
      toast({
        variant: 'destructive',
        title: 'Login Failed',
        description: 'Invalid email or password.',
      });
    } else {
      toast({
        title: 'Login Successful',
        description: 'Welcome back!',
      });
      router.push('/dashboard');
    }
  }

  return (
    <Card className='w-full max-w-md shadow-md'>
      <CardContent className='p-6 space-y-6'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold text-gray-800'>Admin Login</h2>
          <p className='text-sm text-gray-500'>Use your credentials</p>
        </div>
        {/* Show spinner above form when loading */}
        {loading && (
          <div className='flex justify-center my-2'>
            <Spinner />
          </div>
        )}
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <div>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <Button type='submit' className='w-full' disabled={loading}>
            {loading ? (
              <span className='flex items-center justify-center gap-2'>
                <Spinner />
                Logging in...
              </span>
            ) : (
              'Login'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
