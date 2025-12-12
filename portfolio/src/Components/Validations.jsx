import * as Yup from "yup";



const Schema=Yup.object().shape({
    fullName:Yup.string().required("Please enter the name"),
    email:Yup.string().required("Please enter valid email address"),
    mobileNumber:Yup.string().max(10, "Mobile number must be 10 digits").min(10, "Mobile number must be 10 digits").required("Please enter the valid number"),
    emailSubject:Yup.string().required("Please enter email subject")
});



export default Schema;