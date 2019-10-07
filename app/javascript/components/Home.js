import React from 'react'
import { BrowserRouter, Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
	asAnchor,
	asPaginationItem,
	BackLink,
	Breadcrumb,
	Button,
	Checkbox,
	DateInput,
	FileUpload,
	GridCol,
	GridRow,
	Heading,
	InputField,
	Layout,
	ListItem,
	ListNavigation,
	MultiChoice,
	Pagination,
	Page,
	PhaseBanner,
	Radio,
	SearchBox,
	Select,
	TextArea,
	UnorderedList,
	Link,
} from 'govuk-react';
import ViabilityHeader from './ViabilityHeader'


class Home extends React.Component {
	render () {
		return (
				<div>
					<ViabilityHeader />
					<Page header={false}>
						<GridRow>
							<GridCol>
								<Heading size="LARGE">Viability Assessment Checker</Heading>
								<Link as={RouterLink} to="about">About</Link>
							</GridCol>
						</GridRow>
					</Page>
				</div>
			)
	}
}

export default Home
