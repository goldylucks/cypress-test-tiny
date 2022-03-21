describe("ZD onboarding", describeZdOnboarding)

function describeZdOnboarding() {
	it("Loads extension", itLoadsExtension)
}

function itLoadsExtension() {
	cy.visit("https://google.com")
	cy.get(".apollo-react-root").should("exist")
}
