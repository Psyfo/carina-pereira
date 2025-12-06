// Generic loading component
import { Spinner } from '@/components/ui/spinner';

export default function Loading() {
  return (
    <div className='flex justify-center items-center min-h-[70vh]'>
      <Spinner className='w-12 h-12' />
    </div>
  );
}
