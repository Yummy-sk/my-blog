'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/button';

export default function Back() {
  const router = useRouter();

  return (
    <Button.Back
      className="lg:block flex items-center justify-center"
      ariaLabel="Go back to article"
      onClick={() => router.back()}
    />
  );
}
