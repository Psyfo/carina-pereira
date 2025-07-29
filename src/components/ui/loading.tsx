// app/(admin)/dashboard/loading.tsx
import { Spinner } from '@/components/ui/spinner';

export default function Loading() {
  return (
    <div className='flex items-center justify-center min-h-[70vh]'>
      <Spinner className='h-12 w-12' />
    </div>
  );
}
