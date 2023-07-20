import { render, screen, getByTestId } from '@testing-library/react';
import { useRouter } from 'next/router';
import Home from '@/pages/index';

const setLocalStorage = (key: string, data: string) => {
  window.localStorage.setItem(key, JSON.stringify(data));
};

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))


describe('Test for HomePage', () => {
    it('renders an empty page when user is absent in localstorage', () => {
      
      const pushMock = jest.fn()
      useRouter.mockReturnValue({
        push: pushMock
      })
        const {container} = render(<Home />)
        expect(container).toBeEmptyDOMElement()       
    })

    it('render page when user is present in localstorage', () => {
        setLocalStorage('user', '{username: tomi}')
        render(<Home />)
        
      const heading = screen.getByRole('heading', {
        name: /You are logged In/i,
      })

      expect(heading).toBeInTheDocument()
      })
})