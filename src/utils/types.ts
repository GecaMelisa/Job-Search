export type Job = {
   id: string;
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


export type Company = {
      companyName: string;
      companyOwnerId: string;
      address: string;
      phone: string;
      email: string;
}