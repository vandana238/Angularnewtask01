import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagename',
  templateUrl: './pagename.page.html',
  styleUrls: ['./pagename.page.scss'],
})
export class PagenamePage implements OnInit {


  loading: any;
  loader: any;
  searchTerm: any;
  recentContacts: any;
  contactData: any = [];
  roleValue: any;
  contact: any;
  data: any;
  pagename: string | null | undefined;
  
  constructor(private activatedRoute:ActivatedRoute) {}

 

  public contacts: any=[
    {
      "id": 1,
      "name": "Elma Herring",
      "email": "elmaherring@unq.com",
      "phone": "+1 (913) 497-2020",
      "imageSrc":'assets/pro1.jpg',
      "role":"user"
    },
    {
      "id": 2,
      "name": "Knapp Berry",
      "email": "knappberry@unq.com",
      "phone": "+1 (951) 472-2967",
      "imageSrc":'assets/pro2.jpg',
      "role":"admin"
    },
    {
      "id": 3,
      "name": "Bell Burges",
      "email": "bellburgess@unq.com",
      "phone": "+1 (887) 478-2693",
      "imageSrc":'assets/pro3.jpg',
      "role":"employe"
    },
    {
      "id": 4,
      "name": "Hobbs Ferrell",
      "email": "hobbsferrell@unq.com",
      "phone": "+1 (862) 581-3022",
      "imageSrc":'assets/pro9.jpg',
      "role":"employe"

    },
    {
      "id": 5,
      "name": "Maryl Medina",
      "email": "maryloumedina@unq.com",
      "phone": "+1 (996) 520-2967",
      "imageSrc":'assets/pro5.jpg',
      "role":"user"

    },
    {
      "id": 6,
      "name": "Larso Guera",
      "email": "larsonguerra@unq.com",
      "phone": "+1 (972) 566-2684",
      "imageSrc":'assets/pro1.jpg',
      "role":"employe"

    },
    {
      "id": 7,
      "name": "Shel Ballard",
      "email": "shelbyballard@unq.com",
      "phone": "+1 (824) 467-3579",
      "imageSrc":'assets/pro7.jpg',
      "role":"user"

    },
    {
      "id": 8,
      "name": "Lea Faulkn",
      "email": "leafaulkner@unq.com",
      "phone": "+1 (899) 528-3402",
      "imageSrc":'assets/pro8.jpg',
      "role":"admin"

    },
    {
      "id": 9,
      "name": "Cecel Wolf",
      "email": "ceceliawolf@unq.com",
      "phone": "+1 (862) 507-3140",
      "imageSrc":'assets/pro9.jpg',
      "role":"user"

    },
    {
      "id": 10,
      "name": "Melva Nixon",
      "email": "melvanixon@unq.com",
      "phone": "+1 (901) 444-3081",
      "imageSrc":'assets/pro10.jpg',
      "role":"employe"

    },
    {
      "id": 11,
      "name": "Ber Chamb",
      "email": "bernardchambers@unq.com",
      "phone": "+1 (831) 539-3366",
      "imageSrc":'assets/pro11.jpg',
      "role":"user"

    },
    {
      "id": 12,
      "name": "Wendi Bende",
      "email": "wendibender@unq.com",
      "phone": "+1 (868) 414-2720",
      "imageSrc":'assets/pro12.jpg',
      "role":"user"

    },
    {
      "id": 13,
      "name": "Wall Stew",
      "email": "wallstewart@unq.com",
      "phone": "+1 (814) 558-3191",
      "imageSrc":'assets/pro13.jpg',
      "role":"employe"

    },
    {
      "id": 14,
      "name": "Howe Gilbe",
      "email": "howellgilbert@unq.com",
      "phone": "+1 (926) 512-3631",
      "imageSrc":'assets/pro14.jpg',
      "role":"user"

    },
    {
      "id": 15,
      "name": "Nguye Max",
      "email": "nguyenmaxwell@unq.com",
      "phone": "+1 (838) 469-2152",
      "imageSrc":'assets/pro15.jpg',
      "role":"employe"
    },
    {
      "id": 16,
      "name": "Norris Hendr",
      "email": "norrishendricks@unq.com",
      "phone": "+1 (818) 563-2900",
      "imageSrc":'assets/pro15.jpg',
      "role":"user"
    },
    {
      "id": 17,
      "name": "Salin Mcleod",
      "email": "salinasmcleod@unq.com",
      "phone": "+1 (888) 413-3775",
      "imageSrc":'assets/pro17.jpg',
      "role":"employe"
    },
    {
      "id": 18,
      "name": "Mich Barrett",
      "email": "michellebarrett@unq.com",
      "phone": "+1 (988) 446-2594",
      "imageSrc":'assets/pro13.jpg',
      "role":"user"
    },
    {
      "id": 19,
      "name": "Burke Barlow",
      "email": "burkebarlow@unq.com",
      "phone": "+1 (965) 492-2552",
      "imageSrc":'assets/pro12.jpg',
      "role":"user"
    },
    {
      "id": 20,
      "name": "Rosie Cumm",
      "email": "rosiecummings@unq.com",
      "phone": "+1 (845) 456-2237",
      "imageSrc":'assets/pro11.jpg',
      "role":"employe"
    },
    {
      "id": 21,
      "name": "Sanf Frye",
      "email": "sanfordfrye@unq.com",
      "phone": "+1 (936) 581-3494",
      "imageSrc":'assets/pro10.jpg',
      "role":"user"
    },
    {
      "id": 22,
      "name": "Janna Peck",
      "email": "jannapeck@unq.com",
      "phone": "+1 (824) 512-2437",
      "imageSrc":'assets/pro9.jpg',
      "role":"user"
    },
    {
      "id": 23,
      "name": "Lorra Sykes",
      "email": "lorrainesykes@unq.com",
      "phone": "+1 (959) 422-3635",
      "imageSrc":'assets/pro8.jpg',
      "role":"user"
    },
    {
      "id": 24,
      "name": "Vicki Fulton",
      "email": "vickifulton@unq.com",
      "phone": "+1 (916) 455-2402",
      "imageSrc":'assets/pro7.jpg',
      "role":"user"
    },
    {
      "id": 25,
      "name": "Maey Moody",
      "email": "masseymoody@unq.com",
      "phone": "+1 (840) 453-3811",
      "imageSrc":'assets/pro6.jpg',
      "role":"user"
    },
    {
      "id": 26,
      "name": "Grant Berg",
      "email": "grantberg@unq.com",
      "phone": "+1 (837) 554-3706",
      "imageSrc":'assets/pro5.jpg',
      "role":"employe"
    },
    {
      "id": 27,
      "name": "Hawk Winter",
      "email": "hawkinswinters@unq.com",
      "phone": "+1 (945) 469-2432",
      "imageSrc":'assets/pro4.jpg',
      "role":"employe"
    },
    {
      "id": 28,
      "name": " fraz David",
      "email": "frazierdavidson@unq.com",
      "phone": "+1 (854) 558-2637",
      "imageSrc":'assets/pro3.jpg',
      "role":"employe"

    },
    {
      "id": 29,
      "name": "Fran Cervan",
      "email": "francinecervantes@unq.com",
      "phone": "+1 (923) 520-2916",
      "imageSrc":'assets/pro2.jpg',
      "role":"employe"
    },
    {
      "id": 30,
      "name": "Francis Perez",
      "email": "francisperez@unq.com",
      "phone": "+1 (885) 461-3054",
      "imageSrc":'assets/pro1.jpg',
      "role":"employe"
    }
  ];

    ngOnInit() {
    this.pagename=this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.contacts);
    this.contactData.push(this.contacts);
    console.log(this.contactData);

    }
    roleData() {
      console.log("hello",this.roleValue)
      this.contacts = [];
      this.contactData.forEach((contact: any) =>{
      contact.forEach((x: { role: any; })=>{
      if (x.role === this.roleValue) {
      this.contacts.push(x);
      }
      })
      });
      console.log("contacts", this.contacts);
 
      }

   

  get filteredContacts() {
    console.log(this.roleValue);
     
        if (!this.searchTerm || this.searchTerm.trim() === '') {
        // If no search term is entered or it contains only whitespace, return all contacts
        return this.contacts;
      }

      const searchTermLowerCase = this.searchTerm.toLowerCase();
      // Filter contacts based on the search term
      return this.contacts.filter((contact: any) =>
        contact.name.toLowerCase().includes(searchTermLowerCase) ||
        contact.email.toLowerCase().includes(searchTermLowerCase) ||
        contact.phone.toLowerCase().includes(searchTermLowerCase)
      );
     
    }
      
      




  }
