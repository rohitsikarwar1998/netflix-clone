/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Item,
  Pane,
  Container,
  Inner,
  Title,
  SubTitle,
  Image,
} from './styles/jumbotron';

export default function Jumbotron({
  children,
  direction = 'row',
  ...restProps
}) {
  return (
    <Item>
      <Inner direction={direction} {...restProps}>
        {children}
      </Inner>
    </Item>
  );
}

Jumbotron.Container = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);
Jumbotron.Pane = ({ children, ...restProps }) => (
  <Pane {...restProps}>{children}</Pane>
);
Jumbotron.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
);
Jumbotron.SubTitle = ({ children, ...restProps }) => (
  <SubTitle {...restProps}>{children}</SubTitle>
);
Jumbotron.Image = ({ ...restProps }) => <Image {...restProps} />;

// jumbotron prop types object
const propTypes = {
  children: PropTypes.element.isRequired,
  direction: PropTypes.string.isRequired,
};

// apply above proptypes to every component
Jumbotron.propTypes = propTypes;
Jumbotron.Container.propTypes = propTypes;
Jumbotron.Pane.propTypes = propTypes;
Jumbotron.Title.propTypes = propTypes;
Jumbotron.SubTitle.propTypes = propTypes;
Jumbotron.Image.propTypes = propTypes;
