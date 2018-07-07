import React, { Component } from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: #fff;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  padding-right: 33px;
  border-right: 1px dotted #fff;
  text-decoration: none;

  &:hover {
    color: #8d8d8d;
    text-decoration: none;
  }

  &:last-child {
    border-right: none;
  }
`

class Link extends React.Component {
  render() {
    return(
      <StyledLink href={this.props.link}> {this.props.text} </StyledLink>
    )

  }
}

export default Link;