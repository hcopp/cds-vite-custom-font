import { Box, VStack } from '@coinbase/cds-web/layout';
import { Text } from '@coinbase/cds-web/typography';

/**
 * Demo component showing how to use the custom fgSecondary color
 */
export const FgSecondaryDemo = () => {
  return (
    <VStack gap={2}>
      <Box padding={2} background="bg" borderRadius={200}>
        <Text font="body">
          This is primary foreground text (fg)
        </Text>
        <Text font="body" color="fgSecondary">
          This is secondary foreground text (fgSecondary) - appears more muted
        </Text>
      </Box>
      
      <Box padding={2} background="fgSecondary" borderRadius={200}>
        <Text font="body" color="bg">
          This box uses fgSecondary as a background color
        </Text>
      </Box>
    </VStack>
  );
};

