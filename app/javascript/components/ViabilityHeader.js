import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import TopNav, { asTopNavAnchor } from '@govuk-react/top-nav';
import {
  Main,
  PhaseBanner
} from 'govuk-react';

const LogoAnchor = asTopNavAnchor('a');

const Company = (
  <LogoAnchor as={RouterLink} to="/" >
    Southwark Council
  </LogoAnchor>
);

const ViabilityHeader = () => {
  return (
    <TopNav company={Company}/>
  )
}

export default ViabilityHeader
