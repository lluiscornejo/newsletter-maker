import { gridConfig } from '@Common/styles/grid';

export const breakPoints = {
  maxContainerWidth: gridConfig.simpleGrid.containerMaxWith,
  mobileWidth: gridConfig.simpleGrid.screen.small,
  desktopWidth: gridConfig.simpleGrid.screen.medium,
};

export const mediaQueries = {
  mobileOnly: `@media (max-width: ${breakPoints.desktopWidth}px)`,
  smallTablet: `@media (min-width: ${breakPoints.mobileWidth + 1}px)`,
  desktop: `@media (min-width: ${breakPoints.desktopWidth + 1}px)`,
  largeDesktop: `@media (min-width: ${breakPoints.maxContainerWidth + 1}px)`,
};

export const screen = {
  small: gridConfig.simpleGrid.screen.small,
  medium: gridConfig.simpleGrid.screen.medium,
  large: gridConfig.simpleGrid.screen.large,
};
