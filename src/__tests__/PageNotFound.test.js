import { render, screen } from '@testing-library/react';
import PageNotFound from '../components/content/PageNotFound'


describe("<PageNotFound /> Component", () => {
    it("Should have a Page Not Found Heading", () => {
        render(<PageNotFound />);
        expect(screen.getByText(/pagenotfound/i)).toBeInTheDocument();
    })
})
