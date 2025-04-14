import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router'; // Import MemoryRouter
import DoctorCard from './DoctorCard';

describe('DoctorCard component', () => {
    it('renders correctly with given props', () => {
        const props = {
            id: 1,
            name: 'Dr. John Doe',
            specialty: 'Cardiology',
            image: 'doctor-placeholder.png',
            onClick: vi.fn(),
        };

        // Wrap DoctorCard with MemoryRouter
        render(
            <MemoryRouter>
                <DoctorCard {...props} />
            </MemoryRouter>
        );

        expect(screen.getByText('Dr. John Doe')).toBeInTheDocument();
        expect(screen.getByText('Cardiology')).toBeInTheDocument();
        expect(screen.getByAltText('Doctor Dr. John Doe')).toHaveAttribute('src', 'doctor-placeholder.png');
    });

    it('triggers the onClick callback when the button is clicked', () => {
        const props = {
            id: 1,
            name: 'Dr. John Doe',
            specialty: 'Cardiology',
            image: 'doctor-placeholder.png',
            onClick: vi.fn(),
        };

        // Wrap DoctorCard with MemoryRouter
        render(
            <MemoryRouter>
                <DoctorCard {...props} />
            </MemoryRouter>
        );

        const button = screen.getByRole('button', { name: /ver/i });
        fireEvent.click(button);

        expect(props.onClick).toHaveBeenCalledTimes(1);
    });
});