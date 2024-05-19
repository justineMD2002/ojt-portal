import * as Components from "./Components";

export const Student = (props) => {

    const handleChange = (e) => {
        const updatedStudent = {
            ...props.student,
            [e.target.name]: e.target.value
        };
        props.setStudent(updatedStudent);
    }    

    return (
        <div>
            <Components.Input type="text" name="studentID" placeholder="Student ID" onChange={handleChange}/>
            <Components.Input type="text" name="firstname" placeholder="Firstname" onChange={handleChange}/>
            <Components.Input type="text" name="lastname" placeholder="Lastname" onChange={handleChange}/>
            <Components.Input type="text" name="department" placeholder="Degree Program" onChange={handleChange}/>
            <Components.Input type="text" name="email" placeholder="Email" onChange={handleChange}/>
            <Components.Input type="password" name="password" placeholder="Password" onChange={handleChange}/> 
        </div>
    )
}


export const Supervisor = (props) => {

    const handleChange = (e) => {
        const updatedSupervisor = {
            ...props.supervisor,
            [e.target.name]: e.target.value
        };

        props.setSupervisor(updatedSupervisor);
    }    


    return (
        <div>
            <Components.Input type="text" name="firstname" placeholder="Firstname" onChange={handleChange}/>
            <Components.Input type="text" name="lastname" placeholder="Lastname" onChange={handleChange}/>
            <Components.Input type="text" name="company_name" placeholder="Company Name" onChange={handleChange}/>
            <Components.Input type="email" name="company_email" placeholder="Company Email" onChange={handleChange}/>
            <Components.Input type="text" name="company_contactNo" placeholder="Company Contact Number" onChange={handleChange}/>
            <Components.Input type="text" name="company_location" placeholder="Company Location" onChange={handleChange}/>
            <Components.Input type="text" name="position" placeholder="Position" onChange={handleChange}/>
            <Components.Input type="password" name="password" placeholder="Password" onChange={handleChange}/> 
        </div>
    )
}

export const Admin = (props) => {

    const handleChange = (e) => {
        const updatedAdmin = {
            ...props.admin,
            [e.target.name]: e.target.value
        };

        props.setAdmin(updatedAdmin);
    }
    
    return (
        <div>
            <Components.Input type="text" name="firstname" placeholder="Firstname" onChange={handleChange}/>
            <Components.Input type="text" name="lastname" placeholder="Lastname" onChange={handleChange}/>
            <Components.Input type="email" name="email" placeholder="Email" onChange={handleChange}/>
            <Components.Input type="password" name="password" placeholder="Password" onChange={handleChange}/> 
        </div>
    )
}
