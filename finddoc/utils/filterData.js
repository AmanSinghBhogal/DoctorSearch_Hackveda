export const filterData = [
  {
    items: [
      { name: "Neurologist", value: "Neurologist" },
      { name: "Cardiologist", value: "Cardiologist" },
      { name: "Oncologist", value: "Oncologist" },
      { name: "Dermatologist", value: "Dermatologist" },
      { name: "Endocrinologist", value: "Endocrinologist" },
      { name: "Family physician", value: "Physician" },
      { name: "Pulmonologist", value: "Pulmonologist" },
      { name: "Radiologist", value: "Radiologist" },
      { name: "Audiologist", value: "Audiologist" },
      { name: "Anesthesiologist", value: "Anesthesiologist" },
      { name: "Ophthalmologist", value: "Ophthalmologist" },
      { name: "Gastroenterologist", value: "Gastroenterologist" },     
      { name: "Allergist", value: "Allergist" },
      { name: "Epidemiologist", value: "Epidemiologist" },
      { name: "Internists", value: "Internists" },
      { name: "Nephrologist", value: "Nephrologist" },
      { name: "Surgeon", value: "Surgeon" },
      { name: "Dentist", value: "Dentist" },
      { name: "Emergency Medicine", value: "Emergency Medicine" },     
      { name: "Orthopedic surgeon", value: "Orthopedic surgeon" },     
      { name: "ENT", value: "ENT" },
    ],
    placeholder: 'Specialization',
    queryName: 'specialization',
  },
  {
    items: [
      { name: "Gujarat", value: "Gujarat" },
      { name: "Maharashtra", value: "Maharashtra" },
      { name: "Goa", value: "Goa" },
      { name: "Rajasthan", value: "Rajasthan" },
      { name: "Punjab", value: "Punjab" },
      { name: "Delhi", value: "Delhi" },
      { name: "Haryana", value: "Haryana" },
    ],
    placeholder: 'State',
    queryName: 'state',
  },
  {
    items: [
      { name: "Ahmedabad", value: "Ahmedabad" },
      { name: "Surat", value: "Surat" },
      { name: "Gandhinagar", value: "Gandhinagar" },
      { name: "Vadodara", value: "Vadodara" },
      { name: "Rajkot", value: "Rajkot" },
      { name: "Junagadh", value: "Junagadh" },
      { name: "Jamnagar", value: "Jamnagar" },
      { name: "Bhavnagar", value: "Bhavnagar" },
      { name: "Gondal", value: "Gondal" },
      { name: "Amreli", value: "Amreli" },
    ],
    placeholder: 'City',
    queryName: 'city',
  },
];

export const getFilterValues = (filterValues) => {
  const {
    specialization,
    state,
    city
  } = filterValues;

  const values = [
    {
      name: 'specialization',
      value: specialization,
    },
    {
      name: 'state',
      value: state,
    },
    {
      name: 'city',
      value: city,
    }
  ];

  return values;
};
