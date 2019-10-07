import React from 'react'
import TopNav, { asNavLinkAnchor, asTopNavAnchor } from '@govuk-react/top-nav';

const LogoAnchor = asTopNavAnchor('a');

const Company = (
  <LogoAnchor href="/" target="new">
    Southwark Council
  </LogoAnchor>
);

const ViabilityHeader = () => {
  return (
    <TopNav company={Company} />
  )
}

export default ViabilityHeader
