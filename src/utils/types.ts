export type Job = {
   jobId: string;
   companyName: string;
   deadline: string;
   description: string;
   jobType: string;
   location: string;
   position: string;
   postedDate: string;
   requirements: string[];
   salary: string;
   statusRequest: string;
 }
 
 export type User = {
    userType: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    email: string;
    phoneNumber: string;
    address: string;
    education: string;
    username: string;
};

export type Application = {
      user: {
        id: string;
        name: string;
        userType: string;
        dateOfBirth: string;
        email: string;
      };
      job: {
        jobId: string;
        companyName: string;
        position: string;
        description: string;
        location: string;
        jobType: string;
        requirements: string[];
        postedDate: string;
        deadline: string;
      };
      id: string;
      education: string;
      workExperience: string;
      cv: string;
      applicationDate: string;
    };

export type Company = {
      id: string;
      companyName: string;
      companyOwnerId: string;
      address: string;
      phone: string;
      email: string;
}