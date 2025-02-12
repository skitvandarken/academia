import { Component } from '@angular/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, {type EmailJSResponseStatus} from '@emailjs/browser'

@Component({
  selector: 'app-registo',
  imports: [ CommonModule, ReactiveFormsModule, 
    MenuComponent,
    RodapeComponent
  ],
  templateUrl: './registo.component.html',
  styleUrl: './registo.component.css'
})
export class RegistoComponent {

  

  partnershipForm: FormGroup;
  selectedPartnership: string = '';

    

  constructor(private fb: FormBuilder) {

    

    this.partnershipForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{9,15}$/)]],
      potCliente: ['' ],
      numColab: [''],
      numeroColaboradores: [''],
      receitaAnual: [''],
      volVendas: [''],
      subsidiariaEscolhida: [''],
      partnershipType: [''],
      paisForm: [''],
      tipoEmpresa: [''],
      nomeEmpresa: [''],
      equipaVendas: [''],
      servicoInteress: [''],
      anosOperacoes: [''],
      businessIndicatorDetails: this.fb.group({
        referralCount: [''],
        keyIndustries: [''],
      }),
      authorizedAgentDetails: this.fb.group({
        region: [''],
        experienceYears: [''],
      }),
      resellerDetails: this.fb.group({
        storeName: [''],
        productSpecialty: [''],
      }),
    });

    this.partnershipForm.get('partnershipType')?.valueChanges.subscribe(value => {
      this.selectedPartnership = value;
    });
  }


  submitForm(event: Event) {
    event.preventDefault();

    if (this.partnershipForm.invalid) {
      window.alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const formData = this.partnershipForm.value;

    emailjs.send('service_hxge11t', 'template_52yj2o5', formData, {
      publicKey: '8zvRzqg96H44z9txo'
    })
    .then(() => {
      console.log('SUCESSO');
      window.alert('Registo solicitado com sucesso! 🎉');
      this.partnershipForm.reset();
    })
    .catch((error: EmailJSResponseStatus) => {
      console.error('Falhou...', error.text);
      window.alert('Não foi possível enviar sua candidatura.');
    });

}

}
