'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

import {
    Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator
} from '@/components/ui/breadcrumb';

export function AdminBreadcrumbs() {
  const pathname = usePathname();
  const segments = pathname
    .replace(/^\/+|\/+$/g, '')
    .split('/')
    .filter(Boolean)
    .slice(1);

  let path = '';
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href='/dashboard'>Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
        {segments.map((segment, idx) => {
          path += `/${segment}`;
          const isLast = idx === segments.length - 1;
          return (
            <React.Fragment key={segment}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <span className='text-gray-500'>
                    {segment.charAt(0).toUpperCase() + segment.slice(1)}
                  </span>
                ) : (
                  <BreadcrumbLink href={`/dashboard${path}`}>
                    {segment.charAt(0).toUpperCase() + segment.slice(1)}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
