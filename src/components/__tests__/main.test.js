import {render, screen, cleanup} from '@testing-library/react';
import Main from '../Main';

test('should render Main component',()=> {
 render(<Main />);
 const mainElement = screen.getByTestId('main-1')
 expect(mainElement).toBeInTheDocument()
});