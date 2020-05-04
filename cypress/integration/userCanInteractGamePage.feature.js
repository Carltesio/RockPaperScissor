describe("Page can show results", () => {
  describe('when computer picks rock', () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000", {

        onBeforeLoad: winner => {
          cy.stub(winner.Math, 'floor').returns(0)
        }
      })
    })
    it('user picks rock equals a draw', () => {
    cy.get("#ROCK").click();
    cy.get("#result").should('contain', 'tied')
    })

    it('user picks paper equals a win', () => {
      cy.get("#PAPER").click();
      cy.get("#result").should('contain','Computer chose rock you won')
    })

    it('user picks paper equals a lost', () => {
      cy.get("#SCISSOR").click();
      cy.get("#result").should('contain','Computer chose rock you lost')
    
  
  });
  })


  describe('when computer picks paper', () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000", {
        onBeforeLoad: winner => {
          cy.stub(winner.Math, 'floor').returns(1)
        }
      })
     })
    it('user picks rock equals a lost', () => {
      cy.get("#ROCK").click();
      cy.get("#result").should('contain', 'Computer chose paper you lost')
      })

      it('user picks paper equals a draw', () => {
        cy.get("#PAPER").click();
        cy.get("#result").should('contain', 'tied')
        });

      it('user picks scissor equals a draw', () => {
        cy.get("#SCISSOR").click();
        cy.get("#result").should('contain', 'Computer chose paper you won')

      })



        describe('when computer picks scissor', () => {
          beforeEach(() => {
            cy.visit("http://localhost:3000", {
              onBeforeLoad: winner => {
                cy.stub(winner.Math, 'floor').returns(2)
              }
          })
        })

      it('user picks rock equals a lost', () => {
        cy.get("#ROCK").click();
        cy.get("#result").should('contain', 'Computer chose scissor you wongit ')
        })
      
      })
  })
})