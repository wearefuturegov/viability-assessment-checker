import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import {
	GridRow,
	GridCol,
	Page,
	BackLink,
	Heading,
	Link,
	PhaseBanner
} from 'govuk-react';
import ViabilityHeader from './ViabilityHeader'
import Question5 from './Question5'

class Start extends React.Component {
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
								<Question5 />
							</GridCol>
						</GridRow>
					</Page>
				</div>
			)
	}
}

export default Start
