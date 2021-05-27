
class AddressBook{
     
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
     get firstname(){ return this._firstname; }
     set firstname(firstname) {
         let fnameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
         if(fnameRegex.test(firstname))
         this._firstname=firstname;
         else throw 'Enter Valid FirstName';
     }
     get lastname(){ return this._lastname; }
     set lastname(lastname) {
         let lnameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
         if(lnameRegex.test(lastname))
         this._lastname=lastname;
         else throw 'Enter Valid LastName';
     }
     get address(){ return this._address; }
     set address(address) {
         let addressRegex = RegExp('[A-Za-z0-9]{4,}');
         if(addressRegex.test(address))
         this._address=address;
         else throw 'Enter Valid Address';
     }
     get city(){ return this._city; }
     set city(city) {
         let cityRegex = RegExp('[A-Za-z0-9]{4,}');
         if(cityRegex.test(city))
         this._city=city;
         else throw 'Enter Valid CityName';
     }
     get state(){ return this._state; }
     set state(state) {
         let stateRegex = RegExp('[A-Za-z0-9]{4,}');
         if(stateRegex.test(state))
         this._state=state;
         else throw 'Enter Valid State';
     }
     get pincode(){ return this._pincode; }
     set pincode(pincode) {
         let pinRegex = RegExp('[0-9]{6}');
         if(pinRegex.test(pincode))
         this._pincode=pincode;
         else throw 'Enter Valid Pincode';
     }
     get phoneno(){ return this._phoneno; }
     set phoneno(phoneno) {
         let phonenoRegex = RegExp('[0-9]{10}');
         if(phonenoRegex.test(phoneno))
         this._phoneno=phoneno;
         else throw 'Enter Valid phoneNumber';
     }
     get email(){ return this._email; }
     set email(email) {
         let emailRegex = RegExp('^[a-z0-9]+@[a-zA-Z0-9]+.[a-z]{2,3}');
         if(emailRegex.test(email))
         this._email=email;
         else throw 'Enter Valid Email';
     }
     toString(){
         return "firstname: "+this.firstname +" lastname: "+this.lastname+
                " address: "+this.address +" city: "+this.city+" state: "+
                this.state+" pinCode: "+this.pincode+ " PhoneNo: "+this.phoneno+
                " Email: "+this.email;
     }
    }
    try{

     let addressBookData= new AddressBook("Saket","Jain","panna naka","Chhatarpur","MadhayaP",471001,7987469952,"saket420@gmail.com");
     console.log(addressBookData.toString());
    }catch (e){
        console.log(e);
    }

