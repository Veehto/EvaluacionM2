import DoctorCard from "./DoctorCard";

export default function DoctorList({ doctors }) {
    return (
        <div>
            <div className='row'>
                {
                    doctors.map((doctor, index) => (
                        <DoctorCard
                            key={index}
                            name={doctor.name}
                            specialty={doctor.specialty}
                            experience={doctor.experience}
                            image={doctor.image}
                        />
                    ))
                }
            </div>
        </div>
    );
};