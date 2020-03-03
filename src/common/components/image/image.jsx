import React, { useEffect } from 'react';
import { branch, renderComponent } from 'recompose';
import { isBoolean } from '@Common/utils/type-predicates';
import LazyLoad, { forceCheck } from 'react-lazyload';
import PropTypes from 'prop-types';
import DefaultImage from '@Common/components/default-image';
import { StyledImage } from './image.styled';

const Img = ({
  src,
  alt,
  size,
  mobileSize,
  ...props
}) => (
  <StyledImage
    src={src}
    alt={alt}
    width={size}
    mobileWidth={mobileSize}
    {...props}
  />
);

const Image = ({
  lazy,
  lazyload = {},
  placeholder: Placeholder = DefaultImage,
  src,
  alt,
  size,
  mobileSize,
  ...props
}) => {
  useEffect(() => {
    setTimeout(forceCheck, 500);
  }, []);

  return (
    <LazyLoad placeholder={<Placeholder />} once {...lazyload}>
      {src ? (
        <Img
          src={src}
          alt={alt}
          size={size}
          mobileSize={mobileSize}
          {...props}
        />
      ) : <DefaultImage />}
    </LazyLoad>
  );
};

Image.defaultProps = {
  lazy: true,
};

Image.propTypes = {
  lazy: PropTypes.bool,
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.number,
  mobileSize: PropTypes.number,
};

const enhance = branch(({ lazy }) => isBoolean(lazy) && !lazy, renderComponent(Img));

export default enhance(Image);
