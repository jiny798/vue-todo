//테스트 스위트 이름 , 테스트 케이스들을 모아놓은 콜백함수
describe('todo 관리', () => {
  beforeEach(() => {
    cy.visit('/') //사용자가 브라우저를 통해 todos 메인 페이지에 접속
    cy.contains('Add Todo').click() //Add Todo 버튼 클릭
  })
  //하나의 테스트 케이스
  //it('테스트 할 동작 서술' ,실제 테스트 코드 작성할 콜백함수)
  it('Todo 모달 창을 열고 닫을 수 있다.', () => {
    //모달닫기
    cy.get('[data-cy="modal-backdrop"]').click({ force: true })

    cy.get('[data-cy="modal-backdrop"]').should('not.exist')
    cy.get('[data-cy="modal-container"]').should('not.exist')

    //모달 창 닫기 (close 버튼 선택시)
  })

  it('새로운 Todo를 작성할 수 있다.', () => {
    cy.get('#title').type('커피 마시기')
    cy.get('#summary').type('커피 마시기')

    //mpodal-container가 add 가지고있으면 클릭
    cy.get('[data-cy="modal-container"]').contains('Add').click()

    cy.get('[data-cy="modal-backdrop"]').should('not.exist')
    cy.get('[data-cy="modal-container"]').should('not.exist')

    cy.get('li').should('have.length', 4)

    cy.get('.text-white > :nth-child(4)').contains('커피 마시기')
  })
})
