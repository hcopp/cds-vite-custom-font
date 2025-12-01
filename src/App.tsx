import { useState } from 'react';
import type { ColorScheme } from '@coinbase/cds-common';
import { ThemeProvider } from '@coinbase/cds-web';
import { customTheme } from './theme/customTheme';
import { Box, Divider, HStack, VStack } from '@coinbase/cds-web/layout';
import { Sidebar, SidebarItem } from '@coinbase/cds-web/navigation';
import { MediaQueryProvider } from '@coinbase/cds-web/system';
import { Navbar } from './components/Navbar';
import { AssetList } from './components/AssetList';
import { CDSLogo } from './components/CDSLogo';
import { CardList } from './components/CardList';
import { SearchInput } from '@coinbase/cds-web/controls';
import { FgSecondaryDemo } from './components/FgSecondaryDemo';
import { Text } from '@coinbase/cds-web/typography';

const navItems = [
  {
    title: 'Assets',
    icon: 'chartPie',
  },
  {
    title: 'Trade',
    icon: 'trading',
  },
  {
    title: 'Pay',
    icon: 'pay',
  },
  {
    title: 'For you',
    icon: 'newsFeed',
  },
  {
    title: 'Earn',
    icon: 'giftBox',
  },
  {
    title: 'Borrow',
    icon: 'cash',
  },
  {
    title: 'DeFi',
    icon: 'defi',
  },
] as const;

export const App = () => {
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [search, setSearch] = useState('');
  const activeNavItem = navItems[activeNavIndex];

  const [activeColorScheme, setActiveColorScheme] = useState<ColorScheme>('light');

  const toggleColorScheme = () => setActiveColorScheme((s) => (s === 'light' ? 'dark' : 'light'));

  return (
    <MediaQueryProvider>
      <ThemeProvider theme={customTheme} activeColorScheme={activeColorScheme}>
        <HStack background="bg">
          <Sidebar autoCollapse height="100vh" logo={<CDSLogo />}>
            {navItems.map(({ title, icon }, index) => (
              <SidebarItem
                key={title}
                active={index === activeNavIndex}
                icon={icon}
                onClick={() => setActiveNavIndex(index)}
                title={title}
              />
            ))}
          </Sidebar>
          <VStack width="100%" zIndex={0}>
            <Navbar title={activeNavItem.title} toggleColorScheme={toggleColorScheme} />
            <HStack width="100%">
              <FgSecondaryDemo />
              <Divider direction="vertical" />
              <Box paddingX={3} paddingY={2}>
                <CardList />
              </Box>
              <Divider direction="vertical" />
              <Box paddingX={3} paddingY={2}>
                <VStack gap={1}>
                  <Text as="h2" font="titleLg">
                    Custom Title LG
                  </Text>
                  <Text as="h3" font="titleMd" color="fgMuted">
                    Custom Title MD
                  </Text>
                  <Text as="p" font="bodyMd">
                    Body MD keeps things legible while still feeling roomy across breakpoints.
                  </Text>
                  <Text as="p" font="bodyText" color="fgSecondary">
                    Body Text is great for supporting details or helper text.
                  </Text>
                </VStack>
              </Box>
            </HStack>
          </VStack>
        </HStack>
      </ThemeProvider>
    </MediaQueryProvider>
  );
};
