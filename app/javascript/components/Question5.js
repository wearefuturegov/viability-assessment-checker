import React from 'react'
import {
  Heading,
  Input,
  LabelText,
  Label
} from 'govuk-react';

const Question5 = () => {
  return (
    <div>
      <Heading as="h2" size="MEDIUM">Step 5: Profit</Heading>
      <Label>
        <LabelText>% of Developer profit on Gross Development Value (GDV)</LabelText>
        <Input />
      </Label>
    </div>
  )
}

export default Question5
