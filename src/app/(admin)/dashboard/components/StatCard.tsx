import { Card, CardContent } from '@/components/ui/card';

export function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <Card>
      <CardContent className='p-6'>
        <p className='text-sm text-gray-500'>{label}</p>
        <p className='text-2xl font-bold text-gray-800'>{value}</p>
      </CardContent>
    </Card>
  );
}
