export default{
    name: "doctors",
    title: "Doctors",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string"
        },
        {
            name: "specialization",
            title: "Specialization",
            type: "string"
        },
        {
            name: "imgURL",
            title: "ImageURL",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "experience",
            title: "Experience (in years)",
            type: "number"
        },
        {
            name: "verified",
            title: "Verified",
            type: "boolean"
        },
        {
            name: "about",
            title: "About",
            type: "string"
        },
        {
            name: "fees",
            title: "Fees",
            type: "number"
        },
        {
            name: "city",
            title: "City",
            type: "string"
        },
        {
            name: "state",
            title: "State",
            type: "string"
        },
    ]
}