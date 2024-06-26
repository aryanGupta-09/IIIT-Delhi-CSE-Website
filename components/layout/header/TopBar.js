/* eslint-disable @next/next/no-img-element */
'use client';

import { Menu } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import { useCallback, useMemo, useState } from 'react';
import CustomDrawer from './CustomDrawer';
import Link from 'next/link';

export default function TopBar() {
  const linkStyle = useMemo(
    () => 'body-xsmall hover:text-primary-main hover:cursor-pointer',
    [],
  );

  const links = useMemo(
    () => [
      {
        name: 'IIIT-Delhi',
        link: 'https://iiitd.ac.in',
      },
      {
        name: 'Directory',
        link: 'https://iiitd.ac.in/directory',
      },
      {
        name: 'Course Catalog',
        link: '/academics/course-catalog',
      },
      {
        name: 'Labs',
        link: '/research/labs',
      },
      {
        name: 'PhD Admissions',
        link: '/admissions/phd',
      },
      {
        name: 'Events',
        link: '/news-and-events/events',
      },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
    [],
  );

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = useCallback(() => {
    setIsDrawerOpen((prev) => !prev);
  }, []);

  return (
    <div className="flex justify-between items-center px-5 md:border-none md:shadow-none shadow-lg">
      <Link href="/">
        <Avatar
          src="https://media.licdn.com/dms/image/C4D0BAQHB2H7RAmPh5A/company-logo_200_200/0/1630546171538/cseiiitd_logo?e=1718236800&v=beta&t=MAQckcmOYWT1bihrf7FAcQKTnYUu2KDimYxlDhfpcrk"
          alt="Logo"
          className="w-10"
        />
      </Link>
      <div className="hidden md:flex gap-5">
        {links.map((link, index) => (
          <div key={link.name} className="flex gap-4 items-center">
            <a key={link.name} href={link.link} className={linkStyle}>
              {link.name}
            </a>
            {index !== links.length - 1 && (
              <span className="bg-primary-main h-3.5 w-0.5"></span>
            )}
          </div>
        ))}
      </div>
      <IconButton
        className="md:hidden p-1"
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}>
        <Menu className="text-2xl text-primary-main" />
      </IconButton>
      <CustomDrawer
        open={isDrawerOpen}
        anchor={'right'}
        toggleDrawer={handleDrawerToggle}
      />
    </div>
  );
}
