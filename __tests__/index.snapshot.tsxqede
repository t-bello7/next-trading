import { render } from '@testing-library/react'
import { useRouter } from 'next/router';
import Home from '@/pages/index'

jest.mock('next/router', () => ({
    useRouter: jest.fn()
  }))
  

it('renders homepage unchanged', () => {
    const pushMock = jest.fn()
    useRouter.mockReturnValue({
      push: pushMock
    })
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
})
