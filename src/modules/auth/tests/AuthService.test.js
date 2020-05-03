import AuthService from '../services/AuthService'

describe('AuthService', () => {
  test('init', async () => {
    expect(AuthService.init).toBeDefined()
    AuthService.init()

    expect(AuthService.isAuthenticated).toBeFalsy()
    expect(AuthService.token).toBeNull()
  })

  test('signIn', async () => {
    expect(AuthService.signIn).toBeDefined()
  })

  test('signOut', async () => {
    expect(AuthService.signOut).toBeDefined()
  })

  test('saveToken', async () => {
    expect(AuthService.saveToken).toBeDefined()

    AuthService.saveToken('token')

    expect(AuthService.token).toBe('token')
  })
})
