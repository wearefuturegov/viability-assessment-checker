import React from 'react'
import { BrowserRouter, Link as RouterLink } from 'react-router-dom';
import styled from "styled-components"

import {
	Button,
	GridCol,
	GridRow,
	Heading,
	ListItem,
	Page,
	Paragraph,
	Link,
	PhaseBanner
} from 'govuk-react';
import { ButtonArrow } from '@govuk-react/icons';
import ViabilityHeader from './ViabilityHeader'

const ReactRouterLinkRenderer = ({ href, children }) => (
  href.match(/^\//)
    ? <Link to={href}>{children}</Link>
    : <a href={href}>{children}</a>
);

const StartButton = styled.div`
	max-width: 200px;
`

class Home extends React.Component {
	render () {
		return (
				<div>
					<ViabilityHeader />

					<Page header={false} beforeChildren={
							<PhaseBanner level="alpha">
				         This part of Southwark Council &#8211;{' '}
				         <a href="https://google.com" target="_blank">find out what that means</a>
				      </PhaseBanner>
				    }>
						<GridRow>
							<GridCol>
								<Heading size="LARGE">Viability Assessment Checker</Heading>

								<Paragraph>Use this tool to:</Paragraph>
								<ul>
									<ListItem>check and recieve guidence from Southwark Council on your viability assesment compared to expected figures.</ListItem>
									<ListItem>understand how your sales values compare to similar sites.</ListItem>
									<ListItem>save copies of this check as a reference.</ListItem>
									<ListItem>submit this check as part of your planning application.</ListItem>
								</ul>

								<Paragraph>What you will need:</Paragraph>
								<ul>
									<ListItem>key figures from your viability assessment.</ListItem>
									<ListItem>planning application reference number if you are submitting as part of your planning application.</ListItem>
								</ul>

								<br/>
								<StartButton><Button start as={RouterLink} to="start" icon={<ButtonArrow />}>Start now</Button></StartButton>
								<br/>

								<Heading as="h3" size="MEDIUM">Data we use</Heading>
								<Paragraph>Your assessment figures will be checked against:</Paragraph>
								<ul>
									<ListItem>past viability assessments</ListItem>
									<ListItem>current market data</ListItem>
									<ListItem>land registry</ListItem>
								</ul>
								<Paragraph linkRenderer={ReactRouterLinkRenderer}>[Read more about this tool](about)</Paragraph>
							</GridCol>
						</GridRow>
					</Page>
				</div>
			)
	}
}

export default Home
