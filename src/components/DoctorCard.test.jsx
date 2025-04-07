import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import DoctorCard from './DoctorCard';

describe('DoctorCard component', () => {
    it('renders correctly with given props', ()=> {
        const props = {
            id: 1,
            name: 'Dr. John Doe',
            specialty: 'Cardiology',
            image: 'doctor-placeholder.png',
            onClick: vi.fn(),
        };

        render(<DoctorCard {...props} />);

        expect(screen.getByText('Dr. John Doe')).toBeInTheDocument();
        expect(screen.getByText('Cardiology')).toBeInTheDocument();
        expect(screen.getByAltText('Dr. John Doe')).toHaveAttribute('src', 'doctor-placeholder.png');
    });

    it('triggers the onClick callback when the button is clicked', () => {
        const props = {
            id: 1,
            name: 'Dr. John Doe',
            specialty: 'Cardiology',
            image: 'doctor-placeholder.png',
            onClick: vi.fn(),
        };

        render(<DoctorCard {...props} />);
        const button = screen.getByRole('button', { name: /más información/i });
        fireEvent.click(button);

        expect(props.onClick).toHaveBeenCalledTimes(1);
    });
});