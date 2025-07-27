'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError('Invalid credentials');
    } else {
      router.push('/admin/dashboard');
    }
  }

  return (
    <Card className='w-full max-w-md shadow-md'>
      <CardContent className='p-6 space-y-6'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold text-gray-800'>Admin Login</h2>
          <p className='text-sm text-gray-500'>Use your credentials</p>
        </div>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
            />
          </div>
          {error && <p className='text-sm text-red-500'>{error}</p>}
          <Button type='submit' className='w-full'>
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
