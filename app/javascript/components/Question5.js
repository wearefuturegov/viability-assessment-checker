import React from 'react'
import {
  Heading,
  Input,
  Label
} from 'govuk-react';

const Question5 = () => {
  return (
    <div>
      <Heading as="h2" size="MEDIUM">Step 5: Profit</Heading>
      <Label>
        % of Developer profit on Gross Development Value (GDV)
        <Input />
      </Label>
    </div>
  )
}

export default Question5
