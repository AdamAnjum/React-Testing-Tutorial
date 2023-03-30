import { screen, render } from '@testing-library/react'
import Skills from '.'

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'JavaScript']

  test('renders correctly', () => {
    render(<Skills skills={skills} />)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })

  test('renders a list of skills', () => {
    render(<Skills skills={skills} />)
    const listItemElements = screen.getAllByRole('listitem')
    expect(listItemElements).toHaveLength(skills.length)
  })

  test('renders login button', () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.getByRole('button', {
      name: 'Login',
    })
    expect(loginButton).toBeInTheDocument()
  })

  test('start learning button is not rendered', () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.queryByRole('button', {
      name: 'Start learning',
    })
    expect(loginButton).not.toBeInTheDocument()
  })
})
