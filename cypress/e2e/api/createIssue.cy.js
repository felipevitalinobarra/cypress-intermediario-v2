import { faker } from '@faker-js/faker'

describe('Create Issue', () => {
    beforeEach(() => { cy.api_deleteProjects() })

    it('successfully', () => {
        const issue = {
            title: `issue-${faker.datatype.uuid()}`,
            description: faker.lorem.paragraph(),
            project: {
                name: `project-${faker.datatype.uuid()}`,
                description: faker.lorem.sentence()
            }
        }

        cy.api_createIssue(issue)
            .then(response => {
                expect(response.status).to.eq(201)
                expect(response.body.title).to.eq(issue.title)
                expect(response.body.description).to.eq(issue.description)
            })
    })
})
