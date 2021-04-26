"use strict";

exports.MENU = class {
  // Student ID
  Item_id;
  // Student first name
  Item_name ;
  // Student last name
  Description ;
  // Student programme
  Category_id ;
  // Student modules and grades
  Price ;
  modules = [];
      

  constructor(Item_id, Item_name, Description, Category_id, Price) {
    this.Item_id = Item_id;
    this.Item_name = Item_name;
    this.Description = Description;
    this.Category_id = Category_id;
    this.Price = Price;
  }
}

exports.STAFF = class {
  // Programme code
  Staff_id ;
  // Programme name
  Title;
  // Programme modules
  
  First_name;     

  Surname;        

  Address;        

  Phone_no;       

  Email;    
   
  modules = [];

  constructor(Staff_id , Title, First_name, Surname, Address, Phone_no, Email) {
    this.Staff_id  = Staff_id ;
    this.Title = Title;
    this.First_name  = First_name ;
    this.Surname = Surname;
    this.Address  = Address ;
    this.Phone_no = Phone_no;
    this.Email = Email;
  }
}

exports.ITEM_DIET = class {
  // Module code
  Item_id ;
  // Module name
  Diet_code ;

  constructor(Item_id , Diet_code ) {
    this.Item_id  = Item_id ;
    this.Diet_code  = Diet_code ;
  }
}
