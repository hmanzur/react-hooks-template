import AuthService from '../services/AuthService'

describe('AuthRouter', () => {
  test('Authenticated', async () => {
    AuthService.isAuthenticated = true

    expect(AuthService.isAuthenticated).toBeTruthy()
  })

  test('Non Authenticated', async () => {
    AuthService.isAuthenticated = false

    expect(AuthService.isAuthenticated).toBeFalsy()
  })
})
