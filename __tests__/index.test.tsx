import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import Home from '@/pages/index';


jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))


describe('Home', () => {
    it('renders a logout', () => {
      
      const pushMock = jest.fn()
      useRouter.mockReturnValue({
        push: pushMock
      })
        const {container} = render(<Home />)
        expect(container).toBeEmptyDOMElement()       
    })
})