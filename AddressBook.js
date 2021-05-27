
class AddressBook{
     firstname;
     lastname;
     address;
     city;
     state;
     pincode;
     phoneno;
     email;
     
     constructor(firstname,lastname,address,city,state,pincode,phoneno,email){
         this.firstname=firstname;
         this.lastname=lastname;
         this.address=address;
         this.city=city;
         this.state=state;
         this.pincode=pincode;
         this.phoneno=phoneno;
         this.email=email;
     }
     toString(){
         return "firstname: "+this.firstname +" lastname: "+this.lastname+
                " address: "+this.address +" city: "+this.city+" state: "+
                this.state+" pinCode: "+this.pincode+ " PhoneNo: "+this.phoneno+
                " Email: "+this.email;
     }
    }
     let addressBookData= new AddressBook("Saket","Jain","panna naka","Chhatarpur","M.P",471001,7987469952,"saket420@gmail.com");
     console.log(addressBookData.toString());

