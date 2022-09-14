import { render, screen } from '@testing-library/react';
import Overview from '../components/content/Overview';


describe("<Overview /> Component", () => {
    it("Should have a h1 content", () => {
        render(<Overview />);
        const headingElement = screen.getByRole("heading", { level : 1, name: "1,25,000 Customers Using The Application!"});
        expect(headingElement).toBeInTheDocument();
    })
})