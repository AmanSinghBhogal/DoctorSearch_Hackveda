export const filterData = [
  {
    items: [
      { name: "Neurologist", value: "neurologist" },
      { name: "Cardiologist", value: "cardiologist" },
      { name: "Oncologist", value: "oncologist" },
      { name: "Dermatologist", value: "dermatologist" },
      { name: "Endocrinologist", value: "endocrinologist" },
      { name: "Family physician", value: "physician" },
      { name: "Pulmonologist", value: "pulmonologist" },
      { name: "Radiologist", value: "radiologist" },
      { name: "Audiologist", value: "audiologist" },
      { name: "Anesthesiologist", value: "anesthesiologist" },
      { name: "Ophthalmologist", value: "ophthalmologist" },
      { name: "Gastroenterologist", value: "gastroenterologist" },     
      { name: "Allergist", value: "allergist" },
      { name: "Epidemiologist", value: "epidemiologist" },
      { name: "Internists", value: "internists" },
      { name: "Nephrologist", value: "nephrologist" },
      { name: "Surgeon", value: "surgeon" },
      { name: "Dentist", value: "dentist" },
      { name: "Emergency Medicine", value: "emergency medicine" },     
      { name: "Orthopedic surgeon", value: "orthopedic surgeon" },     
      { name: "ENT", value: "ent" },
    ],
    placeholder: 'Specialization',
    queryName: 'specialization',
  },
  {
    items: [
      { name: "Gujarat", value: "gujarat" },
      { name: "Maharashtra", value: "maharashtra" },
      { name: "Goa", value: "goa" },
      { name: "Rajasthan", value: "rajasthan" },
      { name: "Punjab", value: "punjab" },
      { name: "Delhi", value: "delhi" },
      { name: "Haryana", value: "haryana" },
    ],
    placeholder: 'State',
    queryName: 'state',
  },
  {
    items: [
      { name: "Ahmedabad", value: "ahmedabad" },
      { name: "Surat", value: "surat" },
      { name: "Gandhinagar", value: "gandhinagar" },
      { name: "Vadodara", value: "vadodara" },
      { name: "Rajkot", value: "rajkot" },
      { name: "Junagadh", value: "junagadh" },
      { name: "Jamnagar", value: "jamnagar" },
      { name: "Bhavnagar", value: "bhavnagar" },
      { name: "Gondal", value: "gondal" },
      { name: "Amreli", value: "amreli" },
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
