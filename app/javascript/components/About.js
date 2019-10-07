import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import {
	GridRow,
	GridCol,
	Page,
	Breadcrumbs,
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
						<Breadcrumbs>
							<Link as={RouterLink} to="/">Home</Link>
						  About
						</Breadcrumbs>
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
