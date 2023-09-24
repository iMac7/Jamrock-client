export function useCredentials() {
    const credentials = localStorage.getItem('user')
    let user
    if(credentials) user = JSON.parse(credentials)

  return //{user: user.user, token: user.token}
}
