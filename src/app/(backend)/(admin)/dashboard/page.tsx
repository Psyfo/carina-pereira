import { BarChart2, Settings, UserPlus, Users } from 'lucide-react';
import { Metadata } from 'next';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata: Metadata = {
  title: 'Carina Pereira | Admin Dashboard',
  description: 'Welcome to the admin page.',
};

export default function AdminPage() {
  return (
    <main className='p-6 bg-gray-50 min-h-screen'>
      <h1 className='text-3xl font-bold mb-6'>Admin Dashboard</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
        <Card>
          <CardHeader className='flex flex-row items-center gap-3'>
            <BarChart2 className='text-blue-500' />
            <CardTitle>Site Visits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>12,345</div>
            <Progress value={75} className='mt-4' />
            <div className='text-xs text-gray-500 mt-2'>
              75% of monthly goal
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center gap-3'>
            <Users className='text-green-500' />
            <CardTitle>Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>1,234</div>
            <Progress value={60} className='mt-4' />
            <div className='text-xs text-gray-500 mt-2'>
              60% of monthly goal
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center gap-3'>
            <UserPlus className='text-purple-500' />
            <CardTitle>New Signups</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>89</div>
            <Progress value={45} className='mt-4' />
            <div className='text-xs text-gray-500 mt-2'>
              45% of monthly goal
            </div>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue='overview' className='w-full'>
        <TabsList>
          <TabsTrigger value='overview'>Overview</TabsTrigger>
          <TabsTrigger value='users'>Users</TabsTrigger>
          <TabsTrigger value='settings'>Settings</TabsTrigger>
        </TabsList>
        <TabsContent value='overview'>
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-gray-700'>
                Here you can see a summary of your platform’s performance.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value='users'>
          <Card>
            <CardHeader>
              <CardTitle>Users</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild variant='outline' className='mb-4'>
                <a href='/dashboard/users'>
                  <UserPlus className='mr-2 h-4 w-4' /> Go to User Management
                </a>
              </Button>
              <p className='text-gray-700'>
                Manage users, add new users, and view user details on the
                dedicated user management page.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value='settings'>
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant='outline'>
                <Settings className='mr-2 h-4 w-4' /> Edit Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
