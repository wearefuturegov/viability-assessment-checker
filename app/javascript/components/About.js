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
						<Link as={RouterLink} to="/"><BackLink>Home</BackLink></Link>
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
