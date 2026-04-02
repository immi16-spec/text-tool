'use client';

import { ChevronDown, Menu, Search } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { tools } from '@/lib/tools';
import { Logo } from '../Logo';

const desktopNavPaths = [
  '/tools/fancy-text-generator',
  '/tools/word-counter',
  '/tools/space-remover',
  '/tools/case-converter',
  '/tools/grammar-checker-translate',
];

const moreToolsHref = '/#explore-all-tools';
const secondaryNavLinks = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const mobileNavLinks = [
  { href: moreToolsHref, label: 'Text Tools' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact Us' },
];

function filterTools(query: string) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return [];
  }

  return tools.filter((tool) => {
    const searchableText = `${tool.name} ${tool.description}`.toLowerCase();
    return searchableText.includes(normalizedQuery);
  });
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'text-sm font-medium transition-colors hover:text-primary',
        isActive ? 'text-primary' : 'text-muted-foreground'
      )}
    >
      {children}
    </Link>
  );
}

export function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileSearchQuery, setMobileSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const desktopNavTools = desktopNavPaths
    .map((path) => tools.find((tool) => tool.path === path))
    .filter((tool): tool is (typeof tools)[number] => Boolean(tool));
  const desktopSearchResults = filterTools(searchQuery).slice(0, 6);
  const mobileSearchResults = filterTools(mobileSearchQuery).slice(0, 8);
  const isToolMenuActive = desktopNavTools.some((tool) => tool.path === pathname);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-7xl items-center">
        <div className="mr-4 flex">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  'h-auto px-0 text-sm font-medium hover:bg-transparent hover:text-primary focus-visible:ring-0',
                  isToolMenuActive ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                Text Tools
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64">
              {desktopNavTools.map((tool) => (
                <DropdownMenuItem key={tool.path} asChild>
                  <Link href={tool.path} className="font-medium text-foreground">
                    {tool.name}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild>
                <Link href={moreToolsHref} className="font-medium text-foreground">
                  More Tools
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {secondaryNavLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-3">
          <div className="relative hidden w-full max-w-xs md:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search tools..."
              className="pl-9"
              aria-label="Search tools"
            />
            {searchQuery.trim() && (
              <div className="absolute right-0 top-full z-50 mt-2 w-full overflow-hidden rounded-md border bg-background shadow-lg">
                {desktopSearchResults.length > 0 ? (
                  <div className="py-2">
                    {desktopSearchResults.map((tool) => (
                      <Link
                        key={tool.path}
                        href={tool.path}
                        className="block px-3 py-2 text-sm hover:bg-muted"
                        onClick={() => setSearchQuery('')}
                      >
                        <span className="block font-medium text-foreground">{tool.name}</span>
                        <span className="block text-xs text-muted-foreground">
                          {tool.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="px-3 py-3 text-sm text-muted-foreground">
                    No matching tools found.
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Browse site links and search text tools from the mobile navigation panel.
                </SheetDescription>
                <div className="p-4">
                  <Logo />
                  <div className="relative mt-6">
                    <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="search"
                      value={mobileSearchQuery}
                      onChange={(event) => setMobileSearchQuery(event.target.value)}
                      placeholder="Search tools..."
                      className="pl-9"
                      aria-label="Search tools"
                    />
                  </div>
                  {mobileSearchQuery.trim() && (
                    <div className="mt-4 space-y-2 rounded-md border bg-background p-2">
                      {mobileSearchResults.length > 0 ? (
                        mobileSearchResults.map((tool) => (
                          <Link
                            key={tool.path}
                            href={tool.path}
                            className="block rounded-md px-3 py-2 hover:bg-muted"
                            onClick={() => {
                              setMobileSearchQuery('');
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            <span className="block text-sm font-medium text-foreground">
                              {tool.name}
                            </span>
                            <span className="block text-xs text-muted-foreground">
                              {tool.description}
                            </span>
                          </Link>
                        ))
                      ) : (
                        <p className="px-3 py-2 text-sm text-muted-foreground">
                          No matching tools found.
                        </p>
                      )}
                    </div>
                  )}
                  <nav className="mt-8 flex flex-col space-y-4">
                    {mobileNavLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium text-foreground hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  );
}
