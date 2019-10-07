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
import Question5 from './Question5'

class Start extends React.Component {
	render () {
		return (
				<div>
					<ViabilityHeader />
					<Page header={false} beforeChildren={
						<Link as={RouterLink} to="/"><BackLink>Home</BackLink></Link>
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
