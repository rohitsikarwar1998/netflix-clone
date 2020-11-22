import React from 'react';
import { OptForm } from '../components';
import Accordian from '../components/accordian';
import faqsData from '../fixtures/faqs.json';

export default function FaqsContainer() {
  return (
    <Accordian>
      <Accordian.Title>Frequently Asked Questions</Accordian.Title>
      <Accordian.Frame>
        {faqsData.map((item) => (
          <Accordian.Item key={item.id}>
            <Accordian.Header>{item.header}</Accordian.Header>
            <Accordian.Body>{item.body}</Accordian.Body>
          </Accordian.Item>
        ))}
      </Accordian.Frame>

      <OptForm>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
        <OptForm.Break />
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>get started</OptForm.Button>
      </OptForm>
    </Accordian>
  );
}
