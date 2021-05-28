
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
    let addressBookArray= new Array();
    try{

      addressBookArray.push(new AddressBook("Saket","Jain","panna naka","Chhatarpur","MadhyaP",471001,7987469952,"saket420@gmail.com"));
      addressBookArray.push(new AddressBook("Farzan","Ullah","kotwali", "Chhatarpur","madhyapradesh",471001,7954861245,"farzan444@gmail.com"));
        console.log(addressBookArray);
        searchContactByCitAndyState("Farzan","chhatarpur","madhyapradesh");
        searchByNameAndEdit("Saket","Abhishek");
        console.log(addressBookArray);
        getCount();
       // searchByNameAndDelete("Farzan");
        console.log("AddressBook After Addition and Deletion");
        console.log(addressBookArray);
        getCount();
        checkDuplicateConatct("Saket");
        console.log("Show AddressBooks in City Chhatarpur");
        viewByCity("Chhatarpur");
        console.log("Show AddressBooks of State MadhyaP");
        viewByState("MadhyaP");
        getCountByCityState("Chhatarpur");
        sortAddressBook();
    }catch (e){
        console.log(e);
    }
        
    
    function searchByNameAndEdit(firstname,newName)
    {
       for(contact of addressBookArray){
           if(contact.firstname == firstname)
           {
               contact.firstname=newName;
             console.log("Updated new Name is : "+ contact.firstname );
           }
           
       }
    }
    
    function searchByNameAndDelete(firstname)
    {
     for(contact of addressBookArray){
         if(contact.firstname == firstname)
         {
           addressBookArray.pop(contact)
         }  
       }
    }
    function count(contactCount){
        return ++contactCount;
    }
    
    function getCount(){
        console.log("Contacts : "+addressBookArray.reduce(count,0)+"\n");
    }

    function checkDuplicateConatct(firstname)
    {
        console.log("New Name: "+firstname);
        let d =  addressBookArray.filter(contact=>contact.firstname==firstname )
                                 .map(contact => contact.firstName.toString() )
              if(d.length >0)
              {
              console.log("\t"+firstname + " " +  "Already Exists! Please Choose Different Name");
              }
              else
              console.log(firstname + " "+"Doesnt Exist \n   You can create a AddressBook by Using "+firstname)
    }

    function searchContactByCitAndyState(firstname,city,state){
        let citySearch=addressBookArray.filter(contacts => contacts.firstname == firstname && contacts.city == city).toString();
        let stateSearch=addressBookArray.filter(contacts => contacts.firstname == firstname && contacts.state == state).toString();
        
        if (citySearch.length >0 && stateSearch.length >0){
           
            console.log("Contact Match "+firstname);
            
        }else{
            console.log(" Contact not Match! Please give proper city and state");
        }
    
    }
    
    function viewByCity(city){
        addressBookArray.filter(contact=>contact.city==city).forEach(contact=>console.log(contact))
    }
    
    function viewByState(state){
        addressBookArray.filter(contact=>contact.state==state).forEach(contact=>console.log(contact))
    }
  
    function getCountByCityState(cityOrState){
        let count = 0;
        addressBookArray.filter(contact=>contact.city==cityOrState).forEach(contact=>++count);
        addressBookArray.filter(contact=>contact.state==cityOrState).forEach(contact=>++count);
        console.log("Count by City or State are: "+count);
    }

    function sortAddressBook(){
        let sortedArray= addressBookArray.sort();
        console.log("The sorted AddressBooks are: ");
        console.log(sortedArray);
      }