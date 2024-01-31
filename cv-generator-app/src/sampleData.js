import uniqid from "uniqid";

const sampleData = {
  personal: {
    fullName: "John Doe",
    jobTitle: "Software Engineer",
    email: "john.doe@example.com",
    phoneNumber: "+1 123 456 7890",
    address: "New York, USA",
  },
  educations: [
    {
      degree: "Bachelor of Science in Computer Science",
      schoolName: "Tech Institute",
      location: "San Francisco, USA",
      startDate: "09/2018",
      endDate: "05/2022",
      isCollapsed: false,
      isHidden: false,
      id: uniqid(),
    },
    {
      degree: "Ph.D. in Artificial Intelligence",
      schoolName: "Innovation University",
      location: "Los Angeles, USA",
      startDate: "09/2022",
      endDate: "present",
      isCollapsed: true,
      isHidden: true,
      id: uniqid(),
    },
  ],
  experiences: [
    {
      companyName: "Tech Innovators Ltd.",
      positionTitle: "Frontend Developer",
      location: "San Francisco, USA",
      description:
        "Developed responsive and user-friendly interfaces for web applications. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      startDate: "06/2021",
      endDate: "present",
      isCollapsed: false,
      isHidden: false,
      id: uniqid(),
    },
    {
      companyName: "Global Robotics Co.",
      positionTitle: "Robotics Engineer",
      location: "Tokyo, Japan",
      description:
        "Led the design and implementation of robotic systems. Collaborated with hardware and software teams to integrate advanced AI algorithms for autonomous navigation.",
      startDate: "03/2019",
      endDate: "12/2020",
      isCollapsed: true,
      isHidden: false,
      id: uniqid(),
    },
    {
      companyName: "Umbrella Inc.",
      positionTitle: "UX & UI Designer",
      location: "New York City, US",
      description:
        "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
      startDate: "08/2020",
      endDate: "present",
      isCollapsed: true,
      isHidden: false,
      id: uniqid(),
    },
    {
      companyName: "Black Mesa Labs",
      positionTitle: "UX Research Assistant",
      location: "Berlin, Germany",
      description:
        "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.",
      startDate: "04/2018",
      endDate: "02/2019",
      isCollapsed: true,
      isHidden: false,
      id: uniqid(),
    },
  ],
}

export default sampleData;