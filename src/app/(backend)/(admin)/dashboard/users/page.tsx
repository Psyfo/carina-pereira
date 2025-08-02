'use client';

import React, { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { User } from '@/types/User';

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [newUser, setNewUser] = useState({ email: '', password: '' });
  const { toast } = useToast();

  // Fetch users from API
  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      const res = await fetch('/api/users');
      const data = await res.json();
      setUsers(data);
      setLoading(false);
      console.log('Fetched users: ', data);
    }
    fetchUsers();
  }, []);

  // Add user handler
  async function handleAddUser(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    });
    if (res.ok) {
      const created = await res.json();
      setUsers((prev) => [...prev, created]);
      toast({
        title: 'User created',
        description: `User ${created.email} added.`,
      });
      setNewUser({ email: '', password: '' });
      setOpen(false);
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to create user.',
      });
    }
  }

  // Delete user handler
  async function handleDeleteUser(email: string) {
    const res = await fetch(`/api/users/${email}`, { method: 'DELETE' });
    if (res.ok) {
      setUsers((prev) => prev.filter((u) => u.email !== email));
      toast({ title: 'User deleted', description: `User ${email} removed.` });
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to delete user.',
      });
    }
  }

  return (
    <main className='p-6'>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between'>
          <CardTitle>Users Admin</CardTitle>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button>Add User</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New User</DialogTitle>
                <DialogDescription>Enter user details below.</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleAddUser} className='space-y-4'>
                <Input
                  placeholder='Email'
                  type='email'
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                  required
                />
                <Input
                  placeholder='Password'
                  type='password'
                  value={newUser.password}
                  onChange={(e) =>
                    setNewUser({ ...newUser, password: e.target.value })
                  }
                  required
                />
                <DialogFooter>
                  <Button type='submit'>Create</Button>
                  <DialogClose asChild>
                    <Button type='button' variant='outline'>
                      Cancel
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className='text-center py-8'>Loading users...</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Email</TableHead>
                  <TableHead>Password</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.email}>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <span className='text-gray-400'>••••••••</span>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant='destructive'
                        size='sm'
                        onClick={() => handleDeleteUser(user.email)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
