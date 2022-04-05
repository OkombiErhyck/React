import React from "react";

class AddContact extends React.Component {
    state = {
        Nume: "",
        Telefon: "",
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.number === "") {
            alert("ALl the fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ Nume: "", Telefon: "" });
    };
    render() {
        return ( <
            div className = "ui main" >
            <h2> Adaugati Contacte </h2> 
            <form className = "ui form"
            onSubmit = { this.add } >
            <
            div className = "field" >
            <label> Nume </label> 
            <input type = "text"
            Nume = "Nume"
            placeholder = "Nume"
            value = { this.state.name }
            onChange = {
                (e) => this.setState({ name: e.target.value })
            }
            /> 
            </div> 
            <div className = "field" >
            <label > Telefon </label>
             <input type = "text"
            name = "Telefon"
            placeholder = "Telefon"
            value = { this.state.number }
            onChange = {
                (e) => this.setState({ number: e.target.value })
            }
            /> </div> 
            <button className = "ui button blue" > Adauga </button> </form> 
            </div>
        );
    }
}

export default AddContact;