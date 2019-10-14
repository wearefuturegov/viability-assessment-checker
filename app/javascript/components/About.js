import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import {
	GridRow,
	GridCol,
	Page,
	BackLink,
	Heading,
	Link
} from 'govuk-react';
import ViabilityHeader from './ViabilityHeader'

class About extends React.Component {
	render () {
		return (
				<div>
					<ViabilityHeader />
					<Page header={false} beforeChildren={
						<div>
							<PhaseBanner level="alpha">
				         This part of Southwark Council &#8211;{' '}
				         <a href="https://google.com" target="_blank">find out what that means</a>
				      </PhaseBanner>
							<Link as={RouterLink} to="/"><BackLink>Home</BackLink></Link>
						</div>
					}>
						<GridRow>
							<GridCol>
								<Heading size="LARGE">About</Heading>
							</GridCol>
						</GridRow>
					</Page>
				</div>
			)
	}
}

export default About
