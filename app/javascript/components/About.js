import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import {
	GridRow,
	GridCol,
	Page,
	PhaseBanner,
	Breadcrumbs,
	Heading,
	Link
} from 'govuk-react';


class About extends React.Component {
	render () {
		return (
				<Page beforeChildren={
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
			)
	}
}

export default About
