import { isFirefox } from '@Common/utils/navigators';
import { defaultConfig } from '@Common/hooks/utils/config';

export const limitWheel = (wheel, limit) => Math.abs(wheel) > limit ? (Math.sign(wheel) * limit) : wheel;

export const normalizeBrowserWheel = () => isFirefox ? -15 : 2;

export const skewOrientations = {
  normal: 1,
  reverse: -1,
};

export const limitSkew = (skew) => {
  const { skewLimit } = defaultConfig;
  if (skew >= 0) {
    return skew > skewLimit ? skewLimit : skew;
  }
  return skew < -skewLimit ? -skewLimit : skew;
};
