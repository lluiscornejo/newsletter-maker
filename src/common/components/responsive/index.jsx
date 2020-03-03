import React from 'react';
import Responsive from 'react-responsive';

/**
 * Component to render it's children in a desktop breakpoint
 */
export const Desktop = (props) => process.env.IS_SERVER ? <>{props.children}</> : <Responsive {...props} minWidth={997} />;

/**
 * Component to render it's children in a header desktop breakpoint
 */
export const HeaderDesktop = (props) => (
  <>
    {!props.hide ? (
      <>
        {process.env.IS_SERVER ? <>{props.children}</> : <Responsive {...props} minWidth={996} />}
      </>
    ) : null}
  </>
);

/**
 * Component to render it's children in a mobile breakpoint
 */
export const Mobile = (props) => <Responsive {...props} maxWidth={996} />;

/**
 * Component to render it's children in a big desktop breakpoint
 */
export const BigDesktop = (props) => <Responsive {...props} minWidth={1336} />;

/**
 * Component to render it's children in a big mobile breakpoint
 */
export const BigMobile = (props) => <Responsive {...props} maxWidth={1335} />;
