'use client';

import { social } from '@/constants/constant';
import Link from 'next/link';
import React from 'react';

type SocialProps = {
  containerStyles: string;
  iconStyles: string;
};

export default function Social({ containerStyles, iconStyles }: SocialProps) {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => {
        const Icon = item.icon;

        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
          >
            <Icon />
          </Link>
        );
      })}
    </div>
  );
}
