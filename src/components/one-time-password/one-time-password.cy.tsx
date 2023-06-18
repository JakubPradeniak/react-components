import OneTimePassword from './one-time-password';

describe('<OneTimePassword />', () => {
  it('renders with set amount of fields', () => {
    const numOfFields = 6;

    cy.mount(
      <OneTimePassword numberOfFields={numOfFields} setValue={() => null} />
    );

    cy.dataCy('otp-field').should('have.length', numOfFields);
  });
});
