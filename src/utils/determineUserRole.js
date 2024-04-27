const determineUserRole = ({mail}) => {
     const mailLowerCase = mail.toLowerCase ()
     
     if (mailLowerCase.includes ("@admin")) {
        return "admin"
     }

     else {
        return "user"
     }
} 

export default determineUserRole;