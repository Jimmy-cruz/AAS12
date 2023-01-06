import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  color = 'red';
  nombre!:String;

  // enviar(){
  //   alert('GRACIAS POR COMUNICARNOS CON NOSOTROS')
  // }

  public formContacto!: FormGroup;

  constructor(private formBulder:FormBuilder){

  }

  ngOnInit(): void{
    this.formContacto = this.formBulder.group({
      nombre:['',
        [Validators.required]
      ],
      email:['',
        [Validators.required,
        Validators.email]
      ],
      telefono:['',
        [Validators.required]
      ],
      asunto:['',
        [Validators.required,]
      ],
      mensaje:['',
        [Validators.required,]
      ]

    })
  }

  send():any{
    alert('GRACIAS POR COMUNICARNOS CON NOSOTROS');
  }
}
